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
import { SkillItemComponent } from './skill-item/skill-item.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


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
    WorkItemComponent,
    SkillItemComponent,
    ImprintComponent,
    DataProtectionComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
