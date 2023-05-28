import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-doua',
  templateUrl: './doua.component.html',
  styleUrls: ['./doua.component.scss']
})
export class DouaComponent implements OnInit{
  ngOnInit(): void {
    window.scroll(0,0);
  }

}
