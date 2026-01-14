import { Injectable } from "@angular/core";
import { IProduct, ProductId } from "../model";
import { ProductsData } from "../model/data";


@Injectable({
    providedIn: 'root' // scope
})
export class ProductService {
    data: IProduct[] = ProductsData

    getProducts() {
        return this.data;
    }

    getProductById(id: ProductId): IProduct | undefined {
        return this.data.find(product => product.id === id);
    }

}