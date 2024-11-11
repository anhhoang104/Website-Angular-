import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct } from '../interface';
import { ProductService } from '../product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products!: IProduct[];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  removeItem(id: number) {
    const confirm = window.confirm('bạn có chắc chắn muốn xóa không');
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter((product) => product.id !== id);
        alert('xóa thành công');
      });
    }
  }
}
