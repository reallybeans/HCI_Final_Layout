import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SUPPLIER_DATA, Supllier } from './suppliers.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
})
export class SuppliersComponent {
  displayedColumns: string[] = [
    'name',
    'phone',
    'email',
    'date',
    'status',
    'actions',
  ];
  dataSource: MatTableDataSource<Supllier>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(SUPPLIER_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(id: number) {
    let obj = SUPPLIER_DATA.findIndex((y: any) => id == y.id);
    SUPPLIER_DATA.splice(obj, 1);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
