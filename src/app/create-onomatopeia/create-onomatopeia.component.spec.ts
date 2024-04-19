import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatopeiaComponent } from './create-onomatopeia.component';

describe('CreateOnomatopeiaComponent', () => {
  let component: CreateOnomatopeiaComponent;
  let fixture: ComponentFixture<CreateOnomatopeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOnomatopeiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateOnomatopeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
