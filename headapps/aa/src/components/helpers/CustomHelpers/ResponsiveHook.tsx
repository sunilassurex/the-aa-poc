/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import Constant from '../Constant/Constant';

const { DESKTOP, TABLET, MOBILE } = Constant.RESPONSIVE_VARIABLES;

type DeviceType = typeof MOBILE | typeof TABLET | typeof DESKTOP;

// Check window object is accessible or not
export const canUseDOM = () => {
  return typeof window !== 'undefined' && window?.document?.createElement;
};

function useResponsiveDevice(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>(
    canUseDOM() ? checkResponsive(window.outerWidth) : DESKTOP
  );

  function checkResponsive(screenWidth: number) {
    if (screenWidth) {
      if (screenWidth < 720) return MOBILE;
      else if (screenWidth >= 720 && screenWidth < 1024) return TABLET;
      else return DESKTOP;
    } else {
      return DESKTOP;
    }
  }

  useEffect((): void | any => {
    if (canUseDOM()) {
      const handleResize = () => {
        const screenOuterWidth = window.outerWidth;
        const screenInnerWidth = window.innerWidth;
        setDeviceType(
          checkResponsive(
            screenOuterWidth === screenInnerWidth ? screenInnerWidth : screenOuterWidth
          )
        );
      };

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Initial device type on component mount
      handleResize();

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return deviceType;
}
export default useResponsiveDevice;
