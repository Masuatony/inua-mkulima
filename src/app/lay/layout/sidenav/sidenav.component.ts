import {Component, inject, Input} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {toSignal} from "@angular/core/rxjs-interop";
import {map, Observable, shareReplay} from "rxjs";
import {
  BreakpointObserver,
  Breakpoints,
  MediaMatcher,
} from '@angular/cdk/layout';import {MatSuffix} from "@angular/material/form-field";
import {MatLine} from "@angular/material/core";
import {ProductService} from "../../../features/components/services/product.service";
import {AsyncPipe, NgClass} from "@angular/common";

export const configSidebarItems: any[] = [
  {
    name: 'Dashboard',
    path: '/configs/ahl',
    icon: 'folder',
    class: 'ml-menu',
    moduleName: 'shif',
    sub_menu: [],
  },
  {
    name: 'Transactions',
    path: '/configs/paye/view',
    icon: 'folder',
    class: 'ml-menu',
    moduleName: 'Config',
    sub_menu: [],
  },
  {
    name: 'Reports',
    path: '/configs/org',
    icon: 'folder',
    class: 'ml-menu',
    moduleName: 'organizations',
    sub_menu: [],
  },
];


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSuffix,
    MatLine,
    NgClass,
    AsyncPipe
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map((result) => result.matches),
    shareReplay(),
  );
  headerImage: string = 'assets/about/windmills.jpg';
  gradient: string = 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),';

  menuItems: any[] =configSidebarItems;

  isSidenavOpened: boolean = false;
  mobileQuery: MediaQueryList;

  // private readonly _mobileQueryListener: () => void;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
    console.log("data received", this.route.snapshot.data)
    this.headerImage = this.route.snapshot.data.toString();
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);

    this.getPictures();
  }

  toggleSide(){
    this.isSidenavOpened =!this.isSidenavOpened;
  }

  getImage() {
    return this.headerImage;
  }

  isOpen: boolean = false;
  @Input() styleBg: string = '';
  welcomeMsg: string = 'welcome to inua mkulima brands';
  // @ts-ignore
  @Input() coreMission:Mission;

  mission = 'Inspire';
  vision= 'Impact';
  tagline = 'Sustain';

  apiData: any[] = [];

  logo: string = 'assets/logos/nurture-kizazi-logo.png'

  // constructor(private service: FeaturesService, private router: Router) {
  //
  // }

  ngOnInit() {
    console.log("================================",this.styleBg)
  }

  openMenu(){
    this.isOpen = !this.isOpen;
  }
  getPictures() {
    this.service.fetchProducts().subscribe({
      next: (res) => {
        this.apiData = res;
      }
    });
  };

  missionNavigate() {
    this.router.navigate(['.'], {
      queryParams: {
        title: this.welcomeMsg,
      },
      skipLocationChange: true
    });
  }

  visionNavigate() {
    this.router.navigateByUrl('.', {
      skipLocationChange: true
    });
  }

  taglineNavigate() {
    this.router.navigateByUrl('.', {
      skipLocationChange: true
    });
  }

  home() {
    this.router.navigateByUrl('/home', {
    });
  }

}
