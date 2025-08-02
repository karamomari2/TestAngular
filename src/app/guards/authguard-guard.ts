import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthUser } from '../services/auth-user';

export const authguardGuard: CanActivateFn = (route, state) => {7
  let _AuthUserServices=inject(AuthUser)
  let router=inject(Router)
  if(_AuthUserServices.GetLoggedUser()){
  return true;
  }else{
    router.navigateByUrl('/Login')
    return false;
  }
};
