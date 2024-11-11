import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css',
})
export class ProductEditComponent {
  form!: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    const id = +this.activeRoute.snapshot.params['id'];
    this.productService.getProductById(id).subscribe((data) => {
      this.form.patchValue(data);
    });
  }
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
    const id = +this.activeRoute.snapshot.params['id'];
    this.productService
      .updateProduct({ ...this.form.value, id })
      .subscribe(() => {
        alert('sửa mới thành công');
        this.router.navigateByUrl('/');
      });
  }
}
