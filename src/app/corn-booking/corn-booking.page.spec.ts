import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CornBookingPage } from './corn-booking.page';

describe('CornBookingPage', () => {
  let component: CornBookingPage;
  let fixture: ComponentFixture<CornBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CornBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
