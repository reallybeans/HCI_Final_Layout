import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {
  ELEMENT_DATA,
  UserData,
  ELEMENT_DATA2,
  ELEMENT_DATA1,
  ELEMENT_DATA3,
} from './order.model';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'date',
    'orderId',
    'name',
    'address',
    'status',
    'price',
    'actions',
  ];
  dataSource: MatTableDataSource<UserData>;
  dataSource1: MatTableDataSource<UserData>;
  dataSource2: MatTableDataSource<UserData>;
  dataSource3: MatTableDataSource<UserData>;
  order = ELEMENT_DATA;
  order1 = ELEMENT_DATA1;
  order2 = ELEMENT_DATA2;
  order3 = ELEMENT_DATA3;
  modeData = 0;
  selection = new SelectionModel<UserData>(true, []);
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('TableSort') sort!: MatSort;
  @ViewChild('paginator1') paginator1!: MatPaginator;
  @ViewChild('TableOneSort') sort1!: MatSort;
  @ViewChild('paginator2') paginator2!: MatPaginator;
  @ViewChild('TableTwoSort') sort2!: MatSort;
  @ViewChild('paginator3') paginator3!: MatPaginator;
  @ViewChild('TableThreeSort') sort3!: MatSort;

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
    this.dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
    this.dataSource3 = new MatTableDataSource(ELEMENT_DATA3);
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource3);
  }
  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    switch (this.modeData) {
      case 0:
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
        break;
      case 1:
        this.dataSource1.filter = filterValue.trim().toLowerCase();
        if (this.dataSource1.paginator) {
          this.dataSource1.paginator.firstPage();
        }
        break;
      case 2:
        this.dataSource2.filter = filterValue.trim().toLowerCase();
        if (this.dataSource2.paginator) {
          this.dataSource2.paginator.firstPage();
        }
        break;
      case 3:
        this.dataSource3.filter = filterValue.trim().toLowerCase();
        if (this.dataSource3.paginator) {
          this.dataSource3.paginator.firstPage();
        }
        break;
      default:
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
        break;
    }
  }
  editMode(event: any) {
    this.router.navigate(['/main/orders/edit', event]);
  }
  mode(mode: any) {
    this.modeData = mode.index;
    switch (this.modeData) {
      case 0:
        this.selection.clear();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        break;
      case 1:
        this.selection.clear();
        this.dataSource1.paginator = this.paginator1;
        this.dataSource1.sort = this.sort1;
        break;
      case 2:
        this.selection.clear();
        this.dataSource2.paginator = this.paginator2;
        this.dataSource2.sort = this.sort2;
        break;
      case 3:
        this.selection.clear();
        this.dataSource3.paginator = this.paginator3;
        this.dataSource3.sort = this.sort3;
        console.log(this.dataSource3);

        break;
      default:
        this.selection.clear();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        break;
    }
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    let numRows = this.dataSource.data.length;
    switch (this.modeData) {
      case 0:
        numRows = this.dataSource.data.length;
        break;
      case 1:
        numRows = this.dataSource1.data.length;
        break;
      case 2:
        numRows = this.dataSource2.data.length;
        break;
      case 3:
        numRows = this.dataSource3.data.length;
        break;
      default:
        numRows = this.dataSource.data.length;
        break;
    }

    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    switch (this.modeData) {
      case 0:
        this.isAllSelected()
          ? this.selection.clear()
          : this.dataSource.data.forEach((row) => this.selection.select(row));
        break;
      case 1:
        this.isAllSelected()
          ? this.selection.clear()
          : this.dataSource1.data.forEach((row) => this.selection.select(row));
        break;
      case 2:
        this.isAllSelected()
          ? this.selection.clear()
          : this.dataSource2.data.forEach((row) => this.selection.select(row));
        break;
      case 3:
        this.isAllSelected()
          ? this.selection.clear()
          : this.dataSource3.data.forEach((row) => this.selection.select(row));
        break;
      default:
        this.isAllSelected()
          ? this.selection.clear()
          : this.dataSource.data.forEach((row) => this.selection.select(row));
        break;
    }
  }
  delete() {
    
    const selections = this.selection['_selected'];
    switch (this.modeData) {
      case 0:
        selections.forEach((x: any) => {
          let obj = this.order.findIndex((y: any) => x.id == y.id);
          this.order.splice(obj, 1);
        });
        this.selection.clear();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        break;
      case 1:
        selections.forEach((x: any) => {
          let obj = this.order1.findIndex((y: any) => x.id == y.id);
          this.order1.splice(obj, 1);
        });
        this.selection.clear();
        this.dataSource1.paginator = this.paginator1;
        this.dataSource1.sort = this.sort1;
        break;
      case 2:
        selections.forEach((x: any) => {
          let obj = this.order2.findIndex((y: any) => x.id == y.id);
          this.order2.splice(obj, 1);
        });
        this.selection.clear();
        this.dataSource2.paginator = this.paginator2;
        this.dataSource2.sort = this.sort2;
        break;
      case 3:
        selections.forEach((x: any) => {
          let obj = this.order3.findIndex((y: any) => x.id == y.id);
          this.order3.splice(obj, 1);
        });
        this.selection.clear();
        this.dataSource3.paginator = this.paginator3;
        this.dataSource3.sort = this.sort3;
        break;
      default:
        selections.forEach((x: any) => {
          let obj = this.order.findIndex((y: any) => x.id == y.id);
          this.order.splice(obj, 1);
        });
        this.selection.clear();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        break;
    }
  }
}
