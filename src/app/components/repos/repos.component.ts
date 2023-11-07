import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent {
  @Input() repos: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // console.log('before repos : ', this.repos);
    // this.apiService.getRepos('oceakun').subscribe({
    //   next: (reposData: any) => {
    //     this.repos = reposData; // Assign the fetched repos data to the 'repos' property
    //     console.log('after repos : ', this.repos);
    //   },
    //   error: (error) => {
    //     console.error('Error fetching repos data:', error);
    //   },
    // });
  }
}