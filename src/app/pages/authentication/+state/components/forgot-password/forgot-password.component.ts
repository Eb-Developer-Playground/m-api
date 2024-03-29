import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../../../shared/animations/fade-in-up.animation';

@Component({
  selector: 'fury-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUpAnimation],
})
export class ForgotPasswordComponent implements OnInit {
  form = this.fb.group({
    email: [null, Validators.required],
  });

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
  ) {}

  ngOnInit() {}

  send() {
    this.router.navigate(['/login']);
  }
}
