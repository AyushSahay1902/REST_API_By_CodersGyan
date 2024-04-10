import {config as conf} from 'dotenv';

conf(); //configuring dotenv

const _config = {
    port: process.env.PORT || 3000,
    uri: process.env.MONGODB_URI,
}

export const config = Object.freeze(_config); //making read only