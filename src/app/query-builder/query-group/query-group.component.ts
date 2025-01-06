import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Group, Query } from '../query-builder.model';

@Component({
  selector: 'app-query-group',
  templateUrl: './query-group.component.html',
  styleUrls: ['./query-group.component.scss']
})
export class QueryGroupComponent {
  @Input() group: Group;
  @Input() index: number;
  @Input() fieldTemplate: TemplateRef<any>;
  @Input() valueTemplate: TemplateRef<any>;
  @Output() removeGroup = new EventEmitter<number>();
  @Output() dropQuery = new EventEmitter<CdkDragDrop<string[]>>();

  addQuery() {
    const newQuery: Query = {
      type: 'condition',
      field: '',
      operator: '',
      value: ''
    };
    this.group.items.push(newQuery);
  }

  addGroup() {
    const newGroup: Group = {
      type: 'group',
      condition: 'AND',
      items: []
    };
    this.group.items.push(newGroup);
  }

  removeQuery(index: number) {
    this.group.items.splice(index, 1);
  }

  removeSubGroup(index: number) {
    this.group.items.splice(index, 1);
  }

  onDropQuery(event: CdkDragDrop<(Query | Group)[]>) {
    moveItemInArray(this.group.items, event.previousIndex, event.currentIndex);
  }
}