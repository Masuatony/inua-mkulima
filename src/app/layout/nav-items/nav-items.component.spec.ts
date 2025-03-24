import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemsComponent } from './nav-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NavItemsComponent', () => {
  let component: NavItemsComponent;
  let fixture: ComponentFixture<NavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavItemsComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
