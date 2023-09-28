import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
constructor(private sanitizer: DomSanitizer) {}
  transform(url: string): SafeResourceUrl {
    console.log('Original url:', url)
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log('transformer SafeUrl:', safeUrl)
    return safeUrl
  }
}
