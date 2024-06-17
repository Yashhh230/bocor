import { Component } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { ForfooterService } from 'src/app/shared/services/forfooter.service';
import { ForserviceService } from 'src/app/shared/services/forservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 
  
  forClient: any[] = []
submitted: boolean = false;
  
  constructor(public main: ForserviceService , public forSer : ForfooterService) { }

 
  /**
   * this is the loginform
   */
  loginForm!: any
  /**
   * this is the studentlist
   */
  studentList: any
  /**
   * this is the hide variable
   */
  hide=true
  

  /**this is the login form  */
  forLogin() {
    this.loginForm = new FormGroup({
      id: new FormControl(Date.now()),
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      subject: new FormControl("", Validators.required),
      message: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required)
    })
  }

  /**
   * this for the get data from localstorage
   */
  ngOnInit(): void {
    this.forClients()
    this.forLogin()
    if (!localStorage.getItem('Loginform')) {
      localStorage.setItem('Loginform', JSON.stringify([]));
    }
  }
  
  /**this will fetch the data using api call */
  forClients() {
    this.main.forContact().subscribe({
      next: (res:any) => {
        this.forClient = res  
      },
      error: (err:any) => {
      },
      complete: () => {
      }
    })
  }

/**
 * this will submit the form and store the data in localStorage 
 * and the user submitted details is shown
 */
  onSubmit() {
    this.submitted = true
    if(this.loginForm.valid) {   
      const studentList: any[] = this.getLocalStorge();
      console.log("ABC",this.loginForm.value);
      
      studentList.push(this.loginForm.value)
      localStorage.setItem('Loginform', JSON.stringify(studentList)); 
      this.forSer.forContact.next(this.getLocalStorge().slice(-3))
      this.hide = false
  }
  }
  getLocalStorge() {
    let value = localStorage.getItem('Loginform')
    if (value) {
      return JSON.parse(value)
    }
  }
  /**
   * click button can redirect to form and then user again fill the form
   */
  clickbutton() {
    this.submitted = false
    this.hide = true
    this.loginForm.reset()
    // this.loginForm.n
  }

}
