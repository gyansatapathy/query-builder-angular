import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryGroupComponent } from './query-group.component';

describe('QueryGroupComponent', () => {
  let component: QueryGroupComponent;
  let fixture: ComponentFixture<QueryGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
