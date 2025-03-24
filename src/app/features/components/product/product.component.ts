import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {ProductService} from "../services/product.service";
import {CommonModule, NgFor} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckbox} from "@angular/material/checkbox";
import {Router} from "@angular/router";


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    NgFor,
    MatIcon,
    MatIconButton,
    MatTableModule,
    MatCheckbox,
    MatButton
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  items: any ;
  selectedProduct:any;
  totalPrice: any;
  selectedProducts: any;


  displayedColumns: string[] = [ 'title','price', 'select'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);



  constructor(
    private service : ProductService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.service.fetchProducts().subscribe((data) => {
      this.items = data.products;
      this.dataSource = new  MatTableDataSource<any>(data.products);
    });
  }


  editProduct(item: any) {
    this.selectedProduct = item;
    const index = this.selectedProducts.findIndex((product: any) => product.name === item.name);
    if (index === -1) {
      this.selectedProducts.push(item);
    } else {
      this.selectedProducts.splice(index, 1);
    }
  }




  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  toggleSelection(row: any) {
    this.selection.toggle(row);
    this.selectedProducts = this.selection.selected;

    this.totalPrice = this.selectedProducts.reduce((total: any, product: any
    ) => total + product.price, 0);

  }

  navigateToDetails() {
    // store in local
    localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
    this.router.navigate(['summary'])
  }



}
