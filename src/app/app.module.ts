import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { GoogleAuthService } from './google-auth.service';
import { JsLoaderService } from './js-loader.service';
import { TrainerComponent } from './trainer/trainer.component';
import { MovesComponent } from './moves/moves.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainerRoutingModule } from './trainer/trainer-routing.module';
import { MovesRoutingModule } from './moves/moves-routing.module';
import { AboutRoutingModule } from './about/about-routing.module';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';
import { BuilderRoutingModule } from './builder/builder-routing.module';
import { BuilderComponent } from './builder/builder.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TrainerRoutingModule,
    MovesRoutingModule,
    AboutRoutingModule,
    BuilderRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TrainerComponent,
    MovesComponent,
    AboutComponent,
    PageNotFoundComponent,
    ChessboardComponent,
    HeaderComponent,
    BuilderComponent
    ],
  bootstrap: [AppComponent],
  providers: [
    JsLoaderService,
    GoogleAuthService,
    DataService]
})
export class AppModule { }
