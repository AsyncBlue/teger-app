import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraficoPage } from './grafico.page';

describe('GraficoPage', () => {
  let component: GraficoPage;
  let fixture: ComponentFixture<GraficoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraficoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
