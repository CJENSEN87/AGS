import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'products/:id', component: ProductDetailComponent, canActivate: [ ProductDetailGuard ]},
        { path: 'products', component: ProductListComponent }
    ]),

    SharedModule
  ],
  declarations: [
      ProductListComponent,
      ProductDetailComponent,
      ConvertToSpacesPipe
  ],
})
export class ProductModule { }
