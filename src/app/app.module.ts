import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { SharedModule } from './shared/shared/shared.module';
import { PdffilesService } from './services/pdffiles.service';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginService } from './services/login.service';
import { LocationsService } from './services/locations.service';
import { PosturlsService } from './services/posturls.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [PdffilesService,UserService,LoginService, LocationsService, PosturlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
