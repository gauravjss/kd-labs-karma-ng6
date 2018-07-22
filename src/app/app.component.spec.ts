import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CapitalizePipe} from './capitalize.pipe';
import {CarComponent} from './car/car.component';
import {CarColorService} from './car-color.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, CapitalizePipe, CarComponent],
     /* providers: [CarColorService]*/
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'kd labs karma ng6!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('kd labs karma ng6!');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to kd labs karma ng6!');
  }));
});
