import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent implements OnInit {
  @Output() terminoEvent = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder: string | any;
  termino : string = ''
  debouncer : Subject<string> = new Subject()
  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => this.onDebounce.emit( valor ))
    
    
  }

  onSubmit(){
    this.terminoEvent.emit( this.termino )
  }

  onPress(){
  this.debouncer.next( this.termino )    
  }
}
