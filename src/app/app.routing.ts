import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DepartamentosComponent } from 'src/components/departamentos/departamentos.component';
import { InsertarComponent } from 'src/components/insertar/insertar.component';
import { ModificarComponent } from 'src/components/modificar/modificar.component';

const appRoutes: Routes = [
    {path:"", component:DepartamentosComponent},
    {path:"insertar",component:InsertarComponent },
    {path:"eliminar/:iddepartamento", component:DepartamentosComponent},
    // , {path:"update/:iddepartamento/:nombre/:localidad", component:ModificarComponent}
    {path:"update/:iddepartamento", component:ModificarComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);