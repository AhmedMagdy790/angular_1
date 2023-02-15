import { CrudService } from './../../services/crud.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  Books:any = [];

  constructor(private crudService: CrudService) {}
  ngOnInit(): void {
    this.crudService.getBooks().subscribe(res => {
      this.Books = res;
    })
  }

  delete(id:any, i:any) {
    this.crudService.deleteBook(id).subscribe(res => {
      this.Books.splice(i,1);
    });
  }
}
