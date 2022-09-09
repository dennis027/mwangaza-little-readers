import { Component, OnInit,Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PartnersComponent } from '../partners/partners.component';
export interface DialogData {

}
@Component({
  selector: 'app-lilian-kabaya',
  templateUrl: './lilian-kabaya.component.html',
  styleUrls: ['./lilian-kabaya.component.css']
})
export class LilianKabayaComponent implements OnInit {
  panelOpenState = false;
  constructor(
    public dialogRef: MatDialogRef<PartnersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }

}
