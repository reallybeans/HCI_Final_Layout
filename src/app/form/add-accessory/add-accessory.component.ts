import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accessories, ACCESSORIES_DATA } from 'src/app/modules/accessories/accessories.model';

@Component({
  selector: 'app-add-accessory',
  templateUrl: './add-accessory.component.html',
  styleUrls: ['./add-accessory.component.scss']
})
export class AddAccessoryComponent implements OnInit {
  formGroup!: FormGroup;
  listAccessories = ACCESSORIES_DATA;
  accessories: Accessories;
  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      discription: [null, [Validators.required]],
      category: [null, [Validators.required]],
      price: [null, [Validators.required]],
      supplier: [null, [Validators.required]],
    });
  }
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }
  add() {
    const form = this.formGroup.controls;
    this.accessories = new Accessories();
    this.accessories.id =
      this.listAccessories[this.listAccessories.length - 1]['id'] + 1;
    this.accessories.name = form.name.value;
    this.accessories.category = form.category.value;
    this.accessories.price = form.price.value;
    this.accessories.supplier = form.supplier.value;
    this.accessories.discription = form.discription.value;
    this.accessories.status = "active";
    
    this.listAccessories.push(this.accessories);
    this.router.navigate(['/main/accessories']);
  }
}
