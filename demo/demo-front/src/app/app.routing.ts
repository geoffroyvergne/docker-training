import { Routes, RouterModule } from '@angular/router';
import {HomeRoutes} from './home/home.routing';
import {DebugRoutes} from './debug/debug.routing';
import {TodoRoutes} from './todo/todo.routing';
import {TestRoutes} from './test/test.routing';
import { HelpRoutes } from './help/help.routing';

const appRoutes: Routes = [
  ...HomeRoutes,
  ...TestRoutes,
  ...DebugRoutes,
  ...TodoRoutes,
  ...HelpRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);