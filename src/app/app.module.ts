// ANGULAR CORE SYSTEM IMPORT
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTS IMPORT
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BannerComponent } from './components/pages/home/partials/banner/banner.component';
import { SmartEretailComponent } from './components/pages/home/partials/smart-eretail/smart-eretail.component';
import { OurStrengthComponent } from './components/pages/home/partials/our-strength/our-strength.component';
import { SektorIndustriComponent } from './components/pages/home/partials/sektor-industri/sektor-industri.component';
import { EngagementPlatformSolutionComponent } from './components/pages/home/partials/engagement-platform-solution/engagement-platform-solution.component';
import { ConsumerBusinessComponent } from './components/pages/home/partials/consumer-business/consumer-business.component';
import { InvestorRelationComponent } from './components/pages/home/partials/investor-relation/investor-relation.component';
import { NewsComponent } from './components/pages/home/partials/news/news.component';
import { ContactUsComponent } from './components/pages/home/partials/contact-us/contact-us.component';
import { SmartEretailDetailComponent } from './components/pages/smart-eretail-detail/smart-eretail-detail.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { InvestorRelationDetailPageComponent } from './components/pages/investor-relation-detail-page/investor-relation-detail-page.component';
import { NewsDetailComponent } from './components/pages/news-detail/news-detail.component';
import { NewsManyComponent } from './components/pages/news-many/news-many.component';

// ANGULAR MATERIAL IMPORT
import { MaterialModule } from './material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';


// ANGULAR TRANSLATE
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader ,TranslateModule } from '@ngx-translate/core';



export function HttpLoaderFactory(http:HttpClient) {
  return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SmartEretailDetailComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    SmartEretailComponent,
    OurStrengthComponent,
    SektorIndustriComponent,
    EngagementPlatformSolutionComponent,
    ConsumerBusinessComponent,
    InvestorRelationComponent,
    NewsComponent,
    ContactUsComponent,
    AboutUsComponent,
    InvestorRelationDetailPageComponent,
    NewsDetailComponent,
    NewsManyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // for translate needed
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    
    MaterialModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
