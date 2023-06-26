import "./smokeAnimation.scss";
import React, { useState, useEffect } from "react";
import Video from "../smokeAnimation/smoke.mp4";

const SmokeAnimation = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <div
      className="smokeAnimation-body"
      style={{ background: videoLoaded ? "transparent" : "black" }}
    >
      {!videoLoaded && <div>Loading...</div>}
      <video
        id="smokeVideo"
        src={Video}
        autoPlay
        muted
        preload="auto"
        style={{ display: videoLoaded ? "block" : "none" }}
        onLoadedData={() => setVideoLoaded(true)}
      ></video>
      {videoLoaded && (
        <h1 className="smokeAnimation-h1">
          <span>Ü</span>
          <span>B</span>
          <span>E</span>
          <span>R</span>
          <span>&nbsp;</span>
          <span>U</span>
          <span>N</span>
          <span>S</span>
        </h1>
      )}
    </div>
  );
};

export default SmokeAnimation;

// import { Fragment, useState, useEffect } from "react";
// import Video from "../smokeAnimation/smoke.mp4";

// const SmokeAnimation = () => {
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   useEffect(() => {
//     const videoElement = document.getElementById("smokeVideo");

//     const handleVideoLoad = () => {
//       setVideoLoaded(true);
//     };
//     videoElement.addEventListener("canplaythrough", handleVideoLoad);

//     return () => {
//       videoElement.removeEventListener("canplaythrough", handleVideoLoad);
//     };
//   }, []);

//   return (
//     <Fragment>
//       <div
//         className="smokeAnimation-body"
//         style={{ background: videoLoaded ? "transparent" : "black" }}
//       >
//         {!videoLoaded && <div>Loading...</div>}
//         <video
//           id="smokeVideo"
//           src={Video}
//           autoPlay
//           muted
//           preload="auto"
//           style={{ display: videoLoaded ? "block" : "none" }}
//           onLoadedData={() => setVideoLoaded(true)}
//         ></video>
//         {videoLoaded && (
//           <h1 className="smokeAnimation-h1">
//             <span>Ü</span>
//             <span>B</span>
//             <span>E</span>
//             <span>R</span>
//             <span>&nbsp;</span>
//             <span>U</span>
//             <span>N</span>
//             <span>S</span>
//           </h1>
//         )}
//       </div>
//     </Fragment>
//   );
// };

// export default SmokeAnimation;
