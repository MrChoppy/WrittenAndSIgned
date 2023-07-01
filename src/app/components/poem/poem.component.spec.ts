import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemComponent } from './poem.component';

describe('PoemComponent', () => {
  let component: PoemComponent;
  let fixture: ComponentFixture<PoemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoemComponent]
    });
    fixture = TestBed.createComponent(PoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
