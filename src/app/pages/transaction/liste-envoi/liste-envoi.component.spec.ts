import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEnvoiComponent } from './liste-envoi.component';

describe('ListeEnvoiComponent', () => {
  let component: ListeEnvoiComponent;
  let fixture: ComponentFixture<ListeEnvoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEnvoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEnvoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
