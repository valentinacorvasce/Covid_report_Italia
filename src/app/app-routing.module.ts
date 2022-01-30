import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegDetailComponent } from './features/reg-detail/reg-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'region/:id', component: RegDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
