import { Component, OnInit } from '@angular/core';
import { BandService } from '../../services/band.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  constructor(private _bandService: BandService) { }

  band;

  ngOnInit() {

  	 this._bandService.getBand().subscribe(data => console.log(data));

  }

}
