import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
	// {
	// 	path: '',
	// 	loadChildren: '../app/modules/login/login.module#LoginModule'
	// },
	{
		path: 'login',
		loadChildren: '../app/modules/login/login.module#LoginModule'
	},
	{
		path: 'home',
		loadChildren: '../app/modules/home/home.module#HomeModule'
	},
	{
		path: 'home/:category',
		loadChildren: '../app/modules/category/category.module#CategoryModule'
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot( router );