import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireExistantComponent } from './partenaire-existant.component';

describe('PartenaireExistantComponent', () => {
  let component: PartenaireExistantComponent;
  let fixture: ComponentFixture<PartenaireExistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenaireExistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenaireExistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
