import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LectorQRPage } from './lector-qr.page';

describe('LectorQRPage', () => {
  let component: LectorQRPage;
  let fixture: ComponentFixture<LectorQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectorQRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LectorQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
