import Button, { ButtonProps } from '@mui/material/Button';

interface IButton extends ButtonProps {
  children: any;
  bgColor?: string;
}

export default function MUIButton({ bgColor, sx, children, ...rest }: IButton) {
  return (
    <Button
      sx={{
        background: bgColor,
        textTransform: 'none',
        fontWeight: '600',
        margin: '0 .5rem',
        fontSize: '.85rem',
        padding: '.4rem 1.3rem',
        '&:hover': {
          backgroundColor: bgColor,
          opacity: [0.9, 0.8, 0.7],
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
