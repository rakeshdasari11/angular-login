import { Component, OnInit } from '@angular/core';
import { SampleDataService } from 'src/app/services/sample-data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  timeLeft: number = 0;
  interval: any;
  timerdata: any = "";
  
  userData: any;
  constructor(private sampleDataService:SampleDataService) { }
  //capitalization
  num3 = [];

  //custome pipe 3dots
  words='stringgetsmorethane20';

  ngOnInit() {
    this.getData();
    this.startTimer();
    //capitalize data
    const num = ["hello", "bird", "table", "football", "pipe", "code"];
    let num2 = num.forEach((element) => {
      console.log(typeof element);
      let a = element.toUpperCase();
      this.num3.push(a);
      console.log(element);
    
    });
    console.log(this.num3);
  }

  getData(){
    this.sampleDataService.getData().subscribe(res => {
      console.log(res)
      this.userData = res;
    })
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft < 60) {
        this.timeLeft++;
      }
      else if (this.timeLeft === 60) {
        this.timeLeft = 0;
        this.timerdata+="text";
         }
      else {
        this.timeLeft = 60;
      }
    }, 100)

  }
}
