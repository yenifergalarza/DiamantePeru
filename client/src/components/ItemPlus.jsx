import React from "react";
import {  useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import arrJoyas from '../data';

const ItemPlus = () =>{
    let { numero } = useParams();
    let history = useHistory();
    console.log(numero);
    
    const elem = arrJoyas.find(e => e.CÓDIGO === numero);
    console.log(elem)

    return(
        <div className="fondo-item-plus">
        <div className="container  text-left vh80 vh80-xs">
            <div className="row align-items-center h100 ">
                <div className="col-md-6 col-sm-12">
                    <img className=" itempluss  img-fluid p-4 h-sm-50 w-100" src={elem.imagen} alt="joyas"/>
                </div>
                <div className="col-md-6  col-sm-12  h-100 h-sm-50 p-4 container-each-jewerly  allCenter">
                    <div className="container container-fluid flex flex-column geosansLight">
                        <h1> MODELO {elem.CÓDIGO} </h1>
                        <div className="container-text-jewerly">
                            <p className="text-center">{elem.DESCRIPCIÓN}</p> 
                        <a href="http://" className="nav-link option-menu raleway-medium-italic">Asesoría Aquí ></a>
                         
                        
                        </div>
                    </div>
                </div>
             <i onClick={()=>{history.goBack()}} className="fas fa-chevron-left arrowGoback" aria-hidden="true"></i> 
            </div>
        </div>
        </div>
    )
};
export default ItemPlus;