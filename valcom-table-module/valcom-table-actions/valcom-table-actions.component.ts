import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-valcom-table-actions',
  templateUrl: './valcom-table-actions.component.html',
  styleUrls: ['./valcom-table-actions.component.css']
})
export class ValcomTableActions implements OnInit {
  @Input() content: object;
  constructor() { }

  ngOnInit() {
  }

}
