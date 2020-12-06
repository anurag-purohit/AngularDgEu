import { Component, OnInit } from '@angular/core';
import {IProductSale} from '../product-sale.model';
import {IProductSaleHeader} from '../product-sale-header.model';
import {IProductSaleHeaderRow} from '../product-sale-header-row.model';
import {ProductSaleService} from '../product-sale.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  private _productSalesService;

  pageTitle: string = "Sales";
  productSales: IProductSale[];
  productSaleHeaders: IProductSaleHeader[];
  headerRows: IProductSaleHeaderRow[] = [];

  clonedProductSales: { [s: string]: IProductSale; } = {};

  constructor(private productSalesService: ProductSaleService) {
    this._productSalesService = productSalesService;
  }

  ngOnInit(): void {

    this._productSalesService.getProductSales().then(data => {
        this.productSales = data.data
        this.productSaleHeaders = data.column;
        console.log(this.productSales);
        console.log(this.productSaleHeaders);
        this.transformHeaders(this.productSaleHeaders);
    });


    /* this._productSalesService.getProductSales().subscribe({
	    next: productSales => {
		    this.productSales = productSales.data;
		    this.productSaleHeaders = productSales.column;
		    console.log(this.productSales);
		    console.log(this.productSaleHeaders);
        this.transformHeaders(this.productSaleHeaders);
		  }
    }); */

  }

  onRowEditInit(product: IProductSale) {
          this.clonedProductSales[product.productID] = {...product};
      }

  onRowEditCancel(product: IProductSale, index: number) {
              this.productSales[index] = this.clonedProductSales[product.productID];
              delete this.productSales[product.productID];
          }

  totalSales(productSale: IProductSale): number {
    return productSale.salesQ1 + productSale.salesQ2 + productSale.salesQ3 + productSale.salesQ4;
  }

  transformHeaders(productSaleHeaders): void  {
    this.headerRows.push(productSaleHeaders);
    for (let i in productSaleHeaders) {
      if(productSaleHeaders[i].subHeaders != null && productSaleHeaders[i].subHeaders.length >1) {
      console.log(productSaleHeaders[i]);
        productSaleHeaders[i].colSpan = productSaleHeaders[i].subHeaders.length;
        productSaleHeaders[i].rowSpan = 1;
        this.transformHeaders(productSaleHeaders[i].subHeaders);
      } else {
        productSaleHeaders[i].colSpan = 1;
        productSaleHeaders[i].rowSpan = 2;
      }
    }
    console.log(this.headerRows);
  }

  add() {
          this.productSales.push(
          {     productID: 0,
                productName: "string",
                salesQ1: 0,
                salesQ2: 0,
                salesQ3: 0,
                salesQ4: 0}
           );
          setTimeout(()=>{
              let buttons = document.getElementsByClassName("ui-button-info");
              buttons[buttons.length - 1].dispatchEvent(new Event('click'));
          },50);
      }

}
