import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {
 

  constructor(public route: ActivatedRoute, public rout: Router) { }
  /**
   * login list variable
   */
  LoginList: any = []
  /**
   * this is for the list array
   */
  List: any = []
  /**
   * this is the selected id for matching 
   */
  mainList:any= []
  forselectedid:any 
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (res: any) => {
        if (res) {
          this.getLocalStorge()
          this.forselectedid = res.id
          this.findindex(res.id)
        }
      },
    });
  } 

/**
 * this is the findindex and push in the array 
 * it will find the matching id and then it will add in localstorage 
 * 
 */
  findindex(id: any) {
    this.LoginList= []
    const studentLocalStorage = localStorage.getItem('Loginform');
    const userList = studentLocalStorage ? JSON.parse(studentLocalStorage) : [];
    const studentFind = userList.findIndex((f: any) => f.id == id);
    this.LoginList.push(userList[studentFind])
    this.forselectedid = Number(id) ;
  }

  /**
   * this will slice the list and show only last 3 values
   */
  getLocalStorge() { 
    let value = localStorage.getItem('Loginform')
    if (value) {
      this.mainList = JSON.parse(value)
      this.List = this.mainList.slice(-3)
    }
  }


  backTopage() {
    this.rout.navigate(['/main'])
  }
}
