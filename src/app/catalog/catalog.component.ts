import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Produit {
  id: number,
  nom: string,
  prix?: number,
  promotion?: number
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {

  produits: Produit[] = [
    { id: 1, nom: 'Produit 1' },
    { id: 2, nom: 'Produit 2', prix: 200 },
    { id: 3, nom: 'Produit 3', promotion: 0.3 },
    { id: 4, nom: 'Produit 4', prix: 400, promotion: 0.4 },
    { id: 4, nom: 'Produit 4', prix: 500 },
  ]

  ProduitSansPrix() {
    return this.produits.filter(p => !p.prix)
  }

  ProduitEnPromotion() {
    return this.produits.filter(p => p.promotion)
  }

  ProduitSansPromotionAvecPrix() {
    return this.produits.filter(p => p.prix && !p.promotion)
  }

}
