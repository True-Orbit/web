import { styled } from '@mui/material/styles';
import { models } from '.';

interface Props {
  variant: models.MessageType;
}

const variants = {
  inline: {
    display: 'inline',
  },
  block: {
    display: 'block',
    marginTop: '1rem',
    marginBotton: '1rem',
  },
};

export const StyledMessage = styled('span')<Props>(
  ({
    variant,
    theme: {
      colors: {
        components: { error },
      },
    },
  }) => ({
    color: error.message,
    ...variants[variant],
  }),
);
