import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  form!: any;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, Validators.required],
      quantity: 0,
      description: '',
    });
  }
  onSubmit() {
    if (this.form.value.invalid) return;
    this.productService.addProduct(this.form.value).subscribe(() => {
      alert('thêm mới thành công');
      this.router.navigateByUrl('/');
    });
  }
}
