import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainNavComponent],
  selector: 'expnx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'e-commerce';
}
