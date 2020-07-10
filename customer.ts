import {User} from './user';

export class Customer implements User{
  forename!: string;
  surname!: string;
  nickname?: string;
  emailAddress!: String;
  role!: string;
  dateCreated!: Date;
  dateRemoved?: Date;
  locked!: boolean;
  failedLoginAttempts!: number;
  lastLoginDate!: Date;
 
  firstName(): string {
    console.log("First name "+this.forename);
      return this.forename;
  };
 
  
  fullName():string {
    console.log("Full name "+this.forename + " " + this.surname);
    return this.forename+" "+this.surname;
  };
 

}