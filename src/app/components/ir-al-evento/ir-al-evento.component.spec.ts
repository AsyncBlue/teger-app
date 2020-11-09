import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrAlEventoComponent } from './ir-al-evento.component';

describe('IrAlEventoComponent', () => {
  let component: IrAlEventoComponent;
  let fixture: ComponentFixture<IrAlEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrAlEventoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrAlEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
