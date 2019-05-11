import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetaComponent } from './meta/meta.component';
import { FireComponent } from './fire/fire.component';

@NgModule({
  declarations: [
    AppComponent,
    MetaComponent,
    FireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
