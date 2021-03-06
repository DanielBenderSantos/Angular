import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {   
   }
   showMessage(msg: string): void{
      this.snackBar.open(msg, 'X',{
        duration: 3000,
        horizontalPosition:'right',
        verticalPosition:'top'
      })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  // o que ele ta recebendo aqui tem que ser string ( porem o que ele ta recebendo não e string e number ou qualquer outra coisa menos string)
  // readById(id: string):Observable<Product>{

  // troquei o tipo do parametro que ele ta recebendo por ANY  OU SEJA QUALQUER COISA
  readById(id: any):Observable<Product>{

    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}
