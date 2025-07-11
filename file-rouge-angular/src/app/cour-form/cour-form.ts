import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourService, Cours } from '../services/cour';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cour-form',
  standalone: false,
  templateUrl: './cour-form.html',
  styleUrl: './cour-form.css',
})
export class CourForm implements OnInit {
  coursId!: number;
  courForm!: FormGroup;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private courService: CourService,
    private fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.coursId = Number(this.route.snapshot.paramMap.get('id'));

    this.courForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });

    this.courService.getCoursById(this.coursId).subscribe({
      next: (data) => {
        this.courForm.patchValue({
          nom: data.nom,
          description: data.description,
        });
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement du cours.';
        this.isLoading = false;
      },
    });
  }

  onSubmit(): void {
    if (this.courForm.invalid) {
      return;
    }

    const updatedCours: Cours = {
      id: this.coursId,
      nom: this.courForm.value.nom,
      description: this.courForm.value.description,
    };

    this.courService.updateCours(updatedCours).subscribe({
      next: () => {
        alert('Cours modifié avec succès !');
        this.router.navigate(['/cours']);
      },
      error: () => {
        alert('Erreur lors de la modification du cours.');
      },
    });
  }
}
