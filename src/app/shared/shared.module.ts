import { NgModule } from '@angular/core';
import {ExternalDependencyModule} from '../external-dependency/external-dependency.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

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
  providers: [
  ]
})
export class SharedModule { }
