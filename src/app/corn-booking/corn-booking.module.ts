import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CornBookingPageRoutingModule } from './corn-booking-routing.module';

import { CornBookingPage } from './corn-booking.page';
import { NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CornBookingPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [CornBookingPage]
})
export class CornBookingPageModule {}
