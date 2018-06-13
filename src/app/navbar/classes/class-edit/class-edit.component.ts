import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ClassCrudService } from '../../../services/class-crud.service';
import { Class } from '../../../models/class.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent implements OnInit {

  cls: Class;

  constructor(
    private clService: ClassCrudService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.switchMap((params: Params) => this.clService.getClassByID(params['id'])).subscribe(cl => this.cls = cl);
   }

  ngOnInit() {
  }
  updateClass(tableData: NgForm) {
    const cls: Class = {
      name: tableData.value.name,
      description: tableData.value.description,
      school: tableData.value.school,
      id: tableData.value.key
    };
    //console.log(member);
    this.clService.updateClass(this.cls);
    this.router.navigateByUrl('/classes');
  }
}
