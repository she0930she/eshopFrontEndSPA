import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // For demonstration purposes, let's assume a simple logic
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (isAuthenticated) {
    return true; // Allow access to the route
  } else {
    // Redirect the user to the login page or any other appropriate action
    // For simplicity, we are redirecting to the home page

    console.log("isAuthenticated: ", isAuthenticated)
    return false
  }


  return true;
};
