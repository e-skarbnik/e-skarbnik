import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event } from '../../../models/event.model';
import { EventCrudService } from '../../../services/event-crud.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  ev: Observable<Event[]>;

  constructor(private eventService: EventCrudService) {
    this.ev = this.eventService.getEvents();
  }
  ngOnInit() {
  }

}
