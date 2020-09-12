import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AboutComponent } from './about/about.component';
import { AchievementComponent } from './achievement/achievement.component';
import { ContactComponent } from './contact/contact.component';
import { ParcoursComponent } from './parcours/parcours.component';

const routes: Routes = [
  { path: '', component: ProfileCardComponent },
  { path: 'home', component: ProfileCardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'achievement', component: AchievementComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
