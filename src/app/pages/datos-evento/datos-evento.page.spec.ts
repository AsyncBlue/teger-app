import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosEventoPage } from './datos-evento.page';

describe('DatosEventoPage', () => {
  let component: DatosEventoPage;
  let fixture: ComponentFixture<DatosEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEventoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
