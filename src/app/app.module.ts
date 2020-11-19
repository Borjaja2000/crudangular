import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {DepartamentoService} from 'src/services/departamento.service';
import { MenuComponent } from 'src/components/menu/menu.component';
import { DepartamentosComponent } from 'src/components/departamentos/departamentos.component';
import { InsertarComponent } from 'src/components/insertar/insertar.component';
import { ModificarComponent } from 'src/components/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DepartamentosComponent,
    InsertarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpClientModule
  ],
  providers: [appRoutingProviders, DepartamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }