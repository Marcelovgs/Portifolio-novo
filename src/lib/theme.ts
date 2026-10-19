import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: (props: any) => ({
            body: {
                // Define a cor de fundo com base no modo atual (escuro ou claro)
                bg: props.colorMode === 'dark' ? '#202023' : '#f0e7db'
            }
        })
    },
    config: {
        initialColorMode: 'dark', // Começa no modo escuro por defeito
        useSystemColorMode: true,
    }
});

export default theme;