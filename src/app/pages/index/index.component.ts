import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  autos: { modelo: string; precio: string; imagen: string }[] = [];

  ngOnInit(): void {
    // Obtener los autos desde el localStorage
    const storedAutos = localStorage.getItem('autos');
    this.autos = storedAutos ? JSON.parse(storedAutos) : [];
  }
}