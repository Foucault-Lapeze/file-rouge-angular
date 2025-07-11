import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourService, Cours } from '../services/cour';

@Component({
  selector: 'app-add-cour',
  standalone: false,
  templateUrl: './add-cour.html',
  styleUrl: './add-cour.css'
})
export class AddCour implements OnInit {
  courForm!: FormGroup;
  isSubmitting = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private courService: CourService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.courForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.courForm.invalid) {
      this.courForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const nouveauCours: Cours = {
      id: 0, 
      nom: this.courForm.value.nom,
      description: this.courForm.value.description
    };

    this.courService.addCours(nouveauCours).subscribe({
      next: () => {
        alert('Cours ajouté avec succès !');
        this.router.navigate(['/cours']);
      },
      error: () => {
        this.errorMessage = 'Erreur lors de l\'ajout du cours.';
        this.isSubmitting = false;
      }
    });
  }
}
