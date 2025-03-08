import { FC } from 'react';
import { TextField } from '@mui/material';
import humanizeString from 'humanize-string';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const Text: FC<Props> = ({ name, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <TextField
      id={name}
      label={humanizeString(name)}
      type="text"
      error={!!errors[name]}
      helperText={errorMessage}
      {...register(name)}
      {...props}
    />
  );
};

export default Text;
