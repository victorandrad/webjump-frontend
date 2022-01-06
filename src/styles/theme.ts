import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
    },
    colors: {
        gray: {
            "900": "#231F20",
        }
    }
})