"use client";

import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { ReactNode } from "react";

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface SectionProps {
    children: ReactNode;
    delay?: number;
    [key: string]: any;
}

export const Section = ({ children, delay = 0, ...props }: SectionProps) => (
    <StyledDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay } as any}
        mb={6}
        {...props}
    >
        {children}
    </StyledDiv>
);