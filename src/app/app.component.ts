import {Component, ElementRef, OnInit} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  ngOnInit() {
    console.log(this.monthNumber)
    console.log(this.month);
    // console.log(this.lastDay)
    // console.log(this.monthArr[this.monthNumber])

  }
  bool=false
  date:Date=new Date();
  monthArr:string[]=[
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ]

  count=1
  monthNumber:number=this.date.getMonth()
  month:string=this.monthArr[this.monthNumber];
  year:number=this.date.getFullYear()
  lastDay:number= new Date(this.date.getFullYear(), this.monthNumber +this.count, 0).getDate();
  daysArr:number[]=new Array(this.lastDay)

  firstDay:any = new Date(this.date.getFullYear(), this.monthNumber, 1).getDay()
  emptyArr:string[]=new Array(this.firstDay-1)

  goNext(){
    //debugger;
    this.monthNumber = this.monthNumber + 1;
    this.month=this.monthArr[this.monthNumber];
    if (this.monthNumber===12){
      this.monthNumber=0
      this.year+=1
    }

    let day = this.firstDay = new Date(this.date.getFullYear(), this.date.getMonth() + this.count, 1).getDay();
    day = day - 1;
    if(day < 0) {
      day = 6;
    }
    this.lastDay=new Date(this.date.getFullYear(), this.monthNumber + this.count++,0).getDate()

    this.emptyArr=new Array(day)
    this.daysArr=new Array(this.lastDay);

  }

  goBack(){
    if (this.monthNumber===0){
      this.monthNumber=12
      this.year-=1
      this.month=this.monthArr[this.monthNumber]
    }
    this.month=this.monthArr[--this.monthNumber];
    this.lastDay=new Date(this.date.getFullYear(), this.monthNumber -this.count,0).getDate()
    let day=this.firstDay =new Date(this.date.getFullYear(), this.date.getMonth()+  this.count, 1).getDay();
    this.emptyArr=new Array(day)
    this.daysArr=new Array(this.lastDay);

  }

markDay(){

}

}

