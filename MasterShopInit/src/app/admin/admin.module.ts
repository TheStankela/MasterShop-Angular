import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "./material.module";
import { AdminLayoutComponent } from "./layout/admin-layout.component";
import { ProductDetailsComponent } from "./product/product-details/product-details.component";
import { ProductComponent } from "./product/product.component";
import { HomeComponent } from "./home/home.component";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CategoryComponent } from "./category/category.component";
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        HomeComponent,
        ProductComponent,
        ProductDetailsComponent,
        CategoryComponent,
        CategoryDetailsComponent,
        CustomerComponent,
    ],
    imports: [
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        AppRoutingModule,
        MatCardModule,
        MatTableModule,
        MatSelectModule,
        MatPaginatorModule,
        MatInputModule,
    ]
})

export class AdminModule {

}