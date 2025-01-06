export interface Query {
  field: string;
  operator: string;
  value: string;
}

export interface QueryGroup {
  condition: 'AND' | 'OR';
  queries: Query[];
  subGroups: QueryGroup[];
}