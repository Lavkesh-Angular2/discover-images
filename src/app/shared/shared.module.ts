import { NgModule } from '@angular/core';
import {ExternalDependencyModule} from '../external-dependency/external-dependency.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ConfigService } from './services/config.service';

@NgModule({
  imports: [
    ExternalDependencyModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    ExternalDependencyModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [ConfigService]
})
export class SharedModule { }
