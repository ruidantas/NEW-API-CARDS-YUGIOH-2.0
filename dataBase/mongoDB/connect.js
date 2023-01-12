import {connect} from "mongoose";

export class mongoDb {
  static async connection() {
    await connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}