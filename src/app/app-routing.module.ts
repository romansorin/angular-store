import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ShoesComponent } from "./components/shoes/shoes.component";
import { ClothesComponent } from "./components/clothes/clothes.component";
import { ElectronicsComponent } from "./components/electronics/electronics.component";
import { BusinessComponent } from "./components/business/business.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "clothes", component: ClothesComponent },
  { path: "business", component: BusinessComponent },
  { path: "electronics", component: ElectronicsComponent },
  { path: "shoes", component: ShoesComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
