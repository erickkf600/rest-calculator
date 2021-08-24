import { LayoutModule } from '@angular/cdk/layout'
import { NgModule } from '@angular/core'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SideBarComponent } from './components/side-bar/side-bar.component'

@NgModule({
   declarations: [AppComponent, SideBarComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatListModule,
      LayoutModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
