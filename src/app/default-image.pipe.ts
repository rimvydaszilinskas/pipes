import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, fallback: string, forceHttps: boolean = false): any {
    let image = '';

    if (value && (value.startsWith('http://') || value.startsWith('https://'))) {
      image = value;
    } else {
      image = fallback;
    }

    if (image.startsWith('https://') || image.startsWith('http://')) {
      if (forceHttps) {
        if (image.indexOf('https') === -1) {
          image = image.replace('http', 'https');
        }
      }
      return image;
    }

    return 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Sad_face.svg';
  }

}
