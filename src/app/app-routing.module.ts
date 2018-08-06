import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassListComponent } from './class/class-list/class-list.component';
import { ClassDetailComponent } from './class/class-detail/class-detail.component';


const routes: Routes = [
{ path: '', redirectTo: '/classes/list', pathMatch:'full' },
{ path: 'classes/list', component: ClassListComponent },
{ path: 'classes/detail', component: ClassDetailComponent },

{ path: '**', component: ClassListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
