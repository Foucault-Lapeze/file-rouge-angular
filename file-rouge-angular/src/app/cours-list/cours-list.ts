import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourService, Cours } from '../services/cour';

@Component({
  selector: 'app-cours-list',
  standalone: false,
  templateUrl: './cours-list.html',
  styleUrls: ['./cours-list.css'],
})
export class CoursListComponent implements OnInit {
  coursList: Cours[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private courService: CourService, private router: Router) {}

  ngOnInit(): void {
    this.loadCours();
  }

  loadCours(): void {
    this.courService.getCours().subscribe({
      next: (data) => {
        this.coursList = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement des cours.';
        this.isLoading = false;
      },
    });
  }

  voirDetail(id: number): void {
    this.router.navigate(['/cours', id]);
  }

  modifierCours(id: number): void {
    this.router.navigate(['/modifier-cours', id]);
  }

  supprimerCours(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce cours ?')) {
      this.courService.deleteCours(id).subscribe({
        next: () => {
          this.loadCours(); // recharge la liste après suppression
        },
        error: () => {
          alert('Erreur lors de la suppression.');
        },
      });
    }
  }
}
