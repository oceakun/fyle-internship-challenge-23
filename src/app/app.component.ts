import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() user: any;
  @Input() repos: any;
  @Input() msgVal: string = 'Please enter a username to get started !';
  @Input() pageNumber: number = 1;
  usernameEntered: any;
  showLoader: boolean = false;
  showBioLoader: boolean = false;
  showReposLoader: boolean = false;
  showContent: boolean = false;
  showMsg: boolean = true;

  onPageNumberChange(event: number) {
    const newValue = event;
    this.pageNumber = newValue;
    this.getRepoData(this.usernameEntered.username, this.pageNumber);
  }

  usernameForm = this.formBuilder.group({
    username: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  onSubmit(): void {
    this.usernameEntered = this.usernameForm.value;
    this.usernameForm.reset();
    this.showMsg = false;
    this.showBioLoader = true;
    this.showReposLoader = true;
    this.showContent = false;
    this.getUserData(this.usernameEntered.username);
    this.getRepoData(this.usernameEntered.username, this.pageNumber);
  }

  getRepoData(username: string, pageNumber: number): void {

    this.apiService.getRepos(username, pageNumber).subscribe({
      next: (reposData: any) => {
        this.repos = reposData;
        this.showReposLoader = false;
      },
      error: (error) => {
        console.error('Error fetching repos data:', error);
        this.msgVal ='Error!! Please check the validity of username entered or the status internet connectivity.';
        this.showMsg = true;
        this.showBioLoader = false;
        this.showReposLoader = false;
        this.showContent = false;
      },
    });
  }

  getUserData(username: string): void {
    this.showReposLoader = true;

    this.apiService.getUser(username).subscribe({
      next: (userData: any) => {
        this.user = userData;
        this.showBioLoader = false;
        this.showContent = true;
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
        this.msgVal ='Error!! Please check the validity of username entered or the status internet connectivity.';

        this.showMsg = true;
        this.showBioLoader = false;
        this.showReposLoader = false;
        this.showContent = false;
      },
    });
  }
}
