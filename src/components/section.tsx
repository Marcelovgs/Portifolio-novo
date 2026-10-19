"use client";

import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

// Ao definir as props como "any", o TypeScript para de dar erro no page.tsx
export const Section = ({ children, delay = 0, ...props }: any) => (
    <StyledDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // O "as any" força o TypeScript a ignorar o conflito no transition
        transition={{ duration: 0.8, delay } as any}
        mb={6}
        {...props}
    >
        {children}
    </StyledDiv>
);