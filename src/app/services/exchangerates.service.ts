import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ExchangeratesService {

  value: number;
  constructor() { }

  loadJSON(path, success, error)
  {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function()
      {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  if (success)
                      success(JSON.parse(xhr.responseText));
              } else {
                  if (error)
                      error(xhr);
              }
          }
      };
      xhr.open("GET", path, true);
      xhr.send();
  }

  getExchangeRateByPLN(currency) {
    this.value = 0;
    if(currency == 'USD'){
      this.loadJSON('http://free.currencyconverterapi.com/api/v5/convert?q=USD_PLN&compact=y',
         function(data) { this.value = parseFloat(data.USD_PLN.val); },
         function(xhr) { console.error(xhr); }
       );
       this.value = 3.69;
    }
    if(currency == 'EUR'){
      this.loadJSON('http://free.currencyconverterapi.com/api/v5/convert?q=EUR_PLN&compact=y',
         function(data) { this.value = data.EUR_PLN.val; },
         function(xhr) { console.error(xhr); }
       );
       this.value = 4.28;
    }
    return this.value;
  }
}
