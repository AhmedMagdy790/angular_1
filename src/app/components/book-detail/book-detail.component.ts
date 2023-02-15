import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { FormGroup , FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  getId:any;
  updateForm!: FormGroup;

  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private activateRouter:ActivatedRoute,
    private ngZone: NgZone,
    private crudService: CrudService,

  ){

    this.getId = this.activateRouter.snapshot.paramMap.get('id');
    if(this.getId){
     
      this.crudService.getBook(this.getId).subscribe(res => {
        if(res['book']){
          res = res['book'];
        }

        this.updateForm.setValue({
          name: res['name'],
          price: res['price'],
          description: res['description'],
        });

      });
    }

        
    this.updateForm = this.formBiulder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }
  
  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value)
    .subscribe((res) => {
      console.log(res)
      console.log('Data updated successfully')
      this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
    }, (err) => {
      console.log(err)
    });
  }

}
