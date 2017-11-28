import React, { Component } from 'react';
import SimpleWebRTC from 'simplewebrtc';

class VideoStreamOut extends Component {
  constructor(props) {
    super(props);
    this.webRTC = new SimpleWebRTC({
      media: {
        video: true,
        audio: true,
      },
      // the id/element dom element that will hold "our" video
      localVideoEl: 'local',
      // the id/element dom element that will hold remote videos
      // remoteVideosEl: 'remote',
      // immediately ask for camera access
      autoRequestMedia: true,
    })
  }

  componentDidMount() {
    this.webRTC.on('readyToCall', () => {
      // you can name it anything
      this.webRTC.joinRoom('your awesome room name');
    });
  }
  render() {
    return (
      <div>
        <h1>Video Out</h1>
        <div id="local" />
      </div>
    );
  }
}

export default VideoStreamOut;
