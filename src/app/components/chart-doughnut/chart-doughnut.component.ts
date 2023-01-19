import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.scss']
})
export class ChartDoughnutComponent implements OnInit {
  products!: Product[];
  data: any;
  chartOptions: any;
  showSpinner = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getAllProducts();

    setTimeout(() => {
      this.showSpinner = true;
      this.data = {
        labels: ['Apple', 'Samsung', 'Huawei', 'OPPO', 'Microsoft Surface'],
        datasets: [
          {
            data: [
              this.products.filter(p => p.brand == 'Apple').reduce((sum, p) => sum + p.price, 0),
              this.products.filter(p => p.brand == 'Samsung').reduce((sum, p) => sum + p.price, 0), 
              this.products.filter(p => p.brand == 'Huawei').reduce((sum, p) => sum + p.price, 0),
              this.products.filter(p => p.brand == 'OPPO').reduce((sum, p) => sum + p.price, 0),
              this.products.filter(p => p.brand == 'Microsoft Surface').reduce((sum, p) => sum + p.price, 0)
            ],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#26C6DA",
              "#7E57C2"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#26C6DA",
              "#7E57C2"
            ]
          }
        ]
      };
    }, 1000);
  }

  getAllProducts() {
    return this.productsService.getProducts().subscribe(
      { next: res => this.products = res.products }
    );
  }
}
