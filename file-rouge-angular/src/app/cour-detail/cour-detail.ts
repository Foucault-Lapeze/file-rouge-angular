import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourService, Cours } from '../services/cour';

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
    this.coursId = Number(this.route.snapshot.paramMap.get('id'));

    this.courService.getCoursById(this.coursId).subscribe({
      next: (data) => {
        this.cour = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement du cour.';
        this.isLoading = false;
      },
    });
  }
}
