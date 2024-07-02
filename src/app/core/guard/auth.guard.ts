
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { combineLatest } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
   
const _Router= inject(Router)

  if(localStorage.getItem('etoken')!== null){
    return true;
  }
  else{
    _Router.navigate(['/login'])
    return false;
  }

};
