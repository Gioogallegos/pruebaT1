import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Auto {
  modelo: string;
  precio: string;
  imagen: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  autos: Auto[] = [];
  modelo: string = '';
  precio: string = '';
  imagen: string = '';

  ngOnInit() {
    this.cargarAutos();
  }

  cargarAutos() {
    const autosGuardados = localStorage.getItem('autos');
    this.autos = autosGuardados ? JSON.parse(autosGuardados) : [];
  }

  guardarAutos() {
    localStorage.setItem('autos', JSON.stringify(this.autos));
  }

  agregarAuto() {
    if (!this.modelo || !this.precio || !this.imagen) return;

    const nuevoAuto: Auto = {
      modelo: this.modelo,
      precio: this.precio,
      imagen: this.imagen
    };

    this.autos.push(nuevoAuto);
    this.guardarAutos();

    // Resetear formulario
    this.modelo = '';
    this.precio = '';
    this.imagen = '';
  }

  editarAuto(index: number) {
    const auto = this.autos[index];
    this.modelo = auto.modelo;
    this.precio = auto.precio;
    this.imagen = auto.imagen;

    // Eliminar auto para que se vuelva a agregar editado
    this.autos.splice(index, 1);
    this.guardarAutos();
  }

  eliminarAuto(index: number) {
    this.autos.splice(index, 1);
    this.guardarAutos();
  }
}