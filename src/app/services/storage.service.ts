import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor(private storage: Storage) { 
}

setUserData(key, value){

  this.storage.set(key, value)
}


}
