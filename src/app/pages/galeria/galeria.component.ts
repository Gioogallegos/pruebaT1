import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})


export class GaleriaComponent {
  selectedImage: string | null = null; // Imagen seleccionada
  isLightboxVisible: boolean = false; // Controla la visibilidad del lightbox
autos: any;

  // Método para mostrar la imagen en el lightbox
  aparecerImagen(imagen: string): void {
    this.selectedImage = imagen;
    this.isLightboxVisible = true;
  }

  // Método para cerrar el lightbox
  cerrarLightbox(): void {
    this.isLightboxVisible = false;
    this.selectedImage = null;
  }
}

