import { AutheService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AutheService){}
    canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot) {
         return this.authService.isAuthenticated();           
    }
}