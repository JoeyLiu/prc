import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatRadioModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDividerModule,
  MatSelectModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatSortModule, MatSnackBarModule, MatBadgeModule, MatSidenavModule, MatExpansionModule, MatListModule, MatOptionModule,


} from '@angular/material';

import { AppComponent } from './app.component';
import { PurchaseComponent } from './purchase/purchase.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertComponent } from './alert/alert.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuditComponent } from './audit/audit.component';
import { RefuseComponent } from './refuse/refuse.component';
import { LogisticsComponent } from './logistics/logistics.component';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    AlertComponent,
    PlaceorderComponent,
    CartComponent,
    MyOrdersComponent,
    OrderDetailComponent,
    AuditComponent,
    RefuseComponent,
    LogisticsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents: [
    AlertComponent,
    PlaceorderComponent,
    CartComponent,
    MyOrdersComponent,
    OrderDetailComponent,
    RefuseComponent,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
