import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { SearchproductsPipe } from './pipes/searchproducts.pipe';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SearchproductsPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ProductsModule,
    HttpClientModule,BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
    preventDuplicates: true,
    closeButton: true,
    progressBar:true,
    progressAnimation:'increasing'
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
