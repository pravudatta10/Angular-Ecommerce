import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './container/header/header.component';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { SearchComponent } from './container/search/search.component'; 
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './container/filter/filter.component'; 
import { Setbackground } from './CustomDirctives/setBackGround.directives';
import { HighlightDirective } from './CustomDirctives/highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    ProductlistComponent,
    SearchComponent,
    FilterComponent,
    Setbackground,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
