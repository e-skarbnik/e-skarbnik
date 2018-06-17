import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ClassCrudService } from '../../../services/class-crud.service';
import { Class } from '../../../models/class.model';
import { NgForm } from '@angular/forms';
import { MemberService } from '../../../services/member.service';
import { Member } from '../../../models/member.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent implements OnInit {

  cls: Class;
  users: Member[];

  constructor(
    private mService: MemberService,
    private clService: ClassCrudService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cls = {
      name: '',
      description: '',
      school: ''
    };
    this.mService.getMembers().subscribe(usrs => this.users = usrs);
   }

  ngOnInit() {
  }
  addClass(tableData: NgForm) {
    const cls: Class = {
      name: tableData.value.name,
      description: tableData.value.description,
      school: tableData.value.school
    };

    this.clService.addClass(this.cls);
    this.router.navigateByUrl('/classes');
  }

}
