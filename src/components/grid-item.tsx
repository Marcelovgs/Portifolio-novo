"use client";

import NextLink from "next/link";
import { Box, Text, LinkBox, LinkOverlay, Heading } from "@chakra-ui/react";
import Image from "next/image";

// ----------------------------------------------------
// 1. Componente para a aba Works (Projetos internos)
// ----------------------------------------------------
interface WorkGridItemProps {
    children: React.ReactNode;
    id: string;
    title: string;
    thumbnail: string;
}

export const WorkGridItem = ({ children, id, title, thumbnail }: WorkGridItemProps) => (
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
            <LinkOverlay as={NextLink} href={`/works/${id}`}>
                <Heading mt={2} fontSize={20} mb={2}>
                    {title}
                </Heading>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
);

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