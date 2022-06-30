import { createStitches } from '@stitches/react';

const stitches = createStitches({
    theme: {
        rgb: {
            blue: '55 25 202',
            yellow: '229 196 133'
        },
        colors: {
            white: '#fff',
            blueLight: '#4524e3',
            blue: '#3719ca',
            blueDark: '#290ead',

            yellowLight: '#f2d08f',
            yellow: '#e5c485',
            yellowDark: '#d6b678',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
        },
        fontSizes: {
            1: '12px',
            2: '14px',
            3: '16px',
        },
        borderRadius: {
            1: '5px',
            2: '10px'
        }
    },
    utils: {
        backgroundRGBA: (rgb: string) => ({
            '$$background-color-opacity': 1,
            backgroundColor: `rgb(${rgb} / $$background-color-opacity)`
        }),
        backgroundOpacity: (opacity: number) => ({
            '$$background-color-opacity': `${opacity}`
        })
    }
});

const globalStyles = stitches.globalCss({
    body: {
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
    },
})

globalStyles();


export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = stitches;