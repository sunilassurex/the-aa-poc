/* eslint-disable prettier/prettier */
'use client';
import React, { useState } from 'react';

const VideoWithText = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="md:py-[1.5rem] py-[1rem]">
      <div className="xl:max-w-[1160px] md:max-w-[74.6rem] mx-auto px-[1rem] md:px-[1.1rem] xl:px-[2rem]">
        <div className="max-w-[1015px] md:py-[49px] py-[30px] md:px-0 px-[6px]  mx-auto ">
          <h2 className=" text-center !text-[24px] !leading-[28px] !tracking-[-.5px] md:mb-[16px] !font-bold text-gray-900 mb-[8px]">
            Accident Assist explained in 60 seconds
          </h2>
          <p
            style={{ fontFamily: "Arial, 'Helvetica Neue', Helvetica, Verdana, sans-serif" }}
            className="!text-[1.4rem] md:!text-[1.3rem] xl:!text-[14px] !tracking-[0px] !leading-[2.2rem] xl:!leading-[21px] md:!leading-[1.9rem] md:!max-w-[566px] text-center !mx-auto !my-[24px] md:mb-[24px] sm:text-base max-w-2xl"
          >
            Watch our short video to learn about our hassle-free, 24/7 car accident claims service,
            which includes recovery, repair, a courtesy or hire car, and talking to your insurer.
          </p>

          <div className="relative w-full h-0 pb-[56.25%] md:!max-w-[980px] !mx-auto">
            {!isPlaying ? (
              <div className="absolute top-0 left-0 w-full h-auto rounded  overflow-hidden">
                <img
                  src="/Accident-video-thumbnail.png"
                  alt="Accident Assist explained video"
                  className="md:w-[960px] md:h-[540px]"
                />
                <button
                  onClick={handlePlay}
                  className="absolute bg-gradient-to-b from-[#ffcc00] to-[#f9b800] !rounded-full top-1/2 left-1/2 transform -translate-x-1/2 xl:-translate-y-[42%] md:-translate-y-[49%] -translate-y-[25%] z-10 text-[#1d1d1d] border-[0.1rem] border-[#ffc400] !shadow-[inset_0_-4px_6px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.08)] "
                  // style={{
                  //   background:
                  //     'linear-gradient(to bottom, rgba(255, 204, 0, 1) 0%, rgba(249, 184, 0, 1) 100%) !important',
                  // }}
                  aria-label="Play video"
                >
                  <img
                    src="/video-play-icon.png"
                    alt="Play button"
                    className="md:!w-[7.7rem] md:!h-[7.7rem] w-[4.1rem] h-[4.1rem]"
                  />
                </button>
                <div className="absolute inset-0"></div>
              </div>
            ) : (
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded shadow-lg"
                src="https://www.youtube.com/embed/bnMTh6XWC_Y?autoplay=1"
                title="Accident Assist service explained in 1 minute"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoWithText;

