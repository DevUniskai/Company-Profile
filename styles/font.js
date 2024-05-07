"use client";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'CircularStd-Book-Heading';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/CircularStd-Book.ttf') format('ttf');
      }
      /* latin */
      @font-face {
        font-family: 'CircularStd-Book-Body';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/CircularStd-Book.ttf') format('ttf');
      }
      `}
  />
);

export default Fonts;
