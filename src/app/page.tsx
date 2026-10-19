"use client";

import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  List,
  ListItem,
  Link,
  Icon,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Section } from "@/components/section";


export default function Home() {
  return (
    <Container maxW="container.md" pt={14}>
      {/* Aqui é onde o Cachorro 3D vai entrar depois */}
      <Box mb={6} p={3} textAlign="center" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} css={{ backdropFilter: "blur(10px)" }} borderRadius="lg">
        Olá, eu sou um desenvolvedor apaixonado por tecnologia.
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Marcelo Varela
          </Heading>
          <p>Digital Craftsman ( Desenvolvedor / Designer / Gamer )</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
          <Box borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" w="100px" h="100px" display="inline-block" borderRadius="full" overflow="hidden">
            <Image
              src="/images/marcelo.jpg"
              alt="Imagem de Perfil"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Box>

      {/* Secção Work */}
      <Section delay={0.1} mt={8}>
        <Heading as="h3" variant="section-title" textDecoration="underline" textUnderlineOffset={6} textDecorationColor="#525252" textDecorationThickness="4px" mb={4}>
          Work
        </Heading>
        <p>
          Sou um desenvolvedor full-stack e apaixonado por tecnologia residente no Rio Grande do Sul. Atualmente no último ano do bacharelado em Ciência da Computação (com formatura prevista para dezembro de 2026), possuo boa base prática construída através de programas de excelência. Sou formado pelo projeto Desenvolve do Grupo Boticário (focado em JavaScript full-stack, bancos de dados SQL e Docker) e pelo Oracle Next Education, onde me especializei no ecossistema Java durante um ano. Além disso, expandi meus conhecimentos em Java e Inteligência Artificial através do bootcamp do Santander. Quando não estou programando, dedico meu tempo a estudar novas tecnologias, jogar e assistir a animes.
        </p>
        <Box textAlign="center" my={4}>
          <NextLink href="/works" passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meu portfólio
            </Button>
          </NextLink>
        </Box>
      </Section>

      {/* Secção Bio */}
      <Section delay={0.2} mt={8}>
        <Heading as="h3" variant="section-title" textDecoration="underline" textUnderlineOffset={6} textDecorationColor="#525252" textDecorationThickness="4px" mb={4}>
          Bio
        </Heading>

        <Box display="flex" mb={2}>
          <Box as="span" fontWeight="bold" mr={4} minW="50px">
            1995
          </Box>
          <Box>Nasceu no Rio Grande Do Sul.</Box>
        </Box>

        {/* Bloco de 2024 */}
        <Box display="flex" mb={2}>
          <Box as="span" fontWeight="bold" mr={4} minW="50px">
            2024
          </Box>
          <Box> Formação no projeto Desenvolve do Grupo Boticário (JavaScript full-stack, Banco de dados SQL e Docker).</Box>
        </Box>

        {/* Bloco de 2025 */}
        <Box display="flex" mb={2}>
          <Box as="span" fontWeight="bold" mr={4} minW="50px">
            2025
          </Box>
          <Box>Formação no Oracle Next Education (Java).</Box>
        </Box>

        <Box display="flex" mb={2}>
          <Box as="span" fontWeight="bold" mr={4} minW="50px">
            2026
          </Box>
          <Box> Formação no Bootcamp do Santander (Java e I.A) e Previsão de formatura no bacharelado em Ciência da Computação.</Box>
        </Box>
      </Section>

      {/* Secção Hobbies (I ♥) */}
      <Section delay={0.3} mt={8}>
        <Heading as="h3" variant="section-title" textDecoration="underline" textUnderlineOffset={6} textDecorationColor="#525252" textDecorationThickness="4px" mb={4}>
          I ♥
        </Heading>
        <p>
          Arte, Música, Jogos, Pixel Art, Animes, Aprendizagem Contínua.
        </p>
      </Section>

      {/* Secção On the web */}
      <Section delay={0.3} mt={8} mb={10}>
        <Heading as="h3" variant="section-title" textDecoration="underline" textUnderlineOffset={6} textDecorationColor="#525252" textDecorationThickness="4px" mb={4}>
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Marcelovgs" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Marcelovgs
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.linkedin.com/in/marcelovareladev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}