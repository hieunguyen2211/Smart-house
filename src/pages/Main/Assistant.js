import React, { useState, useEffect } from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import { AudioFilled } from '@ant-design/icons';
import { Input } from 'antd';
import { getCurrentLed, updateStatusLed } from '../../firebase/devices/led';
import {
  getCurrentServo,
  updateStatusServo,
} from '../../firebase/devices/servo';
import ChatBox from '../../components/ChatBox/ChatBox';
import { API_CHATBOT_URL } from '../../api/config';
import './Assistant.css';
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const urlKeyBoardIcon =
  process.env.PUBLIC_URL + '/icons/assistant/keyboard.svg';
const urlSendIcon = process.env.PUBLIC_URL + '/icons/assistant/send.svg';

// recognition.start();

function Devices() {
  const [systemMessage, setSystemMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [userText, setUserText] = useState('');
  const voiceCommands = () => {
    setSystemMessage('');
    setUserMessage('');
    setIsRecording(true);
    setIsTyping(false);
    recognition.onresult = async (e) => {
      let current = e.resultIndex;
      let transcript = e.results[current][0].transcript;
      if (transcript.length > 0) setUserMessage(transcript);
    };

    setTimeout(() => {
      recognition.start();
    }, 50);

    recognition.onspeechend = () => {
      recognition.stop();
      setIsRecording(false);
    };
  };

  const handleTextChange = (e) => {
    setUserText(e.target.value);
  };

  const submitText = () => {
    setUserMessage(userText);
    setUserText('');
    setIsTyping(false);
  };

  const handleCommand = async (command) => {
    if (command.length > 0) {
      command = command.toLowerCase();
      if (command.indexOf('light') !== -1) {
        const statusRequestString = command.indexOf('on') !== -1 ? 'on' : 'off';
        let roomName = command
          .slice(
            command.indexOf(statusRequestString) + statusRequestString.length,
            command.indexOf('light')
          )
          .trim()
          .replace(/ /g, '')
          .toUpperCase();
        if (roomName === 'LIVINGROOM') roomName = 'LIVINGROOM1';
        const ledRead = await getCurrentLed(roomName);
        const { status } = ledRead;
        if (command.indexOf('on') !== -1) {
          if (status === 1) {
            setSystemMessage('This light is already turned on');
          }
          if (status === 0) {
            updateStatusLed(1, roomName);
            setSystemMessage('Succeeded. Check your device');
          }
        }
        if (command.indexOf('off') !== -1) {
          if (status === 0) {
            setSystemMessage('This light is already turned off');
          }
          if (status === 1) {
            updateStatusLed(0, roomName);
            setSystemMessage('Succeeded. Check your device');
          }
        }
      } else if (command.indexOf('door') !== -1) {
        let servoName = '';
        if (
          command.indexOf('main') !== -1 ||
          command.indexOf('living room') !== -1
        ) {
          servoName = 'MAINDOOR';
        } else if (command.indexOf('garage') !== -1) {
          servoName = 'GARAGEDOOR';
        } else {
          servoName = '';
        }
        if (servoName.length > 0) {
          const servoRead = await getCurrentServo(servoName);
          const { status } = servoRead;
          if (command.indexOf('open') !== -1) {
            if (status === 1) {
              setSystemMessage('This door is already opened');
            }
            if (status === 0) {
              updateStatusServo(1, servoName);
              setSystemMessage('Succeeded. Check your device');
            }
          }
          if (command.indexOf('close') !== -1) {
            if (status === 0) {
              setSystemMessage('This door is already closed');
            }
            if (status === 1) {
              updateStatusServo(0, servoName);
              setSystemMessage('Succeeded. Check your device');
            }
          }
        } else {
          setSystemMessage('Error command. Try again');
        }
      } else {
        setSystemMessage(command);
      }
    }
  };

  useEffect(() => {
    const postData = () => {
      fetch(API_CHATBOT_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: 'Hieu',
          message: userMessage,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          // if (res[0].text.length > 0) setSystemMessage(res[0].text);
          if (res[0].text.length > 0) {
            handleCommand(res[0].text);
          }
        })
        .catch((error) => console.log(error));
    };
    if (userMessage.length > 0) {
      postData();
    }
  }, [userMessage]);

  return (
    <div className="page-container">
      <ControlHeader title="assistant" path="/home" colorText="white" />
      <div
        className="page-content-wrapper"
        style={{
          justifyContent: 'space-between',
          top: '12vh',
          height: '74vh',
        }}
      >
        <div style={{ height: '60vh' }}>
          <ChatBox
            avatar="/images/profile/assistant.jpg"
            message="How can I help you?"
          />
          {userMessage !== '' && (
            <ChatBox
              avatar="/images/profile/avatar.jpg"
              message={
                userMessage.charAt(0).toUpperCase() + userMessage.slice(1)
              }
              reversed={true}
            />
          )}
          {systemMessage !== '' && (
            <ChatBox
              avatar="/images/profile/assistant.jpg"
              message={
                systemMessage.charAt(0).toUpperCase() + systemMessage.slice(1)
              }
            />
          )}
        </div>
        {!isRecording && !isTyping ? (
          <div className="btn-bar">
            <div
              className="btn-assistant btn-speech"
              onClick={() => voiceCommands()}
            >
              <AudioFilled />
            </div>
            <div
              className="btn-assistant btn-keyboard"
              onClick={() => {
                setIsTyping(true);
              }}
            >
              <img src={urlKeyBoardIcon} alt="icon" style={{ height: '4vh' }} />
            </div>
          </div>
        ) : isRecording ? (
          <div id="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        ) : (
          <Input
            className="assistant-text-area"
            onChange={handleTextChange}
            value={userText}
            suffix={
              userText.length > 0 ? (
                <img
                  src={urlSendIcon}
                  alt="icon"
                  style={{ height: '20px' }}
                  onClick={submitText}
                />
              ) : (
                <AudioFilled
                  style={{ fontSize: '20px', color: '#204079' }}
                  onClick={() => voiceCommands()}
                />
              )
            }
          />
        )}
      </div>
      <br />
      <NavigationBar />
    </div>
  );
}

export default Devices;
