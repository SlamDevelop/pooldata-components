import { styled } from '../../styles/stitches.config';

const Input = styled('input', {
    all: 'unset',
    flex: '1 0 auto',
    borderRadius: '$borderRadius$1',
    padding: '0 $space$2',
    fontSize: '$fontSizes$2',
    lineHeight: 1,
    height: 35,
    
    variants: {
        color: {
            blue: {
                '&::placeholder': { color: '$colors$blue' },

                backgroundRGBA: '$rgb$blue',
                backgroundOpacity: 0.1,
                color: '$colors$blue',
                '&:focus': { boxShadow: '0 0 0 1px $colors$blue' },
            },
            yellow: {
                '&::placeholder': { color: '$colors$yellowDark' },

                backgroundRGBA: '$rgb$yellow',
                backgroundOpacity: 0.15,
                color: '$colors$yellowDark',
                '&:focus': { boxShadow: '0 0 0 1px $colors$yellow' },
            },
        },
    },

    defaultVariants: {
        color: 'blue',
    },
});

export { Input };