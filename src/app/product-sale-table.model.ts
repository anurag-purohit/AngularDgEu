import {IProductSaleHeader} from './product-sale-header.model';
import {IProductSale} from './product-sale.model';

export interface IProductSaleTable {
  column: IProductSaleHeader[];
  data: IProductSale[];
}
