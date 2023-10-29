import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)
  if (auth.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['students']);
    return false;
  }
};
