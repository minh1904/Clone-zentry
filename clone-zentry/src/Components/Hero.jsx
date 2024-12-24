import { useState, useRef } from 'react';
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 3;
  const nextVdRef = useRef(null);
  const handleminiVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  const getVideo = (index) => `/Public/videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg ">
          <div
            onClick={handleminiVdClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              loop
              muted
              autoPlay
              id="current-video"
              ref={nextVdRef}
              src={getVideo(currentIndex + 1)}
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
