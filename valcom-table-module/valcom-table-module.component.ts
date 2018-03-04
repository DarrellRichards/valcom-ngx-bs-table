import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-valcom-table-module',
  templateUrl: './valcom-table-module.component.html',
  styleUrls: ['./valcom-table-module.component.css']
})
export class ValcomTableModuleComponent implements OnInit {
  @Input() tableHeaders: any[];
  @Input() contents: any[];
  @Input() tableClasses: string = "table table-striped table-bordered";
  @Input() tableType: string;
  constructor() { }

  ngOnInit() {
  }

}
