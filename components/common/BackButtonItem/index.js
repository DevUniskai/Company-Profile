"use client"
import { Box, Button, Icon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
    const router = useRouter();

    return (
        <Box >
            <Button colorScheme="brown" onClick={router.back}>
                Back
            </Button>

        </Box>
        
    );
};

export default BackButton;