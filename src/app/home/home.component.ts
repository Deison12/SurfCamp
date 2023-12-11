import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
}


