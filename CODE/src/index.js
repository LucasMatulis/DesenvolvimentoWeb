import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import filmeController from './controller/filmeController.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());


servidor.use(filmeController); 



const port = process.env.PORT;
servidor.listen(port, () => console.log(`API subiu na porta ${port}`));
