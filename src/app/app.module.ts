import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { SortPipe } from './pipe/sort.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { RegDetailComponent } from './features/reg-detail/reg-detail.component';
import { SpinnerComponent } from './features/spinner/spinner.component';
registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SortPipe,
    FooterComponent,
    RegDetailComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
