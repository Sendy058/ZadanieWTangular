import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";



interface Car {
  id?: string,
  Meno: string;
  TelCislo: string;
  Znacka: string;
  Model: string;
  Vin: string;
  Palivo: string
  Sluzba: string;
  RokVyroby: number;
  Vykon: number;
}


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent {
  public allCars: Car[] = [];
  public filterCars: Car[] = [];
  //public carsRef;

  constructor(private firestore: AngularFirestore) {

    //this.cars = firestore.collection<Car>("cars").valueChanges();
    //this.carsRef = firestore.collection("cars");
    this.returnID();
  }
  public getAlldata() {
    return this.firestore.collection("cars").snapshotChanges();
  }

  public onSubmit(car: Car) {

    this.firestore.collection("cars").add(car)
  }

  public returnID() {
    this.getAlldata().subscribe((data) => {
      this.allCars = data.map((value) => {
       // console.log(value.payload.doc.id);
        return {
          id: value.payload.doc.id,

          ...(value.payload.doc.data() as Car)

        } as Car;
      });
      //console.log(this.cars);
      this.filterCars = [...this.allCars]
    });
  }
  public delete(car: Car) {
    this.firestore.collection('cars').doc(car.id).delete();
  }
  public filterData(filterCategory: any, filterValue: string) {
    if (filterCategory == "vsetky") {
      this.filterCars = [...this.allCars];

    } else {
      this.filterCars = this.allCars.filter(car => car[(filterCategory as unknown) as keyof Car] == filterValue);
    }

  }
}
