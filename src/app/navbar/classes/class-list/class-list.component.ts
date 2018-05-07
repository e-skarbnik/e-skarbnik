import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Class } from '../../../models/class.model';
import { ClassCrudService } from '../../../services/class-crud.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  clss: Observable<Class[]>;

  constructor(private clsService: ClassCrudService) {
    this.clss = this.clsService.getClasses();
   }

  ngOnInit() {
  }

}
