import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForfooterService } from '../../services/forfooter.service';

@Component({
  selector: 'app-fooer',
  templateUrl: './fooer.component.html',
  styleUrls: ['./fooer.component.scss']
})
export class FooerComponent implements OnInit {
  /* 
  *this is for the form variable
  */
  forSubscribe !: any
  footerList:any = {}
  constructor(public main: ForfooterService) {}
  /* 
*this is the form method
*/

  form() {
    this.forSubscribe = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }
     /* 
  *this is method can call the localstorage and get the value
  */
  ngOnInit(): void {
    this.form()
    if (!localStorage.getItem('subscriberForm')) {
      localStorage.setItem('subscriberForm', JSON.stringify([]));
    }
    this.getLocalStorge()
    this.getData()
  }
   /* 
  *this can validate user and if the user is already subscribe then print the error messsage otherwise it will push the object
  */
  sub() {
    if (this.forSubscribe.valid) {
      const studentList: any = JSON.parse(localStorage.getItem('subscriberForm') || '[]');
      const emailValue = this.forSubscribe.get('email')?.value;
      const emailExists = studentList.some((student: any) => student.email === emailValue);
      if (emailExists) {
        this.forSubscribe.get('email')?.setErrors({ alreadyhave: 'This is already subscribed.' })
      }
      else {
        studentList.push({ email: emailValue })
        localStorage.setItem('subscriberForm', JSON.stringify(studentList));
        this.forSubscribe.reset()
      }     
    } 
  }

  /**
   * 
   * @returns this will return the value from the localstorage
   */
  getLocalStorge() {
    let value = localStorage.getItem('subscriberForm')
    if (value) {
      return JSON.parse(value)
    }
  }

  /**
   * this will the data from api call
   */
  getData() {
    this.main.getFooter().subscribe({
      next: (res:any) => {
        this.footerList = res
      },
      error: (err:any) => {
      },
      complete: () => {
      }
    })
  }

  
}
