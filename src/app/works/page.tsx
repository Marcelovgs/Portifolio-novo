"use client";

import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "@/components/grid-item";
import { Section } from "@/components/section";

export default function Works() {
    return (
        <Container maxW="container.md" pt={14}>
            <Heading as="h3" fontSize={20} mb={4}>
                Meus Projetos
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                {/* Envolvi o projeto com a Section */}
                <Section delay={0.1}>
                    <WorkGridItem
                        id="projeto-java"
                        title="App de Filmes"
                        thumbnail="/images/moviesflix.jpg" // Imagem 1
                    >
                        Aplicação construída com React, que consome a API do TMDB para apresentar dados de filmes. Foram utilizados hooks e React Router para gerenciar a navegação, com o Vite configurado para oferecer um ambiente de desenvolvimento mais rápido e eficiente..
                    </WorkGridItem>
                </Section>

                {/* Adicionei um pequeno delay extra (0.2) para o segundo item aparecer logo depois do primeiro */}
                <Section delay={0.1}>
                    <WorkGridItem
                        id="projeto-java"
                        title="App de Filmes"
                        thumbnail="/images/moviesflix.jpg"
                    >
                        {/* ... */}
                        Projeto desenvolvido no projeto desenvolve do grupo oboticario.
                        Tecnologias Utilizadas
                        Front-end
                        HTML5
                        CSS3
                        JavaScript (ES6+)
                        Swiper.js: Biblioteca para criação de sliders e carrosséis interativos

                        Back-end
                        Node.js
                        Express.js
                        MongoDB
                        Mongoose
                    </WorkGridItem>
                </Section>

                {/* Pode adicionar um terceiro projeto aqui, usando <Section delay={0.3}> */}
                <Section delay={0.2}>
                    <WorkGridItem
                        id="projeto-javascript"
                        title="Previsao do tempo"
                        thumbnail="/images/previsaodotempo.jpg" // Imagem 2
                    >
                        Este é um projeto de site de previsão do tempo desenvolvido em React. O objetivo deste projeto é servir como um estudo prático para aprender e aplicar os conceitos de desenvolvimento front-end com React e consumo de api. O aplicativo permite aos usuários consultar as condições climáticas atuais de diferentes localidades.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Divider my={6} />
        </Container>
    );
}