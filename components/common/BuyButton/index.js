"use client";
import ShopifyBuy from "@shopify/buy-button-js";
import { useEffect, useRef } from "react";

const client = ShopifyBuy.buildClient({
  domain: "07a5eb-68.myshopify.com",
  storefrontAccessToken: "02344dd9044ac7cacc5916edad0cb700",
});

const ui = ShopifyBuy.UI.init(client);

const BuyNow = () => {
  const componentInitialized = useRef(false);

  useEffect(() => {
    if (!componentInitialized.current) {
      componentInitialized.current = true;
      ui.createComponent("collection", {
        id: "620925386936",
        node: document.getElementById("collection-component-1717601886400"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                  width: "calc(25% - 20px)",
                },
                img: {
                  height: "calc(100% - 15px)",
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                },
                imgWrapper: {
                  "padding-top": "calc(75% + 15px)",
                  position: "relative",
                  height: "0",
                },
              },
              title: {
                "font-family": "Montserrat, sans-serif",
              },
              button: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                "border-radius": "12px",
                "padding-left": "80px",
                "padding-right": "80px",
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
              price: {
                "font-family": "Montserrat, sans-serif",
              },
              compareAt: {
                "font-family": "Montserrat, sans-serif",
              },
              unitPrice: {
                "font-family": "Montserrat, sans-serif",
              },
            },
            text: {
              button: "Add to cart",
            },
            googleFonts: ["Montserrat"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
              button: false,
              buttonWithQuantity: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                "border-radius": "12px",
                "padding-left": "80px",
                "padding-right": "80px",
              },
              quantityInput: {
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
              },
              title: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "bold",
                "font-size": "26px",
                color: "#4c4c4c",
              },
              price: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "18px",
                color: "#4c4c4c",
              },
              compareAt: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                color: "#4c4c4c",
              },
              unitPrice: {
                "font-family": "Helvetica Neue, sans-serif",
                "font-weight": "normal",
                "font-size": "15.299999999999999px",
                color: "#4c4c4c",
              },
            },
            googleFonts: ["Montserrat"],
            text: {
              button: "Add to cart",
            },
          },
          option: {
            styles: {
              label: {
                "font-family": "Montserrat, sans-serif",
              },
              select: {
                "font-family": "Montserrat, sans-serif",
              },
            },
            googleFonts: ["Montserrat"],
          },
          cart: {
            styles: {
              button: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "font-size": "13px",
                "padding-top": "14.5px",
                "padding-bottom": "14.5px",
                "border-radius": "12px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            googleFonts: ["Montserrat"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
              },
              count: {
                "font-size": "13px",
              },
            },
            googleFonts: ["Montserrat"],
          },
        },
      });
    }
  }, []);
  return <div id={"collection-component-1717601886400"}></div>;
};

export default BuyNow;
