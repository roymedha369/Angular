import { Story, Meta } from '@storybook/angular/types-6-0';
import{storiesOf,moduleMetadata} from '@storybook/angular';
import { OnboardingComponent } from './onboarding.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardingService } from './onboarding.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

// @ts-ignore
import {SubmitDocs} from './SubmitDocs.mdx';


storiesOf('Onboarding Component',module).addDecorator(moduleMetadata({
    declarations:[OnboardingComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [OnboardingService,{provide: APP_BASE_HREF, useValue : '/' }]
})).add('Submit Documents',() => {
    return {
        template:'<app-onboarding></app-onboarding>'
    }
},{notes:{markdown:SubmitDocs}}).add('Enrollment',() => {
    return {
        template:'Enrollemnt Form here'
    }
}).add('Goals',() => {
    return {
        template:'Goals Form here'
    }
}).add('Complete',() => {
    return {
        template:'Complete Form here'
    }
})