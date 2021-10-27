import { ACCESSORIES_DATA } from './../../modules/accessories/accessories.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-accessory',
  templateUrl: './edit-accessory.component.html',
  styleUrls: ['./edit-accessory.component.scss']
})
export class EditAccessoryComponent implements OnInit {
  formGroup!: FormGroup;
  listAccessories = ACCESSORIES_DATA;
  accessories: any;
  createForm(data: any) {
    this.formGroup = this.formBuilder.group({
      name: [data.name, [Validators.required]],
      discription: [data.discription, [Validators.required]],
      category: [data.category, [Validators.required]],
      price: [data.price, [Validators.required]],
      supplier: [data.supplier, [Validators.required]],
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
    const data = this.listAccessories.find((x) => (x.id = id));
    this.accessories = data;
    this.createForm(data);
  }
  edit() {
    const form = this.formGroup.controls;
    const index = this.listAccessories.findIndex(
      (obj) => obj.id == this.accessories.id
    );
    this.accessories[index].name = form.name.value;
    this.accessories[index].category = form.category.value;
    this.accessories[index].price = form.price.value;
    this.accessories[index].supplier = form.supplier.value;
    this.accessories[index].discription = form.discription.value;
    this.accessories[index].status = form.status.value;

    this.router.navigate(['/main/accessories']);
  }
}
