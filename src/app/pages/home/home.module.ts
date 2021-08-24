import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
@NgModule({
   declarations: [HomeComponent],
   imports: [
      CommonModule,
      HomeRoutingModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
   ],
})
export class HomeModule {}
