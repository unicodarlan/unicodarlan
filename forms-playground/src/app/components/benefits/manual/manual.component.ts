import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'manual',
  templateUrl: './manual.component.html'
})
export class ManualComponent implements OnInit {

  form: FormGroup;
  manualRoutes: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.form = this.fb.group({
      manualRoutes: new FormArray([], Validators.required)
    });
  }

  createControl() {
    return this.fb.group({
      type: [null, Validators.required],
      pay: [null, Validators.required]
    })
  }

  add() {
    (<FormArray>this.form.controls['manualRoutes']).push(this.createControl());
  }

  onSubmit(){
    console.log(this.form.value, 'value');
    console.log(this._routes.valid, 'valid')
  }

  get _routes(): FormArray {
    return this.form.controls['manualRoutes'] as FormArray;
  }

}
