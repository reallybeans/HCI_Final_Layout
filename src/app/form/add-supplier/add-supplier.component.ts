import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  Supllier,
  SUPPLIER_DATA,
} from 'src/app/modules/suppliers/suppliers.model';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss'],
})
export class AddSupplierComponent implements OnInit {
  formGroup!: FormGroup;
  listSuppliers = SUPPLIER_DATA;
  supplier: Supllier;
  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      link: [null, [Validators.required]],
    });
  }
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }
  add() {
    const form = this.formGroup.controls;
    this.supplier = new Supllier();
    this.supplier.id =
      this.listSuppliers[this.listSuppliers.length - 1]['id'] + 1;
    this.supplier.name = form.name.value;
    this.supplier.email = form.email.value;
    this.supplier.phone = form.phone.value;
    this.supplier.link = form.link.value;
    this.supplier.date = new Date(Date.now());
    this.supplier.status = "active";
    this.listSuppliers.push(this.supplier);
    this.router.navigate(['/main/suppliers']);
  }
}
