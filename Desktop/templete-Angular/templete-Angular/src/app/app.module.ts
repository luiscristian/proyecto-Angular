import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { BoxComponent } from './Services/box/box.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { OurPortfolioComponent } from './our-portfolio/our-portfolio.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { ClientsSectionTestimonialsComponent } from './clients-section-testimonials/clients-section-testimonials.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    BoxComponent,
    AboutUsComponent,
    WhyChooseUsComponent,
    OurPortfolioComponent,
    IntroSectionComponent,
    ClientsSectionTestimonialsComponent,
    TeamSectionComponent,
    ClientsSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
