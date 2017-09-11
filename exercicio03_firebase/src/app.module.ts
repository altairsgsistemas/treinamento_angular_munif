import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ChurrascoService } from './churrasco.service';
import { ItemEditComponent } from './item-edit.component';
import { ItemListComponent } from './item-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, ItemEditComponent, ItemListComponent],
  providers: [ChurrascoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
