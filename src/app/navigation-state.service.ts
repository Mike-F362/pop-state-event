// tslint:disable:variable-name
import {Injectable, OnDestroy} from '@angular/core';
import {Location} from '@angular/common';
import {SubscriptionLike} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationStateService implements OnDestroy {
  private _isFromBackButton = false;

  private locationSubscription: SubscriptionLike;

  constructor(private location: Location) {
    this.locationSubscription = this.location.subscribe((popStateEvent: PopStateEvent) => {
      // Detect popstate
      if (popStateEvent.type === 'popstate') {
        console.log('fromBackButton NavigationStateService', popStateEvent);
        this._isFromBackButton = true;
      }
    });
  }

  get isFromBackButton(): boolean {
    return this._isFromBackButton;
  }

  clearFromBackButtonState() {
    this._isFromBackButton = false;
  }

  ngOnDestroy(): void {
    this.locationSubscription.unsubscribe();
  }
}
