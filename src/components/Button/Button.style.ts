import { styled } from '../../styles/stitches.config';

const Button = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: '0 $space$3',
    fontSize: '$fontSizes$3',
    lineHeight: 1,
    fontWeight: 500,
    height: 35,
    transition: '200ms',
    cursor: 'pointer',

    variants: {
        color: {
            blue: {
                backgroundRGBA: '$rgb$blue',
                backgroundOpacity: 0.1,
                color: '$colors$blue',
                '&:hover': { 
                    color: '$colors$white',
                    backgroundColor: '$colors$blue',
                },
            },
            yellow: {
                backgroundColor: '$colors$yellow',
                '&:hover': { 
                    backgroundColor: '$colors$yellowDark',
                },
            },
        },
    },

    defaultVariants: {
        color: 'blue',
    },
});

export { Button };