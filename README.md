# valcom-ngx-bs-table

# Public API


Lets create a table
Angular HTML
```javascript
  <app-valcom-table-module [tableHeaders]="tableView" tableClasses="table table-striped table-bordered table-hover">
    <tr *ngFor="let content of contents">
      <td>{{content.name}}</td>
      <td>{{content.permissions}}</td>
      <td><app-valcom-table-actions [content]="content" (editEvent)="editEvent($event)" (deleteEvent)="deleteEvent($event)"></app-valcom-table-actions></td>
    </tr>
  </app-valcom-table-module>
```

Data Pass Back

```javascript
  Main Table Component

  tableHeaders: Array;
  contents: Array;
  tableClasses: String; = Defaults: "table table-striped table-bordered";
```

```javascript
  Actions Component

  default: Boolean; Defaults to true, if set to false, has to pass back custom action handlers
  content: Object;
  editIcon: String; Defaults: "pencil";
  deleteIcon: String; Defaults: "trash";
  editEvent: Function();
  deleteEvent: Function();
```
