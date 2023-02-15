import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { FormGroup , FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private crudService: CrudService,

  ){
    this.bookForm = this.formBiulder.group({
      name: [''],
      price: [''],
      description: [''],
    })
  }

  ngOnInit(): void {

  }

  onSubmit():any {
    this.crudService.addBook(this.bookForm.value)
    .subscribe((res) => {
      console.log(res)
      console.log("Data added successfully");
      this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
    },(err) => {
      console.log("Filde data added");
      console.log(err)
    })
  }

}
