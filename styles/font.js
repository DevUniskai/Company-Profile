"use client";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* Circular */
      @font-face {
        font-family: 'CircularStd-Book-Heading';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/CircularStd-Book.woff2') format('woff2'),
             url('/fonts/CircularStd-Book.woff') format('woff');
      }

      @font-face {
        font-family: 'CircularStd-Book-Body';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/CircularStd-Book.woff2') format('woff2'),
             url('/fonts/CircularStd-Book.woff') format('woff');
      }

      @font-face {
        font-family: 'CircularStd-Medium-Body';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/CircularStd-Medium.woff2') format('woff2'),
             url('/fonts/CircularStd-Medium.woff') format('woff');
      }

      /* Sigvar */
      @font-face {
        font-family: 'Sigvar';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Sigvar-Regular.woff2') format('woff2'),
             url('/fonts/Sigvar-Regular.woff') format('woff');
      }
      @font-face {
        font-family: 'Sigvar';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Sigvar-Italic.woff2') format('woff2'),
             url('/fonts/Sigvar-Italic.woff') format('woff');
      }
      @font-face {
        font-family: 'Sigvar';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Sigvar-Bold.woff2') format('woff2'),
             url('/fonts/Sigvar-Bold.woff') format('woff');
      }
      @font-face {
        font-family: 'Sigvar';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Sigvar-Bold-Italic.woff2') format('woff2'),
             url('/fonts/Sigvar-Bold-Italic.woff') format('woff');
      }

      /* Sinhala */
      @font-face {
        font-family: 'Sinhala';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Sinhala-MN.woff2') format('woff2'),
             url('/fonts/Sinhala-MN.woff') format('woff');
      }
    `}
  />
);

export default Fonts;
