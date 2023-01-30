import {Component, OnInit} from '@angular/core';
import {NavigationStateService} from '../navigation-state.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  fromBackButton = false;

  constructor(private navigationStateService: NavigationStateService) { }

  ngOnInit(): void {
    this.fromBackButton = this.navigationStateService.isFromBackButton;
    this.navigationStateService.clearFromBackButtonState();
  }

}
