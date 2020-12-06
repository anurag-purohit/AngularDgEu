import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IProductSale} from './product-sale.model';
import {IProductSaleTable} from './product-sale-table.model';
import {IProduct} from './product.model';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductSaleService {

  private productSalesUrl = "api/sales/potato_sales.json";
  //$contactsChange = new Subject<any>();
  //private productSaleTable : IProductSaleTable = {};
  constructor(private http: HttpClient) { }

  getProductSales(): Observable<IProductSaleTable> {

	  return this.http.get<IProductSaleTable>(this.productSalesUrl);
  }

  addProduct(product: IProduct): void {
    let productSale: IProductSale = {
          productID: product.productId,
          productName: product.productName,
          salesQ1: 0,
          salesQ2: 0,
          salesQ3: 0,
          salesQ4: 0
    };
  }
}
