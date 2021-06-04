import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.getUsuarios().then( usuarios =>{
      console.log(usuarios);
    });
    // const promesa = new Promise( ( resolve, reject ) => {
    //   if(false){
    //     resolve('TODO OK')
    //   }else{
    //     reject('TODO KO');
    //   }
    // });

    // promesa.then( (mensaje) =>{
    //   console.log('TERMINE PROMESA', mensaje)
    // }).catch(error => console.log("Error en la promesa", error));

    // console.log('FIN INIT')
  }

  getUsuarios() {
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users').then( res => res.json()).then( body => resolve(body.data)) 
    });
  };

}
