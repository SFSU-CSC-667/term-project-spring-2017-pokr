import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotComponent } from './forgot/forgot.component';
import { InviteComponent } from './invite/invite.component';

const routes: Routes = [
	{
		path:'',
		component:HomeComponent,
		children:[
			{ path:'',component:MainComponent },
			{ path:'forgot',component:ForgotComponent },
			{ path:'invite',component:InviteComponent },
			{ path:'login',component:LoginComponent },
			{ path:'register',component:RegisterComponent },
			{ path:'reset/:token',component:ResetComponent },
			{ path:'verify',component:VerifyComponent },
			{ path:'**', redirectTo:'', pathMatch:'full' }
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
