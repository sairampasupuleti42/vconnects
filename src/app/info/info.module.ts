import { NgModule } from '@angular/core';
import { MyComponent } from './my/my.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { InfoRoutingModule } from './info-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { FeedComponent } from './feed/feed.component';
import { MeComponent } from './me/me.component';



@NgModule({
  declarations: [MyComponent, FollowersComponent, FollowingComponent, ProfileComponent, FeedComponent, MeComponent],
  imports: [
    SharedModule,
    InfoRoutingModule
  ], exports: [InfoRoutingModule]
})
export class InfoModule { }
