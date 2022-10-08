import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateEmpresas';

constructor(private router:Router){}
  goToPage(home:string):void{
    this.router.navigate(['${pageName}'])
  }
}
