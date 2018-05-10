import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Class } from '../../../models/class.model';
import { ClassCrudService } from '../../../services/class-crud.service';
import { ClassesComponent } from '../classes.component';
import { NgForm } from '@angular/forms';
import { Member } from '../../../models/member.model';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent implements OnInit {
  cls: Class;
  ngOnInit() {
    this.resetForm();
  }
  constructor(private clsCrud: ClassCrudService) { }
  onSubmit(form: NgForm) {
    this.clsCrud.addClass(form.value);
    this.resetForm(form);
  }
  resetForm(form?: NgForm) {
    this.clsCrud.selectedClass = {
      $key: '',
      name: ''
    };
  }
}

