import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { GoogleAuthService } from './google-auth.service';
import { AlaSql } from './alasql.service';
import { JsLoaderService } from './js-loader.service';
import { TrainerComponent } from './trainer/trainer.component';
import { SequencesComponent } from './sequences/sequences.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { TrainerRoutingModule } from './trainer/trainer-routing.module';
import { SequencesRoutingModule } from './sequences/sequences-routing.module';
import { AboutRoutingModule } from './about/about-routing.module';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { HeaderComponent } from './header/header.component';
import { DataService } from './data.service';
import { BuilderRoutingModule } from './builder/builder-routing.module';
import { BuilderComponent } from './builder/builder.component';
import {
  MatTableModule,
  MatButtonModule,
  MatTooltipModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TrainerRoutingModule,
    SequencesRoutingModule,
    AboutRoutingModule,
    BuilderRoutingModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TrainerComponent,
    SequencesComponent,
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
    DataService,
    AlaSql]
})
export class AppModule { }
