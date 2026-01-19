import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
  protected readonly route = inject(ActivatedRoute);
  protected readonly router = inject(Router);

  handleNavigation(url: string) {
    this.router.navigateByUrl(url);
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.route.snapshot;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.data;
        }),
      )
      .subscribe((data) => {
        console.log('title:', data['title']);
      });
  }
}
