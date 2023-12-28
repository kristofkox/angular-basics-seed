import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import {DonutListComponent} from "./admin/containers/donut-list/donut-list.component";
import {DonutSingleComponent} from "./admin/containers/donut-single/donut-single.component";

// path: '' is http://localhost:4200/
export const routes: Routes = [
  { path: '', component: DonutListComponent },
  { path: 'donut', component: DonutSingleComponent },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), AdminModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
