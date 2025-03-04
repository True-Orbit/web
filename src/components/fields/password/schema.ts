import * as z from 'zod';

const schema = z
.string()
.min(8, { message: 'Password must be at least 8 characters' })
.max(100);

export default schema;