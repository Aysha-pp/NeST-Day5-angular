import { Component } from '@angular/core';
import { CardComponent } from '../../UI/card/card.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
