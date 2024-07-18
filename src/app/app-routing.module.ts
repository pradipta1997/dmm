import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SmartEretailDetailComponent } from './components/pages/smart-eretail-detail/smart-eretail-detail.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { InvestorRelationDetailPageComponent } from './components/pages/investor-relation-detail-page/investor-relation-detail-page.component';
import { NewsDetailComponent } from './components/pages/news-detail/news-detail.component';
import { NewsManyComponent } from './components/pages/news-many/news-many.component';


 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'smart-eretail-detail', component: SmartEretailDetailComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'investor-relation-page', component: InvestorRelationDetailPageComponent },
  { path: 'news-detail', component: NewsDetailComponent },
  { path: 'about-us/news-detail', component: NewsDetailComponent },
  { path: 'news-many', component: NewsManyComponent },
  { path: 'news-many/news-detail', component: NewsDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
