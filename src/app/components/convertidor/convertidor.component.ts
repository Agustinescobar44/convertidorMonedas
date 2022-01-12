import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad= 0;
  tengo = 'USD';
  total = 0;
  quiero = 'USD';

  monedas: string[] = ['USD', 'EUR' , 'LIBRA']

  constructor() { }

  ngOnInit(): void {
  }

  convertir():void {
    if(this.quiero === this.tengo) {
      this.total = this.cantidad;
      return
    }
    switch (this.tengo) {
      case "USD":
        switch (this.quiero) {
          case "EUR":
            this.total = this.cantidad * 0.88
          break;
          case "LIBRA":
            this.total = this.cantidad * 0.73
          break;
        }
        break;
      case "EUR":
        switch (this.quiero) {
          case "USD":
            this.total = this.cantidad * 1.14
          break;
          case "LIBRA":
            this.total = this.cantidad * 0.83 
          break;
        }
      break;
      case "LIBRA":
        switch (this.quiero) {
          case "USD":
            this.total = this.cantidad * 1.36
          break;
          case "EUR":
            this.total = this.cantidad * 1.20
          break;
        }
      break;
    }
    
  }

}
