import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

   constructor(public api:ApiService, private routs: ActivatedRoute){}
   item: any;

   ngOnInit(){

    const id = this.routs.snapshot.paramMap.get('id');
    console.log(id);

    this.api.getDataById(id).subscribe((data) =>{

      this.item = data;
      console.log(this.item);
    })


   }
   }
  


