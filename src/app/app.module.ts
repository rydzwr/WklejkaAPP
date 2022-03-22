import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AddComponent } from './add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { CommunicatorComponent } from './communicator/communicator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SettingsComponent,
    AddComponent,
    ProfileComponent,
    CommunicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
