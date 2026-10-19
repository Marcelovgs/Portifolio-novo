"use client";

import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { Section } from "@/components/section";
import { PostGridItem } from "@/components/grid-item";

export default function Posts() {
    return (
        <Container maxW="container.md" pt={14}>
            <Heading as="h3" fontSize={20} mb={4}>
                Publicações Populares
            </Heading>

            <Section delay={0.1}>
                {/* A grelha de 2 colunas para alinhar os cartões lado a lado */}
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <PostGridItem
                        title="Projeto que eu desenvolvi que me gerou 16 Mil reais, agora o servidor fechou."
                        thumbnail="/images/linkedin.jpg" // print do post do LinkedIn aqui
                        href="https://lnkd.in/p/dNU3Tr8F" // Coloque o link real do post aqui
                    />
                    {/*
                    <PostGridItem
                        title="Concluindo o bootcamp do Santander!"
                        thumbnail="/images/placeholder.jpg" // Coloque o print do post do LinkedIn aqui
                        href="https://lnkd.in/p/dNU3Tr8F" // Coloque o link real do post aqui
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.3}>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <PostGridItem
                        title="Certificação Oracle Next Education"
                        thumbnail="/images/placeholder.jpg" // Coloque o print do post do LinkedIn aqui
                        href="https://linkedin.com/in/marcelovgs/..." // Coloque o link real do post aqui
                    />
                    <PostGridItem
                        title="Estudando novas tecnologias Java"
                        thumbnail="/images/placeholder.jpg" // Coloque o print do post do LinkedIn aqui
                        href="https://linkedin.com/in/marcelovgs/..." // Coloque o link real do post aqui
                    />
                    */}
                </SimpleGrid>
            </Section>

        </Container>

    );
}