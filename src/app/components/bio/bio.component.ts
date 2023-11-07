import { Component, OnInit ,Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  @Input() user: any;
  displayLocation = false;
  displayTwitter = false;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (!this.user.location)
    {
      this.displayLocation = false;
      }
    if (!this.user.twitter)
    {
      this.displayTwitter = false;
      }
  }
}