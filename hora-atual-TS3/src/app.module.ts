import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HoraService } from './hora.service';
import { HoraComponent } from './hora.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HoraComponent],
  providers: [HoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
