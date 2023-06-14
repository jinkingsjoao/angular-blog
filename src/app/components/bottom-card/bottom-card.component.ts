import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-card',
  templateUrl: './bottom-card.component.html',
  styleUrls: ['./bottom-card.component.css']
})
export class BottomCardComponent implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
