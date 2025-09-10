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
        src: url('/fonts/SigvarRegular.woff2') format('woff2'),
             url('/fonts/SigvarRegular.woff') format('woff');
      }
      @font-face {
        font-family: 'Sigvar';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/SigvarItalic.woff2') format('woff2'),
             url('/fonts/SigvarItalic.woff') format('woff');
      }
      @font-face {
        font-family: 'Sigvar';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/SigvarBold.woff2') format('woff2'),
             url('/fonts/SigvarBold.woff') format('woff');
      }
      @font-face {
        font-family: 'Sigvar';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/SigvarBoldItalic.woff2') format('woff2'),
             url('/fonts/SigvarBoldItalic.woff') format('woff');
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
