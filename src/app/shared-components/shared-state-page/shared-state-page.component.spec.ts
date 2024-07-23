import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedStatePageComponent } from './shared-state-page.component';

describe('SharedStatePageComponent', () => {
  let component: SharedStatePageComponent;
  let fixture: ComponentFixture<SharedStatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedStatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedStatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
