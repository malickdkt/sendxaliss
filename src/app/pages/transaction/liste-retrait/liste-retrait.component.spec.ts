import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRetraitComponent } from './liste-retrait.component';

describe('ListeRetraitComponent', () => {
  let component: ListeRetraitComponent;
  let fixture: ComponentFixture<ListeRetraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeRetraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRetraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
