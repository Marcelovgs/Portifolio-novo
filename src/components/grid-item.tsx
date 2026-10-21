"use client";

import { Box, Text, LinkBox, LinkOverlay, Heading } from "@chakra-ui/react";
import Image from "next/image";

// ----------------------------------------------------
// 1. Componente para a aba Works (Projetos indo pro GitHub)
// ----------------------------------------------------
interface WorkGridItemProps {
    children: React.ReactNode;
    href: string; // Trocado de 'id' para 'href'
    title: string;
    thumbnail: string;
}

export const WorkGridItem = ({ children, href, title, thumbnail }: WorkGridItemProps) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                width={400}
                height={250}
                className="grid-item-thumbnail"
                placeholder="blur"
                blurDataURL={thumbnail}
                style={{ borderRadius: "12px", objectFit: "cover" }}
            />
            {/* Removido o as={NextLink} e o /works/, agora usa o href direto para abrir em nova aba */}
            <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
                <Heading mt={2} fontSize={20} mb={2}>
                    {title}
                </Heading>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
);

// ... (Pode manter o PostGridItem exatamente como está abaixo disso)

// ----------------------------------------------------
// 2. Componente para a aba Posts (Links externos)
// ----------------------------------------------------
interface PostGridItemProps {
    title: string;
    thumbnail: string;
    href: string;
}

export const PostGridItem = ({ title, thumbnail, href }: PostGridItemProps) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                width={400}
                height={250}
                className="grid-item-thumbnail"
                placeholder="blur"
                blurDataURL={thumbnail}
                style={{ borderRadius: "12px", objectFit: "cover" }}
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2} fontSize={16} fontWeight="bold">
                    {title}
                </Text>
            </LinkOverlay>
        </LinkBox>
    </Box>
);