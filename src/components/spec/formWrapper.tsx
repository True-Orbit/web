import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode; 
  defaultValues?: any;
}

export const FormWrapper = ({ 
  children, 
  defaultValues = {} 
}: Props) => {
  const methods = useForm({ defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};
