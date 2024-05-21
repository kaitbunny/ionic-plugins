import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConstantsService } from 'src/app/utils/constants/constants.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log('MenuComponent initialized');
  }

  goToHome() {
    this.navCtrl.navigateForward(ConstantsService.HOME_PATH);
  }

  goToCompass() {
    this.navCtrl.navigateForward(ConstantsService.BUSSOLA_PATH);
  }

}
