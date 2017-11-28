import React, { Component } from 'react';
import SimpleWebRTC from 'simplewebrtc';

class VideoStreamIn extends Component {
  constructor(props) {
    super(props);
    this.webRTC = new SimpleWebRTC({
      media: {
        video: false,
        audio: false,
      },
      // the id/element dom element that will hold "our" video
      localVideoEl: 'local',
      // the id/element dom element that will hold remote videos
      remoteVideosEl: 'remote',
      // immediately ask for camera access
      autoRequestMedia: false,
    })
  }

  componentDidMount() {
    this.webRTC.on('readyToCall', () => {
      // you can name it anything
      this.webRTC.joinRoom('your awesome room name');
    });
    this.webRTC.on('videoAdded', videoEl => {
      videoEl.autoplay = true;
      videoEl.muted = true;
      videoEl.controls = true;
    });
  }
  render() {
    return (
      <div>
        <h1>Video In</h1>
        <div id="remote" />
      </div>
    );
  }
}

export default VideoStreamIn;
