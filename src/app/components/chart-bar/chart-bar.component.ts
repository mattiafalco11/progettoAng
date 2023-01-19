import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit{
  products!: Product[];
  basicData: any;
  basicOptions: any;
  showSpinner = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getAllProducts();

    setTimeout(() => {
      this.showSpinner = true;
      this.basicData = {
        labels: ['Apple', 'Samsung', 'Huawei', 'OPPO', 'Microsoft Surface'],
        datasets: [
          {
            label: 'N° of product',
            backgroundColor: '#42A5F5',
            data: [
              this.products.filter((p) => p.brand == 'Apple').length,
              this.products.filter((p) => p.brand == 'Samsung').length,
              this.products.filter((p) => p.brand == 'Huawei').length,
              this.products.filter((p) => p.brand == 'OPPO').length,
              this.products.filter((p) => p.brand == 'Microsoft Surface').length
            ]
          }
        ]
      }
    }, 1000)

  }

  getAllProducts() {
    return this.productsService.getProducts().subscribe(
      { next: res => this.products = res.products }
    );
  }
}
