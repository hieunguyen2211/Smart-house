import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import { Rect, Layer, Stage } from 'react-konva';
import { Icon } from 'antd';
import { API_AI_URL } from '../../api/config.js';
import './FaceRecog.css';

import SyncLoader from 'react-spinners/SyncLoader';
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user'
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
function Security() {
    const [images, setImages] = useState([]);
    const [statusReg, setStatusReg] = useState(false);
    const webcamRef = React.useRef(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        const block = imageSrc.split(';');
        const contentType = block[0].split(':')[1];
        const realData = block[1].split(',')[1];
        const blob = b64toBlob(realData, contentType);
        setImages(images => [...images, blob]);
    };
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (images.length === 10) {
            const formData = new FormData();
            images.forEach(e => formData.append('files[]', e, e.name));
            console.log(formData.getAll('files[]'));
            fetch(`${API_AI_URL}/recognize`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formData
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                });
            setImages([]);
        }
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [images, loading]);

    console.log(images);
    return loading ? (
        <div className="page-container" style={{ background: 'white' }}>
            <div className="page-content-wrapper">
                <SyncLoader size={20} color={'#3a7bd5'} loading={loading} />
            </div>
            <NavigationBar />
        </div>
    ) : (
        <div className="page-container">
            <ControlHeader title="security" path="/security" />
            <div className="page-content-wrapper">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    mirrored={true}
                    videoConstraints={videoConstraints}
                    className="webcam"
                    style={{ height: '100%', position: 'relative' }}
                />
                <div className="Canvas">
                    <Stage
                        width={window.innerWidth}
                        height={window.innerHeight}
                    >
                        <Layer>
                            <Rect
                                x={10}
                                y={10}
                                width={250}
                                height={300}
                                strokeWidth={3}
                                stroke={'white'}
                            />
                        </Layer>
                    </Stage>
                </div>
                {!statusReg ? (
                    <Icon
                        type="play-circle"
                        className="security-icon-power"
                        theme="filled"
                        onClick={() => {
                            let i = 0;
                            setStatusReg(true);
                            let interVal = setInterval(() => {
                                capture();
                                if (++i === 10) {
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
                )}
            </div>

            <NavigationBar />
        </div>
    );
}

export default Security;
