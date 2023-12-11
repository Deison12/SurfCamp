
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @ViewChild('scrollBtn') scrollButton!: ElementRef;
  titulo= "SurfVibesCamp";

  VerMasBlog1(){
    alert("navegacion a blog");
  }
  

  // Función para desplazarse hacia arriba suavemente
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Muestra u oculta el botón según la posición de desplazamiento
  showScrollButton() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPos > 20) {
      this.scrollButton.nativeElement.style.display = 'block';
    } else {
      this.scrollButton.nativeElement.style.display = 'none';
    }
  }

  // Escucha el evento de desplazamiento y actualiza la visibilidad del botón
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.showScrollButton();
  }
  showContent = false;
  showContentBtn = true;

  toggleContent() {
    this.showContent = !this.showContent;
    this.showContentBtn = false;
  }
  toogleContentM(){
    this.showContent = !this.showContent;
    this.showContentBtn = true;
  // this.scrollToTop();
  }
  showContent2 = false;
  showContentBtn2 = true;
  
  toggleContent2() {
    this.showContent2 = !this.showContent2;
    this.showContentBtn2= false;
  }
  toogleContentM2(){
    this.showContent2 = !this.showContent2;
    this.showContentBtn2= true;
  // this.scrollToTop();
  }
}

