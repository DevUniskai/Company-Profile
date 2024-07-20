"use client"

import React from "react"
import { Button } from "@chakra-ui/react"

const CheckoutButton = ({ order_id, product_name, first_name, last_name, user_email, user_phoneNumber, food_halal_non, food_vegan, food_beef, add_notes }) => {
    const handleCollection = async (event) => {
        event.preventDefault()
        
        const data = { 
            order_id, 
            product_name, 
            first_name, 
            last_name, 
            user_email, 
            user_phoneNumber, 
            food_halal_non, 
            food_vegan, 
            food_beef, 
            add_notes 
        }
        
        try {
            const response = await fetch("api/v1/detailCust", {
                method: "POST",
                // headers: {
                //     "Content-Type": "application/json"
                // },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const detailcustomer = await response.json();
            console.log({ detailcustomer });
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred while processing your request. Please try again.");
        }
    }

    return (
        <Button 
            onClick={handleCollection} 
            colorScheme="brown" 
            bgColor="brown" 
            color="white" 
            size="lg"
        >
            Checkout
        </Button>
    );
};

export default CheckoutButton;
