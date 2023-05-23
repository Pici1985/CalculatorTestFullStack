import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFrontend';
  // score = 0;
  constructor(public dialog: MatDialog) { }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { value1: 0, value2: 0, button: 'Add' } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openDialogSubtract(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { value1: 0, value2: 0, button: 'Subtract' } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  changeColor(){
    let header = document.getElementById("modalHeader");
    let footer = document.getElementById("modalFooter");

    console.log(header, footer);
  }
}
