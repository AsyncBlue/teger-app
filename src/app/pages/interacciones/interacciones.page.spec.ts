import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InteraccionesPage } from './interacciones.page';

describe('InteraccionesPage', () => {
  let component: InteraccionesPage;
  let fixture: ComponentFixture<InteraccionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteraccionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InteraccionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
