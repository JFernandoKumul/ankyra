import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,

  ) { 
    this.searchForm = this.fb.group({
      option: ["", Validators.required],
      patrimony: ["", Validators.required],
      location: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
