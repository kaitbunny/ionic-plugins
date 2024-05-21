import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public static readonly HOME_PATH = 'home';
  public static readonly BUSSOLA_PATH = 'bussola';

  constructor() { }
}
