import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  ngOnInit(): void {

  }

  onSnap() {
    if(this.faceSnap.hasUserSnapped){
      this.faceSnap.snaps--;
      this.faceSnap.buttonHeart = "🤍"
    }
    else {
      this.faceSnap.snaps++;
      this.faceSnap.buttonHeart = "❤️"
    }
    this.faceSnap.hasUserSnapped = !this.faceSnap.hasUserSnapped;
  }
}
