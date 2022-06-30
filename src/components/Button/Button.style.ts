import { styled } from '../../styles/stitches.config';

const Button = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$borderRadius$2',
    color: '$colors$white',
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
                backgroundColor: '$colors$blue',
                '&:hover': { 
                    backgroundColor: '$colors$blueLight',
                },
                '&:active': { 
                    backgroundColor: '$colors$blueDark',
                },
            },
            yellow: {
                backgroundColor: '$colors$yellow',
                '&:hover': { 
                    backgroundColor: '$colors$yellowLight',
                },
                '&:active': { 
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