import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DietsService } from 'src/app/services/diets.service';



@Component({
  selector: 'app-login',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent {
  dietForm: FormGroup;


  catalogoComidas: any[] = []
  private catalogoDietas: any[] = []

  constructor(private formBuilder: FormBuilder, private DietsService: DietsService) {
    this.dietForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      comidas: ['', Validators.required],
      nutriologo: ['', Validators.required],
    })
    ;
  }

  //private tieneComidasRegistradas: false

  
   
  ngOnInit(): void {
    this.DietsService.getAllMeals(1).subscribe(response => {
        this.catalogoComidas.push(response);
    }, error => {
      console.error(error);
    });
  }

  onSubmit(): void {
    console.log(this.catalogoComidas)
    if (this.dietForm.valid) {
      console.log("Noseee")
      const nombre = this.dietForm.value.nombre;
      let nutriologo = this.dietForm.value.nutriologo;
      nutriologo = 1
      console.log(nombre, nutriologo)
      this.DietsService.createDiet(nombre, nutriologo).subscribe(response => {
          console.log(response);
        }, error => {
          console.error(error);
        });
    };
    }
  }

