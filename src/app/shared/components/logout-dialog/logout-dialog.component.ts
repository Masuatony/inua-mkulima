import {Component, Inject, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-dialog',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatButton
  ],
  templateUrl: './logout-dialog.component.html',
  styleUrl: './logout-dialog.component.scss'
})
export class LogoutDialogComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LogoutDialogComponent>,
    private router: Router
              ) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onLogout(): void {
    this.router.navigateByUrl('/login', {
    });
  }
}
