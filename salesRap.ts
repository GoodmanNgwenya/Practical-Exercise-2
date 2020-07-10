import { User as UserRap} from "./user";
export class SalesRap implements UserRap{
  forename: string;
  surname: string;
  nickname?: string;
  emailAddress: String;
  role: string;
  dateCreated: Date;
  dateRemoved?: Date;
  locked: boolean;
  failedLoginAttempts: number;
  firstName: () => string;
  fullName: () => string;
  customers: string[];
}