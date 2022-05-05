import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavigationDrawerModule, IgxListModule, IgxCalendarModule, IgxCardModule, IgxGridModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    DashboardsComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxListModule,
    IgxCalendarModule,
    FormsModule,
    IgxCardModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
