import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LilianKabayaComponent } from '../lilian-kabaya/lilian-kabaya.component';
import { WangariKabayaComponent } from '../wangari-kabaya/wangari-kabaya.component';

export interface DialogData {

}
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  
  showButton: boolean = false;
  showDiv: boolean = false;
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(LilianKabayaComponent, {
      width: '75%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  openDialog1(): void {
    const dialogRef = this.dialog.open(WangariKabayaComponent, {
      width: '75%',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  ngOnInit(): void {
  }

}
