import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculoService } from "./calculo.service";
import { FixedPipe } from "./fixed.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FixedPipe],
  providers: [CalculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
