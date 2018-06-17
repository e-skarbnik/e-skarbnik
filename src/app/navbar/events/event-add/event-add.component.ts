import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../../../models/event.model';
import { Observable } from 'rxjs/Observable';
import { EventCrudService } from '../../../services/event-crud.service';
import { EventsComponent } from '../events.component';
import { Class } from '../../../models/class.model';
import { ClassCrudService } from '../../../services/class-crud.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  event: Event;
  clss: any;
  // clssId: string;
  constructor(
    private evCrud: EventCrudService,
    private clsService: ClassCrudService) {
      this.clss = this.clsService.getCls();
      // this.clssId = this.clss.getId;
    }

  onSubmit(form: NgForm) {
  this.evCrud.addEvent(form.value);
  }
  ngOnInit() {
  }

}
