import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.page.html',
  styleUrls: ['./doc-list.page.scss'],
})
export class DocListPage implements OnInit {

  constructor(private router: Router) { }

  openCornBooking(){

    this.router.navigate(['/corn-booking'])
  }

  ngOnInit() {
  }

}
