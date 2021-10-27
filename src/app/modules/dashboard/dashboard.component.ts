import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DashbroadService } from '../dashbroad.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA, UserData } from '../orders/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  bigChart!: {};
  card!: {};
  pie!: {};
  constructor(
    private dashboardService: DashbroadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.card = this.dashboardService.cardChart();
    this.pie = this.dashboardService.pieChart();
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = [
    'date',
    'name',
    'orderId',
    'price',
    'status',
    'actions',
  ];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  editMode(event: any) {
    this.router.navigate(['/main/orders/edit', event]);
  }
}
