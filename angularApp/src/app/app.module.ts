import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerEditOnClickDirective } from './shared/directives/customer-edit-on-click.directive';
import { CustomerAwbFormatterPipe } from './shared/pipes/customer-awb-formatter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomerEditOnClickDirective,
    CustomerAwbFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
