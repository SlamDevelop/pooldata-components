import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        rgb: {
            blue: '55 25 202',
            yellow: '229 196 133'
        },
        colors: {
            white: '#fff',
            blue: '#3719ca',
            yellow: '#ffda93',
            yellowDark: '#e5c485',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
        },
        fontSizes: {
            1: '12px',
            2: '14px',
            3: '16px',
        },
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