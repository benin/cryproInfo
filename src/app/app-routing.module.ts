import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CoinsComponent } from "./coins/coins.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ HomeComponent, AboutComponent, CoinsComponent ];
