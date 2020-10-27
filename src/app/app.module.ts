import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardingService } from './onboarding/onboarding.service';

@NgModule({
  declarations: [
    AppComponent,
   
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [OnboardingService],
  bootstrap: [OnboardingComponent]
})
export class AppModule { }
