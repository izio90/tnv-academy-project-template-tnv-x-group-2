import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './@shared/components/login/login.component';
import { LogoutComponent } from './@shared/components/logout/logout.component';
import { RegisterComponent } from './@shared/components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './@shared/components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './@shared/modules/angular-material/angular-material.module';
import { LandingPageComponent } from './@shared/components/landing-page/landing-page.component';
import { ContatoreScudoComponent } from './components/contatore-scudo/contatore-scudo.component';
import { GameComponent } from './components/game/game.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameCommentRatingComponent } from './components/game-comment-rating/game-comment-rating.component';
import { FavouritesPreloadedCommentComponent } from './components/favourites-preloaded-comment/favourites-preloaded-comment.component';
import { PageRatingsmoviesComponent } from './components/page-ratingsmovies/page-ratingsmovies.component';
import { FavouritesItemComponent } from './components/favourites-item/favourites-item.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { PageCommentComponent } from './components/page-comment/page-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    LogoutComponent,
    NavbarComponent,
    WelcomeComponent,
    ProfileComponent,
    RankingsComponent,
    LandingPageComponent,
    ContatoreScudoComponent,
    GameComponent,
    GameItemComponent,
    GameCommentRatingComponent,
    FavouritesPreloadedCommentComponent,
    PageRatingsmoviesComponent,
    FavouritesItemComponent,
    FavouritesComponent,
    PageCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
