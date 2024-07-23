import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCityPageComponent } from './shared-city-page.component';

describe('SharedCityPageComponent', () => {
  let component: SharedCityPageComponent;
  let fixture: ComponentFixture<SharedCityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCityPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedCityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
