import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUser() {
    return this.httpClient.get<User>('https://fakestoreapi.com/users/2');
  }

  updateUser(user: User) {
    return this.httpClient.put<User>(
      `https://fakestoreapi.com/users/${user.id}`,
      user,
    );
  }
}
