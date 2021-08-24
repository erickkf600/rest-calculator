import { Output } from '@angular/core'
import { EventEmitter } from '@angular/core'
import { Component } from '@angular/core'

@Component({
   selector: 'side-bar',
   templateUrl: './side-bar.component.html',
   styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
   public showThemeMenu: boolean = false
   @Output() toggleTheme: EventEmitter<string> = new EventEmitter<string>()
   constructor() {}
}
