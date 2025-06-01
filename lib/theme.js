import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles = {
    global: props => ({
        body: {
            // bg: mode('primary.400', 'black')(props), // #06002E
            bgGradient: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(120,65,135,0.7) 50%, rgba(0,0,0,1) 100%)',
            overflow: "overlay",
            color: "primary.400",
            overflowY: 'scroll'
        },
        html: {
            scrollBehavior: 'smooth',
        },
        '*': {
            fontFamily: `'DM Sans', 'Source Sans Pro', sans-serif`
        }
    })
}

const colors = {
    primary: {
        400: "#FFFFFF",
    },
    gradient1: {
        400: "#004AAD",
    },
    gradient2: {
        400: "#E385EC",
    },
    brand: {
        400: "#F5CBFD",
    },
    accent: {
        400: "#9D8CFF",
    }
}

const fonts = {
    fonts: {
        heading: `'DM Sans', 'Source Sans Pro', sans-serif`,
        body: `'DM Sans', 'Source Sans Pro', sans-serif`,
    }
}

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '1060px',
    xl: '1200px',
    '2xl': '1536px',
}

const theme = extendTheme({ config, styles, fonts, colors, breakpoints })

export default theme