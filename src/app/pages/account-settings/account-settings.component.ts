import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( private settingsService: SettingsService ) { }

  ngOnInit() {

    this.settingsService.colocarCheck();

  }

  changeColor(tema: string) {

    this.settingsService.changeColor( tema );

  }


}
