import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SobresComponent } from './sobres.component';

describe('SobresComponent', () => {
  let component: SobresComponent;
  let fixture: ComponentFixture<SobresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SobresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
