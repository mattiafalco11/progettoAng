export interface Product{
    id: number;
    title: string;
    brand: string;
    price: number;
}
export interface GetProductsResponse{
    limit: number;
    skip: number;
    total: number;
    products: Product[];
}