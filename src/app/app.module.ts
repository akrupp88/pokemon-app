import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ListCardComponent } from '../list-card/list-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

/**
 * AppModule
 * The AppModule contains the App Skeleton and Components like {@link DashboardComponent}, {@link ListCardComponent}.  
 */
@NgModule({
  imports: [HttpClientModule, AppRoutingModule], 
  declarations: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  //bootstrap: [AppComponent]

})
export class AppModule {
}


