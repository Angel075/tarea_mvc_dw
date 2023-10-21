import { Component,OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  data: any[] = [];
  constructor(private RestService: RestService) { }
  ngOnInit(): void{
    this.llenarData();
  }
  llenarData(){
    this.RestService.getData().subscribe (data => {
      this.data = data;
      console.log(this.data)
    })
  }
}
