import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuglistComponent } from './muglist.component';

describe('MuglistComponent', () => {
  let component: MuglistComponent;
  let fixture: ComponentFixture<MuglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuglistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
