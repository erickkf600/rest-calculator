import { OnInit } from '@angular/core'
import { Component } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
   public validaFormGroup!: FormGroup
   private inicialInputs: number[] = [1, 2, 3]
   public combinations: number[] = []
   public isValidCombination: boolean = true

   constructor(private fb: FormBuilder) {}

   ngOnInit() {
      this.validaForm()
      this.inicialInputs.map(_ => this.combines.push(this.fgCombineBuilder()))
   }
   private validaForm() {
      this.validaFormGroup = this.fb.group({
         sequencies: this.fb.array([this.fgCombineBuilder()]),
         target: ['', Validators.required],
      })
   }
   private fgCombineBuilder() {
      return this.fb.group({
         numbers: ['', Validators.required],
      })
   }
   get combines() {
      return this.validaFormGroup.get('sequencies') as FormArray
   }

   addInput() {
      this.combines.push(this.fgCombineBuilder())
   }
   clear() {
      this.validaFormGroup.reset()
   }
   combineValues() {
      const valuesNum: number[] = this.combines.value.map(
         (n: { numbers: number }) => +n.numbers,
      )
      let target: number = this.validaFormGroup.controls.target.value

      const total: number = valuesNum.reduce((a: any, b: any) => a + b, 0)
      if (total == target) {
         this.combinations = valuesNum
      }

      var result = []
      var source = valuesNum.slice()
      source.sort()

      while (target > 0) {
         for (var i = source.length - 1; i >= 0; i--) {
            if (source[i] <= target || i == 0) {
               target = target - source[i]
               result.push(source[i])
               break
            }
         }
      }
      const double = result.filter((e, i, a) => a.indexOf(e) !== i)

      const repet1 = double.slice(0, 4).reduce((a, b) => a + b, 0)
      const repet2 = double.slice(4).reduce((a, b) => a + b, 0)

      const notDouble = result.filter((e, i, a) => a.indexOf(e) === i)
      result = [repet1, repet2].concat(notDouble)

      this.combinations = result.sort((a, b) => a - b)

      this.checkCombinations()
   }

   checkCombinations() {
      const combinedValue: number = this.combinations.reduce((a, b) => a + b, 0)
      if (combinedValue !== this.validaFormGroup.controls.target.value) {
         this.isValidCombination = false
      } else {
         this.isValidCombination = true
      }
   }
}
