import express, { Application } from 'express';
import routesClients from './clients/routes/clients.route';
import routesProveedor from './ providers/routes/provider.routes';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

export class Server implements IServer {
  private server: Application;

  constructor(private port?: number | string) {
    this.server = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.static();
  }

  settings() {
    this.server.set('port', process.env.PORT || this.port);
  }
  middlewares() {
    // const corsOptions = { origin: '', optionsSuccessStatus: 200 }
    this.server.use(cors());
    this.server.use(morgan('dev'));
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }
  routes() {
    this.server.use('/api', routesClients);
    this.server.use('/api', routesProveedor)
  }
  static() {
    this.server.use(express.static(path.join(__dirname, 'public')));
  }
  listen() {
    this.server.listen(this.server.get('port'));
    if (process.env.NODE_ENV != 'pro') {
      console.log('server listen on port', this.server.get('port'));
    }
  }
  testing() {
    return this.server;
  }
}
