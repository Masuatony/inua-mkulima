import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { map, Observable, shareReplay } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MenuItem } from '../models/menu-items';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,
  ],
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.scss',
})
export class NavItemsComponent {
  @Input() menuItems: MenuItem[] = [];
  level1Menu = '';
  level2Menu = '';
  @Input() selectedMenu: MenuItem | null = null;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) {}

  callLevel1Toggle(event: any, element: any) {
    event.preventDefault();
    this.level1Menu = this.level1Menu === element ? null : element;
  }
  closeSideNav() {
    // this.store.dispatch(fromLayout.LayoutActions.closeSidenav());
  }
  callLevel2Toggle(event: any, element: any) {
    console.log('clicked', element);
    event.preventDefault();
    this.level2Menu = this.level2Menu === element ? null : element;
  }
}
