import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultImagePipe } from './default-image.pipe';
import { GenderToTitlePipe } from './gender-to-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DefaultImagePipe,
    GenderToTitlePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
