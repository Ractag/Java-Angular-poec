import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatlistComponent } from './catlist/catlist.component';
import { CreatecatComponent } from './createcat/createcat.component';
import { FormsModule } from '@angular/forms';
import { CatcardComponent } from './catcard/catcard.component';

@NgModule({
  declarations: [AppComponent, CatlistComponent, CreatecatComponent, CatcardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
