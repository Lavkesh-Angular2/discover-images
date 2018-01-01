import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ConfigService } from './shared/services/config.service';

@Component({
  selector: 'discover-image-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'discover-image';

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    const apiUrl = this.configService.getApiUrl();
    console.log(`apiUrl ==> ${apiUrl}`);
  }
}
