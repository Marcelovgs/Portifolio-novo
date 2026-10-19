import { Providers } from "./providers";
import { Navbar } from "@/components/navbar"; // Importamos a Navbar
import { Box, Container } from "@chakra-ui/react";

export const metadata = {
  title: "Meu Portfólio",
  description: "Criado com Next.js e Chakra UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Navbar />
          {/* Adicionamos uma Box com padding-top para o conteúdo não ficar embaixo da navbar fixa */}
          <Box as="main" pt={14}>
            <Container maxW="container.md" pt={14}>
              {children}
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
}