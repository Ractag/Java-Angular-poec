import { Component, inject } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userService: any = inject(AppService)

  

}
