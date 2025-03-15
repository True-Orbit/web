import React from 'react';
import dotenv from 'dotenv';

(global as any).React = React;
dotenv.config({ path: '.env' });