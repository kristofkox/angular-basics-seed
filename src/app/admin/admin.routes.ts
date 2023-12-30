import {Routes} from "@angular/router";

// containers
import {DonutListComponent} from './containers/donut-list/donut-list.component';
import {DonutSingleComponent} from './containers/donut-single/donut-single.component';

// components

export const AdminRoutes: Routes = [
  {path: 'donuts', component: DonutListComponent},
  {path: 'donuts/new', component: DonutSingleComponent, data: {isEdit: false}},
  {path: 'donuts/:id', component: DonutSingleComponent, data: {isEdit: true}},
  // redirects http://localhost:4200/admin to http://localhost:4200/admin/donuts
  // put always at the end
  {path: '', pathMatch: 'full', redirectTo: 'donuts'},
];

// @NgModule({
//   declarations: [
//     DonutListComponent,
//     DonutSingleComponent,
//     DonutCardComponent,
//     DonutFormComponent,
//   ],
//   imports: [
//     CommonModule, FormsModule, RouterModule.forChild(AdminRoutes)
//   ]
// })
// export class AdminModule {
// }


