import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  Supllier,
  SUPPLIER_DATA,
} from 'src/app/modules/suppliers/suppliers.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss'],
})
export class EditSupplierComponent implements OnInit {
  formGroup!: FormGroup;
  listSuppliers = SUPPLIER_DATA;
  supplier: any;
  createForm(data: any) {
    this.formGroup = this.formBuilder.group({
      name: [data.name, [Validators.required]],
      email: [data.email, [Validators.required]],
      phone: [data.phone, [Validators.required]],
      link: [data.link, [Validators.required]],
      status: [data.status, [Validators.required]],
      date: [data.date, [Validators.required]],
    });
  }
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    const data = this.listSuppliers.find((x) => (x.id = id));
    this.supplier = data;
    this.createForm(data);
  }
  edit() {
    const form = this.formGroup.controls;
    const index = this.listSuppliers.findIndex((obj => obj.id == this.supplier.id));
    this.listSuppliers[index].name = form.name.value;
    this.listSuppliers[index].email = form.email.value;
    this.listSuppliers[index].phone = form.phone.value;
    this.listSuppliers[index].link = form.link.value;
    this.listSuppliers[index].status = form.status.value;
    this.listSuppliers[index].date = form.date.value;
    
    this.router.navigate(['/main/suppliers']);
  }
}
