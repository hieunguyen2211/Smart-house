import React, { useState, useEffect } from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import Webcam from 'react-webcam';
import { API_AI_URL } from '../../api/config.js';
import Announcement from '../../components/Modal/Announcement';
import { Input, Button } from 'antd';
import './Register.css';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};
function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

export default function Register() {
  const [images, setImages] = useState([]);
  const [statusReg, setStatusReg] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isSucceeded, setIsSucceeded] = useState(false);
  const webcamRef = React.useRef(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const amountImage = 20;

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const block = imageSrc.split(';');
    const contentType = block[0].split(':')[1];
    const realData = block[1].split(',')[1];
    const blob = b64toBlob(realData, contentType);
    setImages((images) => [...images, blob]);
  };

  useEffect(() => {
    const postData = () => {
      setMessage('Processing');
      setIsSucceeded(true);
      const formData = new FormData();
      images.forEach((e) => formData.append('files[]', e, e.name));
      formData.append('username', name);
      //console.log(formData.getAll("files[]"));
      fetch(`${API_AI_URL}/face/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          // if (res.code === 500) {
          //     setMessage("Server Error. Try again");
          //     setIsSucceeded(false);
          // } else if (res.code === 200) {
          //     if (
          //         res.label === "Unknown" ||
          //         res.label === undefined
          //     ) {
          //         setMessage("Unknown. Try again");
          //         setIsSucceeded(false);
          //     } else {
          //         let name = res.label.toLowerCase();
          //         const firstLetter = name.charAt(0).toUpperCase();
          //         name = firstLetter + name.slice(1);
          //         setMessage("Welcome Home, " + name);
          //         setIsSucceeded(true);
          //     }
          // } else {
          //     setMessage("Error. Try again");
          //     setIsSucceeded(false);
          // }
          console.log(res);
        });
      setVisible(true);
    };
    if (images.length === amountImage) {
      postData();
      setImages([]);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [images, loading, message]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="page-container">
      <ControlHeader title="security" path="/security" />
      <div className="page-content-wrapper">
        <div className="content-section">
          <Input
            addonBefore="Name"
            style={{ width: '84vw' }}
            value={name}
            onChange={handleChangeName}
          />
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            mirrored={true}
            videoConstraints={videoConstraints}
            className="webcam"
            style={{
              position: 'relative',
              height: '35vh',
            }}
          />
          {!statusReg ? (
            <Button
              onClick={() => {
                let i = 0;
                setStatusReg(true);
                let interVal = setInterval(() => {
                  capture();
                  if (++i === amountImage) {
                    clearInterval(interVal);
                    setStatusReg(false);
                  }
                }, 50);
              }}
              className="btn-submit"
            >
              Submit
            </Button>
          ) : (
            <Button disabled className="btn-submit">
              Submit
            </Button>
          )}
        </div>

        {/* {!statusReg ? (
                    <Icon
                        type="play-circle"
                        className="security-icon-power"
                        theme="filled"
                        onClick={() => {
                            let i = 0;
                            setStatusReg(true);
                            let interVal = setInterval(() => {
                                capture();
                                if (++i === 5) {
                                    clearInterval(interVal);
                                    setStatusReg(false);
                                }
                            }, 200);
                        }}
                    />
                ) : (
                    <Icon
                        type="pause-circle"
                        className="security-icon-power"
                        theme="filled"
                    />
                )} */}
      </div>

      <NavigationBar />
    </div>
  );
}
