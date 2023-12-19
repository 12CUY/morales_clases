import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './pages/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { VendedorSubirProductoComponent } from './pages/vendedor-subir-producto/vendedor-subir-producto.component';
import { VendedorHomeComponent } from './pages/vendedor-home/vendedor-home.component';
import { VendedorActualizarProductoComponent } from './pages/vendedor-actualizar-producto/vendedor-actualizar-producto.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { MisOrdenesComponent } from './pages/mis-ordenes/mis-ordenes.component';
import { SearchComponent } from './pages/search/search.component';
import { VendedorLoginComponent } from './pages/vendedor-login/vendedor-login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    UserLoginComponent,
    VendedorSubirProductoComponent,
    VendedorHomeComponent,
    VendedorActualizarProductoComponent,
    CartPageComponent,
    MisOrdenesComponent,
    SearchComponent,
    VendedorLoginComponent,
    ProductDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
