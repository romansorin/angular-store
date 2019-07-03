import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CategoryListComponent } from "./components/category-list/category-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProductComponent } from "./components/product/product.component";
import { BusinessComponent } from './components/business/business.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { ClothesComponent } from './components/clothes/clothes.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    BusinessComponent,
    ElectronicsComponent,
    ShoesComponent,
    ClothesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
