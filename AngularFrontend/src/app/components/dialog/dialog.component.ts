import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl,Validators } from '@angular/forms';
import { CalculatorService } from '../../services/calculator.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  start = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required]);
  score : number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private calculatorService: CalculatorService
  ) { }

  addValues(start:any, amount:any){
    let returnValue = this.calculatorService.addAmounts(start, amount);
    returnValue.then((result) => {
      this.score = result;
    });
  }  
  
  subtractValues(start:any, amount:any){
    let returnValue = this.calculatorService.subtractAmounts(start, amount);
    returnValue.then((result) => {
      this.score = result;
    });
  }  

  changeColor(){
    const r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
    const g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
    const b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255

    const randomColor = `rgb(${r}, ${g}, ${b})`;

    let header = document.getElementById("modalHeader");
    let footer = document.getElementById("modalFooter");
    let footerWrapper = document.getElementById("footer-wrapper");

    header?.style.setProperty("background-color", `${randomColor}`);
    footer?.style.setProperty("background-color", `${randomColor}`);
    footerWrapper?.style.setProperty("background-color", `${randomColor}`);

    console.log(header, footer);
  }
}
