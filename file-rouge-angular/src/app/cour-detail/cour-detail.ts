import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourService } from '../services/cour';

interface Cours {
  id: number;
  nom: string;
  description: string;
}

@Component({
  selector: 'app-cour-detail',
  standalone: false,
  templateUrl: './cour-detail.html',
  styleUrl: './cour-detail.css',
})
export class CourDetail implements OnInit {
  coursId!: number;
  cour?: Cours;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private courService: CourService
  ) {}

  ngOnInit(): void {
    // Récupérer l'id depuis l'URL
    this.coursId = Number(this.route.snapshot.paramMap.get('id'));

    // Charger les détails du cours via le service
    this.courService.getCoursById(this.coursId).subscribe({
      next: (data) => {
        this.cour = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement du cours.';
        this.isLoading = false;
      },
    });
  }
}
