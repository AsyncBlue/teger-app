import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisEventosPage } from './mis-eventos.page';

describe('MisEventosPage', () => {
  let component: MisEventosPage;
  let fixture: ComponentFixture<MisEventosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisEventosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
