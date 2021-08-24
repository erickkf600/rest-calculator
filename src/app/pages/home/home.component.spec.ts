import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
   let component: HomeComponent
   let fixture: ComponentFixture<HomeComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [HomeComponent],
         imports: [
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            BrowserAnimationsModule,
         ],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
   it('should add more inputs', () => {
      const addButton = fixture.nativeElement.querySelector('#test-button-add')
      addButton.click()

      component.addInput()
      expect(component.combines.length).toBe(5)
   })
   it('should combine the values with diferent targer', () => {
      const FormBuilder = component.validaFormGroup
      component.combines.controls[0].get('numbers')?.setValue('30')
      component.combines.controls[1].get('numbers')?.setValue('5')
      component.combines.controls[2].get('numbers')?.setValue('20')
      component.combines.controls[3].get('numbers')?.setValue('20')
      FormBuilder.controls['target'].setValue('47')
      const finishButton = fixture.nativeElement.querySelector(
         '#test-combine-button',
      )
      finishButton.click()

      component.combineValues()
      fixture.detectChanges()
      expect(component.combinations).toEqual([5, 20, 20, 20])
   })

   it('should combine the values with same target', () => {
      const FormBuilder = component.validaFormGroup
      component.combines.controls[0].get('numbers')?.setValue('1')
      component.combines.controls[1].get('numbers')?.setValue('2')
      component.combines.controls[2].get('numbers')?.setValue('5')
      component.combines.controls[3].get('numbers')?.setValue('20')
      FormBuilder.controls['target'].setValue('28')
      const finishButton = fixture.nativeElement.querySelector(
         '#test-combine-button',
      )
      finishButton.click()

      component.combineValues()
      fixture.detectChanges()
      expect(component.combinations).toEqual([0, 1, 2, 5, 20])
   })
})
