import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {
  isFormValid: boolean = true
  public sampleForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.sampleForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(13)])]
    })
  }

  ngOnInit(): void {
  }
  submitForm() {
    console.log(this.sampleForm)
  }
  validateForm() {
    this.sampleForm.valid ? this.isFormValid = false : this.isFormValid = true;
  }

}
