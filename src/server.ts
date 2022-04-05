import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

// inicia o server
const server = express();

// Acessar a pasta public com os arquivos css
server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use('https://api-petshop-lins.vercel.app/api/', mainRoutes);

server.use((req, res) => {
  res.send('Página não encotrada!');
});

/* const PORT = process.env.PORT || 3001;


// Executa os server, na port 3000
server.listen(() => {
  const url = process.env.BASE_URL;
  console.log(`Listening on ${url}`);
}); */