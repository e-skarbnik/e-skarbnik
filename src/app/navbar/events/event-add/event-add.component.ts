import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../../../models/event.model';
import { Observable } from 'rxjs/Observable';
import { EventCrudService } from '../../../services/event-crud.service';
import { EventsComponent } from '../events.component';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  event: Event;
  constructor(private evCrud: EventCrudService) { }
  onSubmit(form: NgForm) {
  this.evCrud.addEvent(form.value);
  }
  ngOnInit() {
  }

}
