import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationMainpageComponent } from './destination-mainpage.component';

describe('DestinationMainpageComponent', () => {
  let component: DestinationMainpageComponent;
  let fixture: ComponentFixture<DestinationMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationMainpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinationMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
