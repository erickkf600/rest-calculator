import { Component, HostBinding, OnDestroy } from '@angular/core'
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'
import { Subscription } from 'rxjs'
import { OnInit } from '@angular/core'
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
   private subscriptions$: Subscription[] = []
   public isMobile: boolean = false
   public toggleTheme: boolean = false
   constructor(private breakpointObserver: BreakpointObserver) {}

   @HostBinding('class')
   get themeMode() {
      return localStorage.getItem('theme')
   }

   ngOnInit() {
      this.subscriptions$.push(
         this.breakpointObserver
            .observe('(min-width: 1024px)')
            .subscribe((bs: BreakpointState) => {
               this.isMobile = bs.matches
            }),
      )
   }
   ngOnDestroy(): void {
      this.subscriptions$.forEach(s => s.unsubscribe())
   }

   setTheme(theme: string) {
      this.toggleTheme = !this.toggleTheme
      localStorage.setItem('theme', theme)
   }
}
