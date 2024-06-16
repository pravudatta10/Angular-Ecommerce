import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = "";
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  search(inputEl:HTMLInputElement){
    this.searchText=inputEl.value;
    this.searchTextChanged.emit(this.searchText)
  }
/* Another way to search using ViewChild // 
  @ViewChild('inputSearchText') searchInpEle:ElementRef
  search(){
    this.searchText=this.searchInpEle.nativeElement.value;
    this.searchTextChanged.emit(this.searchText)
  }*/
}
