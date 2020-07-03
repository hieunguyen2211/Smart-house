import React from 'react';
import NavigationBar from '../../../components/Navigation/NavigationBar';
import ControlHeader from '../../../components/Header/Control';
import './style.css';

export default function index() {
  return (
    <div className="page-container">
      <ControlHeader title="camera" path="/devices" />
      <div
        className="page-content-wrapper"
        style={{ justifyContent: ' center' }}
      >
        <iframe
          src="https://34.68.222.64/demos/video-conferencing.html"
          allow="camera;microphone"
          title="Camera"
          style={{ border: 'none', marginLeft: '7vw' }}
          scrolling="no"
        ></iframe>
      </div>
      <NavigationBar />
    </div>
  );
}
