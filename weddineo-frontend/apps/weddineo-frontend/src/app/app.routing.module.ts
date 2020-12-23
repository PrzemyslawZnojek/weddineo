import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@weddineo-frontend/auth';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@weddineo-frontend/auth').then(module => module.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('@weddineo-frontend/home').then(module => module.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
