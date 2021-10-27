import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { USERS_DATA } from 'src/app/modules/users/users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  formGroup!: FormGroup;
  listSuppliers = USERS_DATA;
  user: any;
  createForm(data: any) {
    this.formGroup = this.formBuilder.group({
      email: [data.email, [Validators.required]],
      name: [data.name, [Validators.required]],
      phone: [data.phone, [Validators.required]],
      address: [data.address, [Validators.required]],
      permission: [data.permission, [Validators.required]],
      status: [data.status, [Validators.required]],
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
    this.user = data;
    this.createForm(data);
  }
  edit() {
    const form = this.formGroup.controls;
    const index = this.listSuppliers.findIndex((obj) => obj.id == this.user.id);

    this.listSuppliers[index].status = form.status.value;

    this.router.navigate(['/main/suppliers']);
  }
}
