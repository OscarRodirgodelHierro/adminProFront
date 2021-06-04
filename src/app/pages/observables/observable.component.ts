import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styles: []
})
export class ObservableComponent implements OnDestroy {

  public intervalSub: Subscription;

  constructor() { 
   
    // this.devuelveObservable().pipe( retry(1) )
    // .subscribe(
    //   valor => console.log('SUBs', valor),
    //   (error) => console.warn(error),
    //   () => console.info('Observer Obs terminado')
    // );

    this.intervalSub = this.devuelveInterval().subscribe(console.log);
  }

  ngOnDestroy(): void {
    
    this.intervalSub.unsubscribe();
  }

  public devuelveInterval(): Observable<number>{
    return interval(100).pipe(
      // take(10), 
      map(valor => valor +1),
      filter(res => res % 2 === 0)
    );
  }

  devuelveObservable(): Observable<number> {
    let i = -1;
    
    return new Observable<number>( observer => {
      
      const interval = setInterval( () => {
        i++;
        observer.next(i);

        if( i === 4){
            clearInterval( interval );
            observer.complete();
        }

        if ( i===2 ) {
          i = 0;
          observer.error('i llego a 2');
        }
      },1000)
    });

  }
  

}
