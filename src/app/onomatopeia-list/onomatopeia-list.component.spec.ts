import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopeiaListComponent } from './onomatopeia-list.component';

describe('OnomatopeiaListComponent', () => {
  let component: OnomatopeiaListComponent;
  let fixture: ComponentFixture<OnomatopeiaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnomatopeiaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnomatopeiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
