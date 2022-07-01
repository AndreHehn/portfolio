import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { MyworksComponent } from './myworks/myworks.component';
import { HeadpictureComponent } from './headpicture/headpicture.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WorkItemComponent } from './work-item/work-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    MyskillsComponent,
    MyworksComponent,
    HeadpictureComponent,
    AboutmeComponent,
    WorkItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
