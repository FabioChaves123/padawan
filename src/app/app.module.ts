import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormPageComponent } from './form-page/form-page.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    HeaderComponent,
    HomeComponent,
    ContactPageComponent,
    PostsPageComponent,
    FormPageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
