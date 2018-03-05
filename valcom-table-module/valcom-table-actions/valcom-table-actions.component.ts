import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-valcom-table-actions',
  templateUrl: './valcom-table-actions.component.html',
  styleUrls: ['./valcom-table-actions.component.css']
})
export class ValcomTableActions implements OnInit {
  @Input() content: object;
  @Input() editIcon: string = "pencil";
  @Input() deleteIcon: string = "trash";
  @Input() default: boolean = true;
  @Output() editEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editContent(content) {
    this.editEvent.emit(content);
  }

  deleteContent(content) {
    this.deleteEvent.emit(content);
  }
}
