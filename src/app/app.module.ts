import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuglistComponent } from './muglist/muglist.component';
import { CreatemugComponent } from './createmug/createmug.component';

@NgModule({
  declarations: [AppComponent, MuglistComponent, CreatemugComponent],
  imports: [BrowserModule, AppRoutingModule, NgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
