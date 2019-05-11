import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'cos-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss'],
})
export class FireComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private fsdb: AngularFirestore) {}

  ngOnInit() {
    this.items = this.fsdb.collection('items').valueChanges();
  }
}
