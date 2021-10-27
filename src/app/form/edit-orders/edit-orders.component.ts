import {
  Accessories,
  ACCESSORIES_DATA,
} from 'src/app/modules/accessories/accessories.model';
import {
  ELEMENT_DATA1,
  ELEMENT_DATA2,
  ELEMENT_DATA3,
} from './../../modules/orders/order.model';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ELEMENT_DATA, UserData } from 'src/app/modules/orders/order.model';

@Component({
  selector: 'app-edit-orders',
  templateUrl: './edit-orders.component.html',
  styleUrls: ['./edit-orders.component.scss'],
})
export class EditOrdersComponent implements OnInit {
  formGroup!: FormGroup;
  userSearch: any;
  user: any;
  id: any;
  sub: any;
  modeEdit = 0;
  order = ELEMENT_DATA;
  order1 = ELEMENT_DATA1;
  order2 = ELEMENT_DATA2;
  order3 = ELEMENT_DATA3;
  accessories = ACCESSORIES_DATA;
  data: Accessories[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    for (let index = 0; index < 8; index++) {
      this.data.push(
        this.accessories[Math.floor(Math.random() * this.accessories.length)]
      );
    }
    console.log(this.data);

    this.id = this.activatedroute.snapshot.params['id'];

    this.userSearch = this.order.find((p) => p.id == this.id);
    if (this.userSearch != null) {
      this.user = this.userSearch;
      this.createForm(this.user);
      this.userSearch = null;
      this.modeEdit = 1;
    }
    this.userSearch = this.order1.find((p) => p.id == this.id);
    if (this.userSearch != null) {
      this.user = this.userSearch;
      this.createForm(this.user);
      this.userSearch = null;
      this.modeEdit = 2;
    }
    this.userSearch = this.order2.find((p) => p.id == this.id);
    if (this.userSearch != null) {
      this.user = this.userSearch;
      this.createForm(this.user);
      this.userSearch = null;
      this.modeEdit = 3;
    }
    this.userSearch = this.order3.find((p) => p.id == this.id);
    if (this.userSearch != null) {
      this.user = this.userSearch;
      this.createForm(this.user);
      this.userSearch = null;
      this.modeEdit = 4;
    }
  }
  createForm(user: UserData) {
    this.formGroup = this.formBuilder.group({
      status: [user.status],
    });
  }
  edit() {
    const status = this.formGroup.controls.status.value;
    this.user.status = status;
    switch (this.modeEdit) {
      //Chờ xử lý
      case 1:
        let obj = this.order.findIndex((obj) => obj.id == this.user.id);
        if (status == 'Đang giao') {
          this.order.splice(obj, 1);
          this.order1.push(this.user);
        } else if (status == 'Đã Giao') {
          this.order.splice(obj, 1);
          this.order2.push(this.user);
        } else if (status == 'Đã hủy') {
          this.order.splice(obj, 1);
          this.order3.push(this.user);
        }
        break;
      //Đang giao
      case 2:
        let obj2 = this.order1.findIndex((obj) => obj.id == this.user.id);
        if (status == 'Chờ xử lý') {
          this.order1.splice(obj2, 1);
          this.order.push(this.user);
        } else if (status == 'Đã giao') {
          this.order1.splice(obj2, 1);
          this.order2.push(this.user);
        } else if (status == 'Đã hủy') {
          this.order1.splice(obj2, 1);
          this.order3.push(this.user);
        }
        break;
      //Đã giao
      case 3:
        let obj3 = this.order1.findIndex((obj) => obj.id == this.user.id);
        if (status == 'Chờ xử lý') {
          this.order2.splice(obj3, 1);
          this.order.push(this.user);
        } else if (status == 'Đang giao') {
          this.order2.splice(obj3, 1);
          this.order1.push(this.user);
        } else if (status == 'Đã hủy') {
          this.order2.splice(obj3, 1);
          this.order3.push(this.user);
        }
        break;
      //Đã hủy
      case 4:
        let obj4 = this.order1.findIndex((obj) => obj.id == this.user.id);
        if (status == 'Chờ xử lý') {
          this.order3.splice(obj4, 1);
          this.order.push(this.user);
        } else if (status == 'Đang giao') {
          this.order3.splice(obj4, 1);
          this.order1.push(this.user);
        } else if (status == 'Đã hủy') {
          this.order3.splice(obj4, 1);
          this.order2.push(this.user);
        }
        break;
    }
    this.router.navigate(['/main/orders']);
  }
  delete() {
    switch (this.modeEdit) {
      case 1:
        let obj = this.order.findIndex((obj) => obj.id == this.user.id);
        this.order.splice(obj, 1);
        break;
      case 2:
        let obj2 = this.order1.findIndex((obj) => obj.id == this.user.id);
        this.order1.splice(obj2, 1);
        break;
      case 3:
        let obj3 = this.order2.findIndex((obj) => obj.id == this.user.id);
        this.order2.splice(obj3, 1);
        break;
      case 4:
        let obj4 = this.order3.findIndex((obj) => obj.id == this.user.id);
        this.order3.splice(obj4, 1);
        break;
    }
    this.router.navigate(['/main/orders']);
  }
}
