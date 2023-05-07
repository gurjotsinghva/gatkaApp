import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    //this.itemDoc = afs.doc<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }
  editBracket(bracketNew: string) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({bracket: bracketNew});
  }
  editp1(n1: string, a1: string) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({name1: n1, akhara1: a1});
  }
  editp2(n2: string, a2: string) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({name2: n2, akhara2: a2});
  }
  edits1(s1: number) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({score1: s1});
  }
  edits2(s2: number) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({score2: s2});
  }
  editMins(mins: number) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({minutes: mins});
  }
  editSeconds(secs: number) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({seconds: secs});
  }
  editpFouls1(fouls: number) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({pFoul1: fouls});
  }
  editpFouls2(fouls: number) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({pFoul2: fouls});
  }
  edittFouls1(fouls: number) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({tFoul1: fouls});
  }
  edittFouls2(fouls: number) {
    this.itemDoc = this.afs.doc('/items/ohwLmkNmu0E8AD7iYTGk');
    this.itemDoc.update({pFoul2: fouls});
  }

  getItems(){
    return this.items;
  }
}


