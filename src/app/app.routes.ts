import { Routes } from "@angular/router";

// path: '' is http://localhost:4200/
export const AppRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule),
  },
  {
    // redirects http://localhost:4200/ to http://localhost:4200/admin
    // put always at the end
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
  {
    // Wild card selector redirects misspelled paths
    // eg. http://localhost:4200/addddminnnn to http://localhost:4200/admin
    path: '**',
    redirectTo: 'admin',
  },
];
