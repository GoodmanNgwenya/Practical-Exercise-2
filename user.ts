export interface User{
  forename: string;
  surname: string;
  nickname?: string;
  emailAddress: String;
  role: string;
  dateCreated: Date;
  dateRemoved?: Date;
  locked: boolean;
  failedLoginAttempts: number;
  firstName: () => string|undefined;
  fullName: () => string|undefined;
}