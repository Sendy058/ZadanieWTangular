import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";


interface Car {
  Meno: string;
  TelCislo: string;
  Znacka: string;
  Model: string;
  Stav: string;
  Vin: string;
  Palivo: string
  Sluzba: string;
  RokVyroby: number;
  Vykon: number;
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})

export class OrderFormComponent {
  public cars: Observable<Car[]>

  constructor(private firestore: AngularFirestore) {
    this.cars = firestore.collection<Car>("cars").valueChanges()

  }

  public onSubmit(event: SubmitEvent, car: Car) {
    //  Car.RokVyroby = Timestamp.fromDate(Car.RokVyroby);
    event.preventDefault();
    this.firestore.collection("cars").add(car);
    window.alert("Si uspesne objednany");
  }

  public showMenu: boolean = false;

  public toggleMenu() {
    this.showMenu = !this.showMenu;
    console.log(this.showMenu);

  }

  public convertTimestamp(timestamp: any) {
    let date = timestamp.toDate();
    let yyyy = date.getFullYear();

    date = +yyyy;
    return date;
  }
}
