import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent {
  searchText: string = '';

  autos = [
    { name: 'Kia Rio', price: 25000000, image: "assets/images/kia.webp" },
    { name: 'BMW', price: 60000000, image: 'assets/images/bmw.webp' },
    { name: 'Chevrolet', price: 50000000, image: 'assets/images/chevrolet.webp' },
    { name: 'Citroen C3', price: 20000000, image: 'assets/images/citroen.webp' },
    { name: 'Ford F-150', price: 45000000, image: 'assets/images/ford_f-150.webp' }
  ];

  filteredAutos() {
    return this.autos.filter(auto =>
      auto.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
