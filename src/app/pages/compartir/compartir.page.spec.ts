import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompartirPage } from './compartir.page';

describe('CompartirPage', () => {
  let component: CompartirPage;
  let fixture: ComponentFixture<CompartirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompartirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
