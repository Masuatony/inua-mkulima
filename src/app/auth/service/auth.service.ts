import {Injectable, signal} from '@angular/core';
import {User} from "../../features/models/data";
import {LocalStorageService} from "./localStorage";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERS_KEY = 'inua_mkulima_users';
  private readonly CURRENT_USER_KEY = 'inua_mkulima_current_user';
  URL = 'https://dummyjson.com/auth/login';

  currentUser = signal<User | null>(null);
  isLoggedIn = signal<boolean>(false);
  loginError = signal<string | null>(null);

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private http: HttpClient
  ) {
    this.initUsers();
    this.loadCurrentUser();
  }

  private initUsers(): void {
    const users = this.localStorageService.getItem<User[]>(this.USERS_KEY);
    if (!users) {
      // Initialize with a sample user if none exists
      const defaultUsers: User[] = [
        {
          id: '1',
          username: 'farmer1',
          password: 'password123',
          fullName: 'John Farmer'
        }
      ];
      this.localStorageService.setItem(this.USERS_KEY, defaultUsers);
    }
  }

  private loadCurrentUser(): void {
    const user = this.localStorageService.getItem<User>(this.CURRENT_USER_KEY);
    if (user) {
      this.currentUser.set(user);
      this.isLoggedIn.set(true);
    }
  }

  login(username: string, password: string): boolean {
    this.loginError.set(null);

    const users = this.localStorageService.getItem<User[]>(this.USERS_KEY) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      this.currentUser.set(user);
      this.isLoggedIn.set(true);
      this.localStorageService.setItem(this.CURRENT_USER_KEY, user);
      return true;
    } else {
      this.loginError.set('Invalid username or password');
      return false;
    }
  }



  loginApi(data: any): Observable<any> {
    return this.http.post<any>(this.URL, data);
  }

  logout(): void {
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
    this.localStorageService.removeItem(this.CURRENT_USER_KEY);
    this.router.navigate(['/login']);
  }
}
