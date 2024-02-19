import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../store/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'expnx-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user = toSignal(this.userService.getUser());

  profileForm!: FormGroup;

  get addresses() {
    return this.profileForm.get('address') as FormArray;
  }

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.profileForm = this.fb.group({
      id: new FormControl({ value: '', disabled: true }, Validators.required),
      name: this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
      }),
      email: '',
      phone: '',
      address: this.fb.group({
        city: ['', Validators.required],
        street: '',
        number: '',
        zipcode: '',
        geolocation: this.fb.group({
          lat: ['', Validators.required],
          long: ['', Validators.required],
        }),
      }),
      // address: this.fb.array([this.prepareAddressForm()]),
    });
    this.loadProfile();
  }

  prepareAddressForm() {
    return this.fb.group({
      city: ['', Validators.required],
      street: '',
      number: '',
      zipcode: '',
      geolocation: this.fb.group({
        lat: ['', Validators.required],
        long: ['', Validators.required],
      }),
    });
  }

  addAddress() {
    this.addresses.push(
      this.fb.group({
        city: ['', Validators.required],
        street: '',
        number: '',
        zipcode: '',
        geolocation: this.fb.group({
          lat: ['', Validators.required],
          long: ['', Validators.required],
        }),
      }),
    );
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  clearAddresses() {
    this.addresses.clear();
  }

  loadProfile() {
    this.userService.getUser().subscribe((user) => {
      this.profileForm.patchValue(user);
    });
  }

  updateProfile() {
    this.userService
      .updateUser(this.profileForm.getRawValue())
      .subscribe((user) => {
        console.log(user);
      });
  }

  toggleEdit() {
    this.profileForm.enabled
      ? this.profileForm.disable()
      : this.profileForm.enable();
  }
}
