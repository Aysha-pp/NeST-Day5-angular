import { SlicePipe } from '@angular/common';
import { ApiService } from '../../api.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor(private api:ApiService){}
  products:any=[]

  ngOnInit()
  {
    this.api.getData().subscribe((data:any) =>{
      this.products=data;
    })
  }

}
