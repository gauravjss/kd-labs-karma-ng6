import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComponent } from './car.component';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create car component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('initial value of title to be Testing', async(() => {
    expect(component.title).toBe('Testing');
  }));

  it('initial value of title to be Testing', async(() => {
    expect(compiled.querySelector('div').querySelector('p').textContent).toBe('Testing');
  }));

  it('testing query selector by id', async(() => {
    expect(compiled.querySelector('#k').textContent).toBe('test works');
  }));

  it('testing query selector by class', async(() => {
    expect(compiled.querySelector('.p').textContent).toBe('Testing');
  }));
});
