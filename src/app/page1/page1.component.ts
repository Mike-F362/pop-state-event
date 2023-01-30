import {Component, OnInit} from '@angular/core';
import {NavigationStateService} from '../navigation-state.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  fromBackButton = false;

  constructor(private navigationStateService: NavigationStateService) { }

  ngOnInit(): void {
    this.fromBackButton = this.navigationStateService.isFromBackButton;
    this.navigationStateService.clearFromBackButtonState();
  }
}
