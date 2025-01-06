import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {QueryBuilderComponent} from './query-builder/query-builder.component';
import { QueryGroupComponent } from './query-builder/query-group/query-group.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule],
  declarations: [AppComponent, QueryBuilderComponent, QueryGroupComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
