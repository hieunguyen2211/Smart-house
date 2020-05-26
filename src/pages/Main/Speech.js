import React, { useState } from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import { AudioFilled } from '@ant-design/icons';
import { getCurrentLed, updateStatusLed } from '../../firebase/devices/led';
import ChatBox from '../../components/ChatBox/ChatBox';
import './Speech.css';
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// recognition.start();

function Devices() {
    const [systemMessage, setSystemMessage] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [message, setMessage] = useState('');
    const voiceCommands = () => {
        setMessage('');
        setSystemMessage('');
        setIsRecording(true);
        // recognition.onstart = () => {
        //     console.log('Voice is actived');
        // };
        recognition.onresult = async (e) => {
            let current = e.resultIndex;
            let transcript = e.results[current][0].transcript;
            let mobileRepeatBug =
                current === 1 && transcript === e.results[0][0].transcript;
            if (!mobileRepeatBug) {
                const message =
                    transcript.charAt(0).toUpperCase() + transcript.slice(1);
                setMessage(message);
                if (transcript.search('light') !== -1) {
                    try {
                        let index = transcript.search('the');
                        const newTranscript =
                            transcript.slice(0, index) +
                            transcript.slice(index + 3);
                        index = newTranscript.search('the');
                        if (index !== -1) {
                            const roomName = newTranscript
                                .slice(index + 3)
                                .trim();
                            const ledRead = await getCurrentLed(roomName);
                            if (ledRead !== null) {
                                const index = transcript.search('on');
                                const statusInTranscript = index !== -1 ? 1 : 0;
                                if (ledRead.status !== statusInTranscript) {
                                    updateStatusLed(!ledRead.status, roomName);
                                    setSystemMessage(
                                        'Succeeded. Check your device'
                                    );
                                } else {
                                    if (statusInTranscript === 1) {
                                        setSystemMessage(
                                            'The light is already turned on'
                                        );
                                    }
                                    if (statusInTranscript === 0) {
                                        setSystemMessage(
                                            'The light is already turned off'
                                        );
                                    }
                                }
                            } else {
                                setSystemMessage('Error command. Try again');
                            }
                        } else {
                            setSystemMessage('Error command. Try again');
                        }
                    } catch (error) {
                        setSystemMessage('Error command. Try again');
                    }
                } else {
                    setSystemMessage('Error command. Try again');
                }
            }
        };

        setTimeout(() => {
            recognition.start();
        }, 50);

        recognition.onspeechend = () => {
            recognition.stop();
            setIsRecording(false);
        };
    };

    return (
        <div className="page-container">
            <ControlHeader title="speech" path="/home" colorText="white" />
            <div
                className="page-content-wrapper"
                style={{
                    justifyContent: 'space-between',
                    top: '9vh',
                    height: '77vh',
                }}
            >
                <div style={{ height: '60vh' }}>
                    <ChatBox
                        avatar="/images/profile/assistant.jpg"
                        message="How can I help you?"
                    />
                    {message !== '' && (
                        <ChatBox
                            avatar="/images/profile/avatar.jpg"
                            message={message}
                            reversed={true}
                        />
                    )}
                    {systemMessage !== '' && (
                        <ChatBox
                            avatar="/images/profile/assistant.jpg"
                            message={systemMessage}
                        />
                    )}
                </div>
                {!isRecording ? (
                    <button
                        onClick={() => voiceCommands()}
                        className="btn-speech"
                    >
                        <AudioFilled
                            style={{ color: 'white', fontSize: '5vh' }}
                        />
                    </button>
                ) : (
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
                )}
            </div>

            <br />

            <NavigationBar />
        </div>
    );
}

export default Devices;
