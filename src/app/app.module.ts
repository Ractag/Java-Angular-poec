import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnomatopeiaListComponent } from './onomatopeia-list/onomatopeia-list.component';
import { CreateOnomatopeiaComponent } from './create-onomatopeia/create-onomatopeia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OnomatopeiaListComponent,
    CreateOnomatopeiaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
