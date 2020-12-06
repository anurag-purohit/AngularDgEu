import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ProductSaleService} from '../product-sale.service';
import {IProduct} from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent  {

    productForm: FormGroup;


    minProductDate = new Date();

    private _productSalesService;




    constructor(private fb: FormBuilder, private productSalesService: ProductSaleService, private route: ActivatedRoute,
                                                                                                        private router: Router) {
     this._productSalesService = productSalesService;
     this.route = route;
      this.productForm = this.fb.group({
        productID: ['', [Validators.required, Validators.max(9999999999999)]],
        productName: ['', [Validators.required, Validators.maxLength(50)]],
        manager: ['', [Validators.maxLength(30)]],
        salesStartDate: [new Date(), [Validators.required]]
      })

    }

    hasFormErrors() {
      return !this.productForm.valid;
    }

    onSubmit() {
      alert(JSON.stringify(this.productForm.value));
      let product : IProduct = {
            productId: this.productForm.value.productID,
          	productName: this.productForm.value.productName,
          	manager: this.productForm.value.manager,
          	salesStartDate: this.productForm.value.salesStartDate
      };
      this._productSalesService.addProduct(product);
      this.router.navigate(['/sales']);
    }








  }
