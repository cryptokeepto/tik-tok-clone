import React, { useRef, useState } from "react";
import "./Video.css";

import VideoFooter from "./VideoFooter";

const Video = (): JSX.Element => {
  const [playing, setPlaying]: any = useState(false);
  const videoRef: any = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={onVideoPress}
        loop
        src="https://v16m.tiktokcdn.com/bc662343d4754b30b10f2f2b17556a49/5f329d8a/video/tos/alisg/tos-alisg-pve-0037/80c8fa00c9604107a2601778babf0e35/?a=1180&br=2864&bt=1432&cr=0&cs=0&dr=3&ds=3&er=&l=202008091330490101151531321F0C8BC5&lr=tiktok&mime_type=video_mp4&qs=0&rc=anZuamc5aXY5dTMzaTgzM0ApZmg2NzQ4ODtpNzpmNjs0OmdncjNlZl80cnJfLS1eLzRzczYyLTVhXi82LmI1YGEvLzE6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
    </div>
  );
};

export default Video;
