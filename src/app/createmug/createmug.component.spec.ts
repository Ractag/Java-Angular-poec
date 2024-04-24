import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemugComponent } from './createmug.component';

describe('CreatemugComponent', () => {
  let component: CreatemugComponent;
  let fixture: ComponentFixture<CreatemugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatemugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatemugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
