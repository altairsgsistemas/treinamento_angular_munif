import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[GuardGuard] },
  { path: '', redirectTo:'/dashboard',pathMatch: 'full'},
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 constructor(r:Router){
      this.logaRotas("/",r.config);
    }

    logaRotas(pai:String,rotas:Routes){
      for (let i=0;i<rotas.length;i++){
        console.log("path:",pai,rotas[i].path,rotas[i].component?rotas[i].component:"-->"+rotas[i].redirectTo);
        if (rotas[i].children){
           rotas[i].canActivate=[GuardGuard];
          this.logaRotas(rotas[i].path+"/",rotas[i].children);
        }
      }

    }


}
