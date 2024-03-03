import { ICity } from '../db/models/city';


declare module 'knex/types/tables' {
  interface Tables {
    city: ICity,
  }
}