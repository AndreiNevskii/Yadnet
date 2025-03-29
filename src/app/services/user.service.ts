import { Injectable } from '@angular/core';
import { IUser } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userStorage: IUser[] = [];
  private currentUser: IUser | null = null;

  constructor() {}

  // registerUser(user: IUserRegister): Observable<string> {
  //   return this.http.post(API.registration, user, {responseType: 'text'});
  // }

  //  authUser(user: IUser): Observable<string>  {
  //  return this.http.post<string>(API.auth, user);
  // }
    
  // authUser(user: IUser): void  {
  //   this.http.post(API.auth, user).subscribe();
  // }

  getUser(login: string): IUser | null {
    return this.userStorage.find((user) => login === user.login) || null;
  }

  addUser(user: IUser, isRemember?: boolean): true | string {
    if(this.getUser(user.login)) {
      return "Такой пользователь уже существует";
    }
    this.userStorage.push(user);
    return true;
  }
 
   checkUser(login: string): boolean {
    return !!this.getUser(login);
   }


}
