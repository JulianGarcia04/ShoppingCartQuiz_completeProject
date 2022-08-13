import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

class DataBases {
  private db:any;
  private MONGO_HOST:string|undefined;
  private MONGO_PORT:string|undefined;
  private MONGO_DATABASES:string|undefined;

  constructor() {
    this.MONGO_HOST = process.env.MONGO_HOST || 'localhost';
    this.MONGO_PORT = process.env.MONGO_PORT || '27017';
    this.MONGO_DATABASES = process.env.MONGO_DATABASES || 'pruebaDB';
  }

  public async connectDataBases(){
    try {
      let url = `mongodb://${this.MONGO_HOST}:${this.MONGO_PORT}/${this.MONGO_DATABASES}`
      this.db = await mongoose.connect(url);
      console.log(`Databases connected to MongoDB to ${url}`);
    } catch (error) {
      console.log(error)
    }
  }
}

const db  = new DataBases();
db.connectDataBases();
