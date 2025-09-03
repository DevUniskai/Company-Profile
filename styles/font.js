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
        src: url('./fonts/CircularStd-Book.ttf') format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'CircularStd-Book-Body';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/CircularStd-Book.ttf') format('truetype');
      }
      @font-face {
        font-family: 'CircularStd-Medium-Body';
        font-style: normal;
        font-display: swap;
        src: url('./fonts/CircularStd-Medium.ttf') format('truetype');
      }
      /* Sigvar */
      @font-face {
        font-family: 'Sigvar';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/SigvarRegular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Sigvar';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/SigvarItalic.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Sigvar';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/SigvarBold.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Sigvar';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/SigvarBoldItalic.ttf') format('truetype');
      }
      /* Sinhala */
      @font-face {
        font-family: 'Sinhala';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Sinhala-MN.ttc') format('truetype');
      }
      `}
  />
);

export default Fonts;