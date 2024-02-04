import { Component } from '@angular/core';

@Component({
  selector: 'app-employeee',
  templateUrl: './employeee.component.html',
  styleUrls: ['./employeee.component.css']
})
export class EmployeeeComponent {
  
  empName:string  ="Maxwell"

  empImage:string ="https://static.vecteezy.com/system/resources/thumbnails/009/317/648/small/remote-work-icon-logo-illustration-employee-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg"

  empDesg:string = ""

  empSal:string =""

  userAdd =()=>{
    alert('Add Button Clicked')
  }

  getUserName(event:any){
    console.log(event.target.value);
    
  }

  submitUsername(user:any){
    console.log(user.value);

    this.empName = user.value  // this. is because of instance variable
  }

  formSubmit(user:any,desg:any,sal:any){
    if(!user.value || !desg.value || !sal.value){
      alert('plaease fill the form completely')
    }
    else{
      alert(
        `UserName is ${user.value} 
         Designation is ${this.empDesg}
         Salary is ${this.empSal}`);

         this.empName = user.value
    }
    
  }

}
