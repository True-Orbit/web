import * as z from 'zod';

const schema = z
  .string()
  .min(1, { message: 'Email is required' })
  .email({ message: 'Must be a valid email' });

export default schema;