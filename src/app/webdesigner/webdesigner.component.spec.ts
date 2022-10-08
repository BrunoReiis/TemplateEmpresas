import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdesignerComponent } from './webdesigner.component';

describe('WebdesignerComponent', () => {
  let component: WebdesignerComponent;
  let fixture: ComponentFixture<WebdesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdesignerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
