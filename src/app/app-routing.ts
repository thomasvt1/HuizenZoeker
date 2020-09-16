import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'map', component: MapComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
