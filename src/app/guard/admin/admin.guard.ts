import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
export const adminGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)
 if(auth.isAdmin()){
  // router.navigate(['/admin'])
  return true;
 }else{
   router.navigate(['students'])
   return false;
 }
};
