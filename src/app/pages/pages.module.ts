import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { DetailsComponent } from "./details/details.component";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [HomeComponent, DetailsComponent],
    exports: [],
    imports: [CommonModule, PagesRoutingModule, SharedModule, ReactiveFormsModule],
})
export class PagesModule {}
