import {Component} from '@angular/core';
import {Group} from './query-builder.model';

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css']
})
export class QueryBuilderComponent {
  queryGroups: Group[] = [
    {
      type: 'group',
      condition: 'AND',
      items: []
    }
  ];

  submitQuery() {
    console.log(this.queryGroups);
  }
}