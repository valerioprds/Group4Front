import { LoginComponent } from './account/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
//import { LoginComponent, RegisterComponent } from './account';
import { AlertComponent } from './_components/alert/alert.component';
import { RegisterComponent } from './account/register/register.component';
import { WaterProgressBarComponent } from './home/components/water-progress-bar/water-progress-bar.component';
import { MoneyProgressBarComponent } from './home/components/money-progress-bar/money-progress-bar.component';

import { NavbarComponent } from './_components/navbar/navbar.component';
import { GameShowerComponent } from './home/components/games/game-shower/game-shower.component';
import { StatusProgressBarComponent } from './home/components/status-progress-bar/status-progress-bar.component';
import { WashingMachineComponent } from './home/components/washing-machine/washing-machine.component';
import { HomeStartBannerComponent } from './home/components/home-start-banner/home-start-banner.component';
import { ClickToiledComponent } from './home/components/click-toiled/click-toiled.component';

@NgModule({

    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        WaterProgressBarComponent,
        MoneyProgressBarComponent,
        NavbarComponent,
        GameShowerComponent,
        StatusProgressBarComponent,
        WashingMachineComponent,
        MoneyProgressBarComponent,
        HomeStartBannerComponent,
        ClickToiledComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]

})
export class AppModule {}
