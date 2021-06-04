import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// Routes
import { APP_ROUTES } from './app.routes';
import { PagesModule } from './pages/pages.modulo';
import { AuthModule } from './Auth/auth.module';
import { ObservableComponent } from './pages/observables/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    RouterModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
