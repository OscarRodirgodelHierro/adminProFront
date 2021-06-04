import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';

  @ViewChild('txtProgress', null) txtProgress: ElementRef;

  @Output() cambioIncrementador: EventEmitter<number> = new EventEmitter();

  constructor() {
    //  console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);

  }

   ngOnInit() {
  //   console.log('progreso', this.progreso);
  //   console.log('Leyenda', this.leyenda);
   }

  onChanges(newValue: number) {

    // const elementHtml: any = document.getElementsByName('progreso')[0];

    // console.log(this.txtProgress);



    if (newValue >= 100) {
        this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elementHtml.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioIncrementador.emit(this.progreso);

  }

  cambiarValor(cantidad: number) {

    if (this.progreso >= 100 && cantidad > 0) {
        this.progreso = 100;
        return;
    }

    if (this.progreso <= 0 && cantidad < 0) {
        this.progreso = 0;
        return;
    }
    this.progreso += cantidad;
    this.cambioIncrementador.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

}
