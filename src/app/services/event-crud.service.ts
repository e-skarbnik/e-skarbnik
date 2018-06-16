import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Event } from '../models/event.model';

@Injectable()
export class EventCrudService {

  evCollection: AngularFirestoreCollection<Event>;
  events: Observable<Event[]>;
  event: Event;
  evnts: Observable<Event>;
  eventDoc: AngularFirestoreDocument<Event>;

  constructor(private firestore: AngularFirestore) { }

  getEvents() {
    this.evCollection = this.firestore.collection<Event>('events');
    this.events = this.evCollection.valueChanges();
    return this.events;
  }

  addEvent(event: Event) {
    //  user.key = this.firestore.createId();
    this.evCollection = this.firestore.collection<Event>('events');
    this.evCollection.add(event).then(value => { console.log('Class Added'); }).catch();
  }
  getEventByUID(uid) {
    this.eventDoc = this.firestore.doc<Event>('events/' + uid);
    this.evnts = this.eventDoc.valueChanges();
    return this.evnts;
  }
  updateEvent(event: Event) {
    this.eventDoc.update(event);
  }
}
  /*removeMember(us: Event) {
    this.eventDoc = this.firestore.doc<Event>('events/' + us.key);
    this.eventDoc.delete()
    .then(v => {
      console.log(v);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
*/
