import React, { useState } from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// recognition.start();

function Devices() {
    const [count, setCount] = useState(0);
    const voiceCommands = () => {
        recognition.onstart = () => {
            console.log('Voice is actived');
        };
        recognition.onresult = e => {
            let current = e.resultIndex;

            let transcript = e.results[current][0].transcript;
            console.log(transcript);
            let mobileRepeatBug =
                current === 1 && transcript === e.results[0][0].transcript;

            if (!mobileRepeatBug) {
                if (transcript === 'next' || transcript === ' next') {
                    setCount(count + 1);
                }
                if (transcript === 'back' || transcript === ' back') {
                    setCount(count - 1);
                }
            }
        };

        setTimeout(() => {
            recognition.start();
        }, 50);

        recognition.onspeechend = () => {
            recognition.stop();
            console.log('Voice stopped');
        };
    };

    // useEffect(() => {
    //     voiceCommands();
    // });

    return (
        <div className="page-container">
            <ControlHeader title="speech" path="/home" colorText="white" />
            <button onClick={() => voiceCommands()}>Click</button>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <NavigationBar />
        </div>
    );
}

export default Devices;
