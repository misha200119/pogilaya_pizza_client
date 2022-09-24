import { config } from 'dotenv';
import { env } from 'process';

config();

export const { REACT_APP_API_DOMAIN } = env;
