export interface IProductSaleHeader {
  field: string;
  header: string;
  colSpan: number;
  rowSpan: number;
  subHeaders: IProductSaleHeader[];
}
