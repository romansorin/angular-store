import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CategoryListComponent } from "./components/category-list/category-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { HomeComponent } from "./components/home/home.component";
import { MagentoComponent } from "./components/magento/magento.component";
import { WordpressComponent } from "./components/wordpress/wordpress.component";
import { ShopifyComponent } from "./components/shopify/shopify.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProductComponent } from "./components/product/product.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    PageNotFoundComponent,
    HomeComponent,
    MagentoComponent,
    WordpressComponent,
    ShopifyComponent,
    HeaderComponent,
    ProductComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
