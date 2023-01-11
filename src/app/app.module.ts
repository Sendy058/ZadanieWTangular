import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HlavnaStrankaComponent } from './hlavna-stranka/hlavna-stranka.component';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import { SluzbyPodstrankaComponent } from './sluzby-podstranka/sluzby-podstranka.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DatabaseComponent } from './database/database.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { OrderFormComponent } from './order-form/order-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VypisLoginComponent } from './vypis-login/vypis-login.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatLegacyButtonModule} from "@angular/material/legacy-button";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {
    path:'',
    component: HlavnaStrankaComponent
  },
  {
    path:'sluzby',
    component: SluzbyPodstrankaComponent
  },
  {
    path:'kontakty',
    component: KontaktComponent
  },
  {
    path:'databaza',
    component: DatabaseComponent
  },
  {
    path:'order',
    component: OrderFormComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HlavnaStrankaComponent,
    SluzbyPodstrankaComponent,
    KontaktComponent,
    DatabaseComponent,
    OrderFormComponent,
    NavigationComponent,
    VypisLoginComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    RouterOutlet,
    MatIconModule,
    RouterLinkActive,
    NgbModule,
    RouterLink,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDialogModule,
    MatLegacyButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,


  ],
  entryComponents:[VypisLoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
