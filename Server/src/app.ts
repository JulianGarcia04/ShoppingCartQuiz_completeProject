import express, {Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/routes.admin';
import errorHundle from './middlewares/error.hundle'

dotenv.config();

class ServerConfig {
  //set to express
  protected app:Express = express();

  constructor() {
    //set to port server
    this.app.set('PORT', process.env.PORT || 4000);

    //use middlewares
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(cors());

    //routes
    adminRoutes(this.app);

    //middlewares admin error
    this.app.use(errorHundle.errorHandler);
    this.app.use(errorHundle.boomErrorHandler);
    this.app.use(errorHundle.formatError);
  }
}

export default ServerConfig;
