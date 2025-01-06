import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QueryGroup, Query } from '../query-builder.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-query-group',
  templateUrl: './query-group.component.html',
  styleUrls: ['./query-group.component.scss']
})
export class QueryGroupComponent {
  @Input() group: QueryGroup;
  @Input() groupIndex: number;
  @Output() removeGroup = new EventEmitter<number>();
  @Output() dropQuery = new EventEmitter<CdkDragDrop<Query[]>>();

  addQuery() {
    this.group.queries.push({ field: '', operator: '', value: '' });
  }

  removeQuery(queryIndex: number) {
    this.group.queries.splice(queryIndex, 1);
  }

  addGroup() {
    this.group.subGroups.push({
      condition: 'AND',
      queries: [],
      subGroups: []
    });
  }

  removeSubGroup(subGroupIndex: number) {
    this.group.subGroups.splice(subGroupIndex, 1);
  }

  onDropQuery(event: CdkDragDrop<Query[]>) {
    moveItemInArray(this.group.queries, event.previousIndex, event.currentIndex);
    this.dropQuery.emit(event);
  }
}