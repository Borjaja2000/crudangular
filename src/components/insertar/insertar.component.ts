import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { Departamento } from 'src/models/departamento';
import {DepartamentoService} from 'src/services/departamento.service';
@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})

export class InsertarComponent implements OnInit {
  private mensaje: string;
  @ViewChild("cajanumero") cajanumero: ElementRef;
  @ViewChild("cajanombre") cajanombre: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad: ElementRef;

  insertarDepartamento(){
    var num = parseInt(this.cajanumero.nativeElement.value);
    var nom = this.cajanombre.nativeElement.value;
    var loc = this.cajalocalidad.nativeElement.value;
    //EN UN RATO INSERTAREMOS MEDIANTE EL SERVICIO
    var dept = new Departamento(num, nom, loc);
    this._service.insertarDepartamento(dept).subscribe(response => {
      this._router.navigate(["/"]);
    }, error => {
      this.mensaje = error;
      console.log(error)
    })
  }

  constructor(
    private _service: DepartamentoService
    ,private _router: Router
  ) {
    //Inicializamos los objetos para que no de fallos
    this.cajanumero = ElementRef.prototype
    this.cajanombre = ElementRef.prototype
    this.cajalocalidad = ElementRef.prototype
   }

  ngOnInit(): void {

  }

}