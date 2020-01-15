import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CornBookingPage } from './corn-booking.page';

const routes: Routes = [
  {
    path: '',
    component: CornBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CornBookingPageRoutingModule {}
