import { Component } from '@angular/core';
import {SidenavComponent} from "../layout/sidenav/sidenav.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    SidenavComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
