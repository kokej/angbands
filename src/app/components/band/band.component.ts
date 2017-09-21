import { Component, OnInit } from '@angular/core';
import { BandService } from '../../services/band.service';
import { YoutubeService } from '../../services/youtube.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  results;
  band;

  constructor(
    private _bandService: BandService,
    private _youtubeService: YoutubeService,
    private _sanitation: DomSanitizer
  ) { }

  ngOnInit() {
 	  this._bandService.getBand().subscribe(data => console.log(data));
    this._youtubeService.search().subscribe(
      data => this.results = this._sanitation.bypassSecurityTrustHtml(data[0].player.embedHtml)
    ); 
  }

}
