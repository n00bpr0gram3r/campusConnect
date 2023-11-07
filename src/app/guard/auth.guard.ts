import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)
  const toastr = inject(ToastrService)
  if (auth.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['students']);
    toastr.warning("Please login first")
    return false;
  }
};
