import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ConfigService {

  constructor() {}

  private getConfigProperty<T>(propertyName: string): T {
    const config = environment.config;
    const datasource = config.datasource;
    return config[datasource][propertyName] || config.common[propertyName];
  }

  getApiUrl(): string {
    return this.getConfigProperty<string>('apiUrl');
  }

}
