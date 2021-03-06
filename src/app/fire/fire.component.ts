import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'cos-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.scss'],
})
export class FireComponent implements OnInit {
  items: Observable<any[]>;

  constructor(
    private afs: AngularFirestore,
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit() {
    this.updateMetaData();
    this.items = this.afs.collection('items').valueChanges();
  }

  updateMetaData = async () => {
    const snaps: any = await this.afs
      .collection('items')
      .valueChanges()
      .pipe(take(1))
      .toPromise();

    this.title.setTitle(snaps[0].name);
    const stringifiedSnaps = snaps.map(
      (item: any) => `a thing called ${item.name} with ${item.other} `,
    );

    this.meta.updateTag({
      name: 'description',
      content: stringifiedSnaps.toString(),
    });
  };
}
