import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMainNavComponent } from './shared-main-nav.component';

describe('SharedMainNavComponent', () => {
  let component: SharedMainNavComponent;
  let fixture: ComponentFixture<SharedMainNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedMainNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
