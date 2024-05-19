import type { Preview } from "@storybook/preact";
import { type ScreenshotOptions, withScreenshot } from "storycap";

const preview: Preview = {
  decorators: [withScreenshot()],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    screenshot: {
      viewports: {
        // real devices
        "device 01 iPhone SE": {
          width: 320,
          height: 568,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        "device 02 iPhone 13": {
          width: 390,
          height: 844,
          deviceScaleFactor: 3,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        "device 03 iPhone 13 Pro Max": {
          width: 428,
          height: 926,
          deviceScaleFactor: 3,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        "device 04 iPad": {
          width: 768,
          height: 1024,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        "device 05 iPad landscape": {
          width: 1024,
          height: 768,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: true,
        },
        "device 06 iPad Pro": {
          width: 1024,
          height: 1366,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: false,
        },
        "device 07 iPad Pro landscape": {
          width: 1366,
          height: 1024,
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
          isLandscape: true,
        },
        "device 08 MacBook Air": {
          width: 1440,
          height: 900,
          deviceScaleFactor: 1,
          isMobile: false,
          hasTouch: false,
          isLandscape: false,
        },
        // breakpoints boundaries
        "breakpoints 01 sm max": {
          width: 640,
          height: 480,
        },
        "breakpoints 02 md min": {
          width: 641,
          height: 480,
        },
        "breakpoints 03 md max": {
          width: 768,
          height: 600,
        },
        "breakpoints 04 lg min": {
          width: 769,
          height: 600,
        },
        "breakpoints 05 lg max": {
          width: 1024,
          height: 768,
        },
        "breakpoints 06 xl min": {
          width: 1025,
          height: 768,
        },
        "breakpoints 07 xl max": {
          width: 1280,
          height: 800,
        },
        "breakpoints 08 2xl min": {
          width: 1281,
          height: 800,
        },
        "breakpoints 09 2xl max": {
          width: 1536,
          height: 960,
        },
        "breakpoints 10 more than 2xl": {
          width: 1537,
          height: 960,
        },
      },
    } satisfies ScreenshotOptions,
  },
};

export default preview;
