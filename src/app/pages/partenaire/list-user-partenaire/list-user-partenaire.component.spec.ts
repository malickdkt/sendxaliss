import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserPartenaireComponent } from './list-user-partenaire.component';

describe('ListUserPartenaireComponent', () => {
  let component: ListUserPartenaireComponent;
  let fixture: ComponentFixture<ListUserPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
