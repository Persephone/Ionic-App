import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private camera: Camera) { }

  image: any = '';
  async openCam() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    try {
      const imageData = await this.camera.getPicture(options);
      console.log(imageData);
      this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      console.log(this.image);
    } catch (err) {
      alert('error ' + JSON.stringify(err));
    }
  }
}
