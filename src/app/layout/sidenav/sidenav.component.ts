import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  mobileQuery: MediaQueryList;
  level1Menu = '';
  level2Menu = '';
  private readonly _mobileQueryListener: () => void;
  constructor(
    // private service: NavService,
    private router: Router
  ) {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  callLevel1Toggle(event: any, element: any) {
    console.log('clicked', element);
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

  headHome = () => {
    this.router.navigate([`/landing`]);
  };

}
