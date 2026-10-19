"use client";

import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggleButton } from "./theme-toggle-button";
import { IoLogoGithub } from "react-icons/io5";

// Componente auxiliar para criar as hiperligações com o fundo colorido quando ativas
const LinkItem = ({ href, path, target, children, ...props }: any) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
    const activeBg = useColorModeValue("teal.200", "teal.300");

    return (
        <Link
            as={NextLink}
            href={href}
            p={2}
            bg={active ? activeBg : undefined}
            color={active ? "#202023" : inactiveColor}
            target={target}
            borderRadius="md"
            display="inline-flex"
            alignItems="center"
            gap={1.5}
            {...props}
        >
            {children}
        </Link>
    );
};

export const Navbar = () => {
    const path = usePathname(); // Deteta a página atual

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={2}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                alignItems="center"
                justifyContent="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
                            <Box as="span" cursor="pointer" fontWeight="bold">
                                Marcelo Varela
                            </Box>
                        </Link>
                    </Heading>
                </Flex>

                <Stack
                    direction="row"
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem href="https://github.com/Marcelovgs" target="_blank" path={path}>
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>

                <Box flex={1} textAlign="right">
                    <ThemeToggleButton />
                </Box>
            </Container>
        </Box>
    );
};