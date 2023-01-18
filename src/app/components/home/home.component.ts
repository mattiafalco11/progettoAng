import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/model/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products!: Product[];

    basicData: any;
    basicOptions: any;

    data: any;
    chartOptions: any;

    constructor(private productsService: ProductsService) { }

    ngOnInit() {

        this.getAllProducts();
        
        this.basicData = {
            labels: ['Apple', 'Samsung', 'Huawei', 'OPPO', 'Microsoft Surface'],
            datasets: [
                {
                    label: 'N° of product',
                    backgroundColor: '#42A5F5',
                    data: [
                            // this.products.map((p) => p.brand = 'Apple').length,
                            // this.products.map((p) => p.brand = 'Samsung').length,
                            // this.products.map((p) => p.brand = 'Huawei').length,
                            // this.products.map((p) => p.brand = 'OPPO').length,
                            // this.products.map((p) => p.brand = 'Microsoft Surface').length
                    ]
                }
            ]
        };

        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
    }
    getAllProducts(){
        return this.productsService.getProducts().subscribe(
            { next: res => this.products = res.products }
        );
    }
}
