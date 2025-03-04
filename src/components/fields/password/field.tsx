'use client';

import { useState, FC } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface Props {
  name?: string;
  label?: string;
}

const PasswordField: FC<Props> = ({ name = 'password', label = 'Password' }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      id={name}
      label={label}
      type={showPassword ? 'text' : 'password'}
      fullWidth
      margin="normal"
      error={!!errors[name]}
      helperText={errors[name]?.message as string | undefined}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...register(name)}
    />
  );
};

export default PasswordField;
