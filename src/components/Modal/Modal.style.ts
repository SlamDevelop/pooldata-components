import { styled, keyframes } from '../../styles/stitches.config';
import { blackA } from '@radix-ui/colors';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const Overlay = styled(DialogPrimitive.Overlay, {
    backgroundColor: blackA.blackA9,
    position: 'fixed',
    inset: 0,
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
});

const Content = styled(DialogPrimitive.Content, {
    backgroundColor: '$colors$white',
    borderRadius: '$borderRadius$2',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    padding: '$space$5',
    '@media (prefers-reduced-motion: no-preference)': {
        animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    },
    '&:focus': { outline: 'none' },
});

const Title = styled(DialogPrimitive.Title, {
    margin: 0,
    marginBottom: '$space$2',
    fontWeight: 500,
    fontSize: '$fontSize$3',
});

const Description = styled(DialogPrimitive.Description, {
    marginBottom: '$space$4',
    fontSize: '$fontSizes$2',
    lineHeight: 1.5,
});

const CrossButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
    transition: '200ms',
    cursor: 'pointer',

    color: '$colors$blue',
    '&:hover': {
        backgroundRGBA: '$rgb$blue',
        backgroundOpacity: 0.1,
    },
});

export {
    Overlay,
    Content,
    Title,
    Description,
    CrossButton,
};