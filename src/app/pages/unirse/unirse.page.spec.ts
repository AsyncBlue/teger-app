import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnirsePage } from './unirse.page';

describe('UnirsePage', () => {
  let component: UnirsePage;
  let fixture: ComponentFixture<UnirsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnirsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
