import { FC } from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface Props {
  name?: string;
}

const EmailField: FC<Props> = ({ name = 'email' }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <TextField
      id={name}
      label="Email"
      type="email"
      fullWidth
      margin="normal"
      error={!!errors[name]}
      helperText={errorMessage}
      {...register(name)}
    />
  );
};

export default EmailField;
