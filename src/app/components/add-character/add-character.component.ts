import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CharacterService } from 'src/app/serivces/character.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {

  submited: boolean = false;
  success: boolean = false;
  fail: boolean = false;


  profileForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });


  constructor(private charService: CharacterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.info("submited");

    console.log(this.profileForm.value);

    let observable = this.charService.create(this.profileForm.value);
    this.submited = true;

    observable.subscribe({
      next: (v) => {
        this.success = true;

        // Show success message for 2.5sec
        const contador = timer(2500);
        contador.subscribe(() => this.success = false)

        // Make submit button available again
        this.submited = false
        console.log(v);
      },
      error: (e) => {
        this.fail = true;

        // Show fail message for 2.5sec
        const contador = timer(2500);
        contador.subscribe(() => this.fail = false)

        // Make submit button available again
        this.submited = false
        console.log(e)
      },
      complete: () => {
        console.log("complete!")
      }

    })

  }

  get title() { return this.profileForm.get('title')?.value; }

  get description() { return this.profileForm.get('description')?.value; }

  // /**
  //  * Show success message
  //  */
  // showSuccessMessage() {

  // }

}
