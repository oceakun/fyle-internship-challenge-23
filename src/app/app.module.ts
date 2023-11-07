import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { BioComponent } from './components/bio/bio.component';
import { MainComponent } from './components/main/main.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ReposComponent } from './components/repos/repos.component';
import { MessagesComponent } from './components/messages/messages.component';
import { BioLoaderComponent } from './components/bio-loader/bio-loader.component';
import { ReposLoaderComponent } from './components/repos-loader/repos-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    MainComponent,
    PaginatorComponent,
    ReposComponent,
    MessagesComponent,
    BioLoaderComponent,
    ReposLoaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule , NgxSkeletonLoaderModule,],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
