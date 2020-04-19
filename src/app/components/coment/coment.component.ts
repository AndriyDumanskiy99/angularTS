import {Component, Input, OnInit} from '@angular/core';
import {ComentModel} from '../../Module/ComentModel';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent implements OnInit {
@Input()
coment: ComentModel;

  constructor() { }

  ngOnInit(): void {
  }

}
