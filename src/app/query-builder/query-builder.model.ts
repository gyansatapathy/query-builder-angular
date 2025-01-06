export interface Query {
  type: 'condition';
  field: string;
  operator: string;
  value: string;
}

export interface Group {
  type: 'group';
  condition: 'AND' | 'OR';
  items: (Query | Group)[];
}