import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})

/** 
 * This component will render the movie info dialog
 * @export
 * @class MovieInfoComponent
 * @implements {OnInit}
 * @example <app-movie-info></app-movie-info>
 * @see MAT_DIALOG_DATA
 */
export class MovieInfoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      content: string;
    }
  ) { }

  ngOnInit(): void { }
}
