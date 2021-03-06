import { NgModule, InjectionToken } from '@angular/core';
import { StorageService } from '../core/services/storage.service';
import { StorageWebService } from '../core/services/web/storage-web.service';
import { StorageNsService } from '../core/services/ns/storage-ns.service';
import { AppConfig } from '../core/models/core';

import { environment } from '../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

// Can't have dynamic requires with webpack.
// You can define a new global variable
// for "environment" inside the webpack config.
const appConfig = global.TNS_WEBPACK ?
  <AppConfig>require("./app.config.prod.json") :
  <AppConfig>require(environment.appConfigFile);

switch (appConfig.appType) {
    case 'Web':
        appConfig.storageServiceClass = StorageWebService;
        break;
    case 'Ns':
        appConfig.storageServiceClass = StorageNsService;
        break;
}

@NgModule({
    providers: [
        { provide: APP_CONFIG, useValue: appConfig },
        { provide: StorageService, useClass: appConfig.storageServiceClass }
    ]
})
export class AppConfigModule { }
