import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  isSellerLoggedIn: boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;

  constructor() { }
}
