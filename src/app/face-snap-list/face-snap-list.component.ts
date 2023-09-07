import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[]

  ngOnInit(): void {
      this.faceSnaps = [
        {
        title: 'Archibald',
        description: 'Un lama cool !',
        createDate: new Date(),
        snaps: 6,
        imageUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bad-hair-day-doty-johnson.jpg',
        hasUserSnapped: false,
        buttonHeart: "🤍",
        location: "Colombie"
        },
        {
          title: 'Elon Musk',
          description: 'Un escroc très riche...',
          createDate: new Date(),
          snaps: 6,
          imageUrl: 'https://nypost.com/wp-content/uploads/sites/2/2022/04/elon-musk-12.jpg?quality=75&strip=all',
          hasUserSnapped: false,
          buttonHeart: "🤍"
        },
        {
          title: 'Keanu Reeves',
          description: 'Un chic type.',
          createDate: new Date(),
          snaps: 255,
          imageUrl: 'https://media.vanityfair.fr/photos/6177dfd031d1c07fb8d3d13f/16:9/w_2560%2Cc_limit/Keanu-Reeves-Rolex.jpg',
          hasUserSnapped: false,
          buttonHeart: "🤍",
          location: "Hollywood"
        },
        {
          title: 'Sarim',
          description: 'Un type déçu.',
          createDate: new Date(),
          snaps: 18,
          imageUrl: 'https://cdnimpuls.com/o.anabel.al/media3/-785-0-5eee568fcea1b.jpg',
          hasUserSnapped: false,
          buttonHeart: "🤍"
        },
        {
          title: 'Hide the Pain Harold',
          description: 'Au bout de sa vie !',
          createDate: new Date(),
          snaps: 25,
          imageUrl: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/caa/091/77eb655d47a443e5a279f3e529.jpg',
          hasUserSnapped: false,
          buttonHeart: "🤍"
        },
        {
          title: 'Kayode Ewumi',
          description: 'Roll safe',
          createDate: new Date(),
          snaps: 25,
          imageUrl: 'https://i.kym-cdn.com/entries/icons/facebook/000/022/138/highresrollsafe.jpg',
          hasUserSnapped: false,
          buttonHeart: "🤍"
        }
      ]
  }
}
