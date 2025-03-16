import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
// import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    {path:'home', component: HomeComponent},
    {path:'header', component: HeaderComponent},
    {path:'footer', component: FooterComponent},
    {path:'nav', component: NavComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    // {path:'',redirectTo:'/home'},
    {path:'projects', component: ProjectsComponent},

];
