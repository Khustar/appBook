import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  data: any;

  constructor(private staorage: Storage) { 

    this.data = {};
  }


  
  ngOnInit() {
    
  }

}
