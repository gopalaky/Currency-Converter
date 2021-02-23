import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  from: string;
  to: string;
  output: Object;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
      this.output = this.http.getCoinPrice(this.from, this.to);
      console.log(this.output.toString);
    }
}
