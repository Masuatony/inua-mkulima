import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatCard,
    MatCardContent,
    MatCell,
    MatCellDef,
    MatCheckbox,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    NgForOf,
    MatHeaderCellDef
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit{
  displayedColumns: string[] = [ 'title', 'quantity','price',  'total', 'deduction'];
  dataSource = new MatTableDataSource<any>();
  items: any;
  total: any;
  ngOnInit() {
    // @ts-ignore
    this.items = JSON.parse(localStorage.getItem('selectedProducts'));
    console.log("data", this.items)
    this.setDatta();
  }

  setDatta = () =>  {
    this.dataSource = new MatTableDataSource<any>(this.items)
}

}
