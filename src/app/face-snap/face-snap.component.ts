import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {

  }

  onSnap() {
    if(this.faceSnap.hasUserSnapped){
      this.faceSnapService.snapById(this.faceSnap.id, 'unsnap')
      this.faceSnap.buttonHeart = "🤍"
    }
    else {
      this.faceSnapService.snapById(this.faceSnap.id, 'snap')
      this.faceSnap.buttonHeart = "❤️"
    }
    this.faceSnap.hasUserSnapped = !this.faceSnap.hasUserSnapped;
  }
}
