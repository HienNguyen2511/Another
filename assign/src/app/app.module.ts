import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {CourseComponent} from './components/course/course.component';
import {AboutComponent} from './components/about/about.component';
import {SportsComponent} from './components/newspaper/sports/sports.component';
import {BusinessComponent} from './components/newspaper/business/business.component';
import {TechnologyComponent} from './components/newspaper/technology/technology.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ChannelComponent} from './components/videos/channel/channel.component';

import {RouterModule, Routes} from '@angular/router';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewsapiService} from "./service/newsapiservice.service";
import {YouTubePlayerModule} from "@angular/youtube-player";
import {NewsComponent} from './components/newspaper/news/news.component';
import {VideoComponent} from './components/videos/video/video.component';
import {HealthComponent} from './components/newspaper/health/health.component';
import {ScienceComponent} from './components/newspaper/science/science.component';
import {EntertainmentComponent} from './components/newspaper/entertainment/entertainment.component';
import {GeneralComponent} from './components/newspaper/general/general.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'course', component: CourseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'sports', component: SportsComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'tech', component: TechnologyComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'science', component: ScienceComponent},
  {path: 'general', component: GeneralComponent},
  {path: 'entertainment', component: EntertainmentComponent},
  {path: 'health', component: HealthComponent},
  {path: 'video', component: ChannelComponent},
  {path: 'news', component: NewsComponent},
  {path: 'watch-video', component: VideoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    LoginComponent,
    AboutComponent,
    BusinessComponent,
    SportsComponent,
    TechnologyComponent,
    SignupComponent,
    ChannelComponent,
    NewsComponent,
    VideoComponent,
    HealthComponent,
    ScienceComponent,
    EntertainmentComponent,
    GeneralComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    LoadingBarHttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
