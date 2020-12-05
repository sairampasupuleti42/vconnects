import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './my/my.component';
import { FollowersComponent } from './followers/followers.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';

const infoRoutes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  }, {
    path: 'signin-successfull',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MyComponent,
    children: [
      {

        path: 'profile',
        component: ProfileComponent

      },
      {
        path: 'followers',
        component: FollowersComponent
      },
      {
        path: 'feed',
        component: FeedComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(infoRoutes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
