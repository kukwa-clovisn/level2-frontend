import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
      {
        path: "",
        component: HomeComponent,
        children: [
            {
              path: "",
              component: RegisterComponent
            },

            {
                path: "profile",
                component: ProfileComponent
            }
        ]
      },
      
      {
          path: "user",
          component: UsersComponent
      },

      {
          path: "form",
          component: FormComponent
      },

      {
          path: "log-in",
          component: LogInComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
