import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.css'],
})
export class QueryBuilderComponent {
  operators = ['=', '!=', '>', '<', '>=', '<='];

  queryGroups: {
    condition: string;
    queries: { field: string; operator: string; value: any }[];
  }[] = [
    {
      condition: 'AND',
      queries: [{ field: '', operator: '', value: '' }],
    },
  ];

  addGroup(parentGroupIndex?: number) {
    const newGroup = {
      condition: 'AND',
      queries: [{ field: '', operator: '', value: '' }],
    };

    if (parentGroupIndex !== undefined) {
      this.queryGroups.splice(parentGroupIndex + 1, 0, newGroup);
    } else {
      this.queryGroups.push(newGroup);
    }
  }

  addQuery(groupIndex: number) {
    this.queryGroups[groupIndex].queries.push({ field: '', operator: '', value: '' });
  }

  removeQuery(groupIndex: number, queryIndex: number) {
    this.queryGroups[groupIndex].queries.splice(queryIndex, 1);
  }

  // Drag-and-Drop Logic for Groups
  dropGroup(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.queryGroups, event.previousIndex, event.currentIndex);
  }

  // Drag-and-Drop Logic for Queries
  dropQuery(event: CdkDragDrop<any[]>, groupIndex: number) {
    moveItemInArray(
      this.queryGroups[groupIndex].queries,
      event.previousIndex,
      event.currentIndex
    );
  }

  submitQuery() {
    console.log('Submitted Query Groups:', this.queryGroups);
  }

  removeGroup(number: number) {
    this.queryGroups.splice(number, 1);
  }
}
