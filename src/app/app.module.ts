import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';
import { MobileComponent } from './mobile/mobile.component';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './component/post-dashboard/post-dashboard.component';
import { PostComponent } from './component/post/post.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MovieDashboardComponent } from './component/movie-dashboard/movie-dashboard.component';
import { MovieComponent } from './component/movie/movie.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    MobileDashboardComponent,
    MobileComponent,
    PostDashboardComponent,
    PostComponent,
    MovieDashboardComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
