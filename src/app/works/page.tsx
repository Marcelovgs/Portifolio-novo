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
                <Section delay={0.1}>
                    <WorkGridItem
                        href="https://github.com/Marcelovgs/MoviesFlix"
                        title="App de Filmes"
                        thumbnail="/images/moviesflix.jpg"
                    >
                        Aplicação construída com React, que consome a API do TMDB para apresentar dados de filmes. Foram utilizados hooks e React Router para gerenciar a navegação, com o Vite configurado para oferecer um ambiente de desenvolvimento mais rápido e eficiente.
                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem
                        href="https://github.com/Marcelovgs/Projeto-Completo-Consumindo-API"
                        title="Projeto Final do projeto desensolve Oboticario."
                        thumbnail="/images/bothcare.jpg"
                    >
                        Projeto desenvolvido no projeto desenvolve do grupo oboticario.
                        Tecnologias Utilizadas: HTML5, CSS3, JavaScript (ES6+), Swiper.js, Node.js, Express.js, MongoDB, Mongoose.
                    </WorkGridItem>
                </Section>

                <Section delay={0.2}>
                    <WorkGridItem
                        href="https://github.com/Marcelovgs/PrevisaoDoTempo"
                        title="Previsao do tempo"
                        thumbnail="/images/previsaodotempo.jpg"
                    >
                        Este é um projeto de site de previsão do tempo desenvolvido em React. O objetivo deste projeto é servir como um estudo prático para aprender e aplicar os conceitos de desenvolvimento front-end com React e consumo de api.
                    </WorkGridItem>
                </Section>

                <Section delay={0.3}>
                    <WorkGridItem
                        href="https://github.com/Marcelovgs/SGCI"
                        title="Sistema de Chamados com banco de dados e JWT"
                        thumbnail="/images/Screenshot_1.png"
                    >
                        O SGCI é uma aplicação full-stack que simula um sistema de gerenciamento de chamados de manutenção para ambientes industriais. A plataforma permite que diferentes tipos de usuários interajam com o sistema para abrir e gerenciar ordens de serviço.

                        Spring Boot 3, Spring Web, Spring Data JPA, Spring Security, JWT, Maven, Hibernate, Lombok, React 19, Vite, Tailwind CSS, Axios, PostgreSQL.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Divider my={6} />
        </Container>
    );
}