import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaComponent } from './prima/prima.component';
import { DouaComponent } from './doua/doua.component';
import { HeaderComponent } from './header/header.component';
import { Reteta1Component } from './reteta1/reteta1.component';
import { Reteta2Component } from './reteta2/reteta2.component';
import { environment } from 'src/environments/environment.development';
import{AngularFireModule} from '@angular/fire/compat';

import{ provideFirestore, getFirestore} from '@angular/fire/firestore';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Login1Component } from './login1/login1.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Reteta3Component } from './reteta3/reteta3.component';
import { Reteta4Component } from './reteta4/reteta4.component';
import { Reteta5Component } from './reteta5/reteta5.component';
import { Reteta6Component } from './reteta6/reteta6.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { NutritieComponent } from './nutritie/nutritie.component';
import {MatSortModule} from '@angular/material/sort';
import { ContactComponent } from './contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    PrimaComponent,
    DouaComponent,
    HeaderComponent,
    Reteta1Component,
    Reteta2Component,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    Login1Component,
    Reteta3Component,
    Reteta4Component,
    Reteta5Component,
    Reteta6Component,
    NutritieComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(()=> getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
