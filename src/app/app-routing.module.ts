import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { MagentoComponent } from "./components/magento/magento.component";
import { WordpressComponent } from "./components/wordpress/wordpress.component";
import { ShopifyComponent } from "./components/shopify/shopify.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "magento", component: MagentoComponent },
  { path: "wordpress", component: WordpressComponent },
  { path: "shopify", component: ShopifyComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
