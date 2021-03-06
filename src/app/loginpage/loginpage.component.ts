import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  providers: [UserService]
})
export class LoginpageComponent implements OnInit {
  userId;
  input;
  pmovies;
  title: string = 'Web';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: ''
      // email: ''
    };
    this.pmovies = {
      title: '',
      description: ''
    };
  }

  onRegister() {
    this.userService.registerNewUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' has been created');
      },
      error => {
        console.log('error', error);
      }
    );
  }

  onLogin() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' has been logged in');
        localStorage.setItem('access_token', response.token);
        localStorage.setItem('user_id', response.id);
        location.reload();
      },
      error => {
        console.log('error', error);
      }
    );
  }

  onLogout() {
    this.userId = {
      "key": localStorage.getItem('user_id')
    }

    console.log(this.userId);
    this.userService.logoutUser(this.userId).subscribe(
      response => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_id');
        location.reload();
      },
      error => {
        console.log(error);
      }
    )
    // localStorage.removeItem('access_token');
    // location.reload();
  }

  getUserData() {
    this.userService.getUsers(localStorage.getItem('user_id')).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log('error', error);
      }
    );
  }
  getMovieData() {
    this.userService.getMovies().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log('error', error);
      }
    );
  }
  postMovieData() {
    this.userService.postMovies(this.pmovies).subscribe(
      response => {
        console.log('Done');
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
