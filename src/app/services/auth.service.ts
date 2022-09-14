import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciais } from '../components/login/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais) {
return this.http.post('${API_CONFIG.baseUrl/login', creds)
  }
}
