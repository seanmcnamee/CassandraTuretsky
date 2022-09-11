import { Component } from '@angular/core';
import { ErrorAlertItem, IErrorAlertsService } from 'src/app/services/error-alerts/error-alerts.service.interface';

@Component({
  selector: 'app-error-alerts',
  templateUrl: './error-alerts.component.html',
  styleUrls: ['./error-alerts.component.scss']
})
export class ErrorAlertsComponent {
  errorAlerts: ErrorAlertItem[] = [];

  constructor(private _errorAlertsService: IErrorAlertsService) {
    _errorAlertsService.GetErrorAlertItemsSubject().subscribe(
      newErrorAlerts => {
        this.errorAlerts = newErrorAlerts
      }
    );
  }

  public onDismissal(item: ErrorAlertItem) {
    this._errorAlertsService.RemoveErrorAndBroadcast(item);
  }
}