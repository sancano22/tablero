
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListaPictogramas} from '../ListaPictogramas';


//@angular/platform-browser

@Component({
  selector: 'app-pictogramas',
  templateUrl: './pictogramas.component.html',
  styleUrls: ['./pictogramas.component.css']
})
export class PictogramasComponent implements OnInit {

  direction = ""; 
  
  pictogramas=ListaPictogramas;
  lista:any;
  tablero=new Array();
  categoriaid:number;
  constructor(private route:ActivatedRoute) { }


  ngOnInit(): void {

      this.route.paramMap.subscribe(params=>{
      let categoria=Number(params.get("categoriaId"));
      console.log(categoria);
      this.lista=this.pictogramas.find(id =>id.id==categoria);
      this.categoriaid=categoria;       
      });

  }



  AgregarPizarra(event,imagen){
      
      this.tablero.push(imagen);

      console.log(this.tablero)
    

  }

}
