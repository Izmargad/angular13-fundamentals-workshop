import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const BASE_URL = 'http://localhost:3000ß';
@Injectable({
  providedIn: 'root'
})
// typed as array of course objects 
// moved into a service from course component
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getURL()); // WHERE IS THIS SERVICE
  }

find(id) {
    return this.http.get(this.getURLWithID(id));
  }

create(course: Course) {  
    return this.http.post(this.getURL(), course); 
  } 

update(course: Course) {
    return this.http.patch(this.getURLWithID(course.id), course);
  } 

delete(id) { 
  return this.http.delete(this.getURLWithID(id));
 }



  private getURL() {
    return `${BASE_URL}/${this.model}`;
  }

  private getURLWithID(id) {
    return `${this.getURL()}/${id}`;
  }
  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 12,
      favorite: true
    },
    {
      id: '2',
      title: 'JavaScript The HARDEST PARTS EVER!',
      description: 'Learn the JavaScript like a pro! with Will',
      percentComplete: 98,
      favorite: true
    },
    {
      id: '3',
      title: 'Rapid Application Development Patterns',
      description: 'IZZI THIS MUST BE DONE BY 3:30 OR ELSE! Dont forget!',
      percentComplete: 98,
      favorite: true
    }
  ];
}
