import {HttpClientModule} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import { Routes } from "@angular/router";

import {DonutService} from "./admin/services/donut.service";

// path: '' is http://localhost:4200/
export const AppRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(x => x.AdminRoutes),
    providers: [importProvidersFrom(HttpClientModule), DonutService],
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
