import { LayoutModule } from '@angular/cdk/layout'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatSidenavModule } from '@angular/material/sidenav'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { SideBarComponent } from './components/side-bar/side-bar.component'

describe('AppComponent', () => {
   let component: AppComponent
   let fixture: ComponentFixture<AppComponent>
   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [
            RouterTestingModule,
            MatSidenavModule,
            LayoutModule,
            BrowserAnimationsModule,
         ],
         declarations: [AppComponent, SideBarComponent],
      }).compileComponents()
   })
   beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
   it('should change theme', () => {
      component.setTheme('theme-light')
      expect(component.toggleTheme).toBeTruthy()
   })
})
