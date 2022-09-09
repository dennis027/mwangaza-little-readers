import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { PartnerFormComponent } from '../partner-form/partner-form.component';
import { NotificationService } from '../service/notification.service';
import { VolunteerFormComponent } from '../volunteer-form/volunteer-form.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
  
  title = 'toaster-not';

  constructor(public dialog: MatDialog,private notifyService : NotificationService) {}
//   showToasterSuccess(){
//     this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
// }

// showToasterError(){
//     this.notifyService.showError("Something is wrong", "ItSolutionStuff.com")
// }

// showToasterInfo(){
//     this.notifyService.showInfo("This is info", "ItSolutionStuff.com")
// }

// showToasterWarning(){
//     this.notifyService.showWarning("This is warning", "ItSolutionStuff.com")
// }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( VolunteerFormComponent , {
      width: '100%',
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
