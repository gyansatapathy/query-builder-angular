import { Component } from '@angular/core';
import { Query, QueryGroup } from './query-builder.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css']
})
export class QueryBuilderComponent {
  queryGroups: QueryGroup[] = [
    {
      condition: 'AND',
      queries: [],
      subGroups: []
    }
  ];

  addQuery(groupIndex: number) {
    this.queryGroups[groupIndex].queries.push({ field: '', operator: '', value: '' });
  }

  removeQuery(groupIndex: number, queryIndex: number) {
    this.queryGroups[groupIndex].queries.splice(queryIndex, 1);
  }

  addGroup(parentGroupIndex: number) {
    this.queryGroups[parentGroupIndex].subGroups.push({
      condition: 'AND',
      queries: [],
      subGroups: []
    });
  }

  removeGroup(parentGroupIndex: number, groupIndex: number) {
    this.queryGroups[parentGroupIndex].subGroups.splice(groupIndex, 1);
  }

  dropQuery(event: CdkDragDrop<Query[]>, groupIndex: number) {
    moveItemInArray(this.queryGroups[groupIndex].queries, event.previousIndex, event.currentIndex);
  }

  submitQuery() {
    console.log(this.queryGroups);
  }
}