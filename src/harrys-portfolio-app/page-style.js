/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import "../../node_modules/@polymer/polymer/polymer-element.js";
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="page-style">
  <template>
    <style>
    .wrapper{
        width:75%;
        margin: 0 auto;
      }
    
      .clearfix{
        position:fixed;  
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-wrap: no-wrap;
        align-items: stretch;
        justify-content: flex-end;
        height:50px;
        background-color: black;
        opacity: 0.7;    
      }

      .clearfix paper-button{     
        color:white;    
        display: flex;     
        justify-content: center;    
        text-transform: capitalize; 
      }

      #main{
        margin-right:auto;
      }

      .botborder{
        border: none;
        position: relative;   
      }
        
      .botborder:hover{
        border: none;
      }
      .botborder::after{
        content: '';
        position: absolute;
        width: 0px;
        height: 2px;
        left: 50%;
        bottom:0;
        background-color: white;
        transition: all ease-in-out .2s;
      }
      .botborder:hover::after{
        width:100%;
        left: 0;
      }   
      
   
      
      .main-view{
        height:100vh;    
        background-image: url(./images/landing.png);
        background-repeat: no-repeat;
        background-size:cover;
        background-position: center center;  
      } 
      
      header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;        
        text-align: center;
        width:75%;
        margin: 0 auto;
      }

      header h1{
        color: #e4e4e4;
        font-size: 48px;
        margin-top: 150px;
        flex-grow: 1;
        animation: text 4s 1;
      }

      @keyframes text{

        0%{
          color:black;
          margin-top: -5px;
          margin-left: -400px;
        }
        
        25%{
          color:grey;
          margin-left: -400px;
          margin-top: 150px;
        }
        60%{
          color:grey;
          margin-left:100px;
          margin-top:150px;
        }
      }

      @keyframes colorchange {
        0%{
          opacity:0;
          margin-top:175px;
        }
        50%{
          opacity:0;
        }
        
        60%{
          opacity:0.1;
          margin-top:175px;
        }

        80%{
          opacity: 0.3;
        }

        90%{opacity:0.5;}
       
       
      

      }
      .main-view p{
        color:#e4e4e4;
        font-size: 20px;
        line-height:30px;
        width: 40%;    
        flex-grow: 1;
        position: absolute;
        margin-top: 125px;
        animation: colorchange 4s 1;
      }

      header a{
        color: #FF4A5E;
        text-decoration:none;
      }

      .about-me{
        height: 100vh;
        display:flex;
        align-items:center;
      }

      .about-me-text{
        flex-basis:50%;
        color:black;
        line-height: 33px;
      }

      .about-me-img{
        flex-basis:50%;
        display:flex;
        justify-content:flex-end;
      }

      .about-me-img img{
        border-radius: 20px;
        height: 600px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      .work{
        text-align:center;
        width: 100%;
        height: 100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }

      .work-images {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        text-align: center;
      }

  .work-card{
        width: 45%;
        height: 457px;
        margin: 1%;
    
      }


      .work-image{
        height: 85%;
        width: 100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        position:relative;
  
      }

      .background{
        background-image: url("./images/projectOne.PNG");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter:blur(0px);
        -webkit-filter:blur(0px);
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
        transition:1s ease-in-out;
      }

      .work-image p{
        padding: 0 16px;
      }

      #content{
        display:none;
        animation: infotext 1s 1;
        font-weight: bold;
      }

      @keyframes infotext{
        0%{
          opacity:0;
        }

        20%{
          opacity: 0.2;
        }

        50%{
          opacity: 0.4;
        }

        80%{
          opacity: 0.6;
        }

        100%{
          opacity:1;
        }
      }
    
   

      paper-button.custom {
        --paper-button-ink-color: var(--paper-pink-a200);
        /* These could also be individually defined for each of the
          specific css classes, but we'll just do it once as an example */
        --paper-button-flat-keyboard-focus: {
          background-color: var(--paper-pink-a200) !important;
          color: white !important;
        };
        --paper-button-raised-keyboard-focus: {
          background-color: var(--paper-pink-a200) !important;
          color: white !important;
        };
      }
      paper-button.custom:hover {
        background-color: var(--paper-indigo-100);
      }
      paper-button.pink {
        color: var(--paper-pink-a200);
  
      }
      paper-button.indigo {
        background-color: var(--paper-indigo-500);
        color: white;
        --paper-button-raised-keyboard-focus: {
          background-color: var(--paper-pink-a200) !important;
          color: white !important;
        };
      }
      paper-button.green {
        background-color: var(--paper-green-500);
        color: white;
      }
      paper-button.green[active] {
        background-color: var(--paper-red-500);
      }
      paper-button.disabled {
        color: white;
        background-color: bisque;
      }



      

  

      #FlocknSave{
    
       
      }

      #secondWork {
        background-image: url("./images/02.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      #thirdWork {
        background-image: url("./images/03.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      #fourthWork {
        background-image: url("./images/04.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .work img:hover{

      }

     .contact-me{
       height:100vh;
       display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
     }

     .contact-me-form{
      display: flex;
      flex-direction: column;
     }

      .contact-me h1{
        color: #13A3FD;
      }


      .form-input{
        width: 500px;
      }
  
      

      .contact-me-form paper-button{
        align-self: center;
      }

      footer{
        text-align: center;
        margin: 60px 0;
      }

      footer p{
        color: #404348;
      }


      @media only screen and (max-width: 991px){
        header p{
          width: 100%;
        }
        .work a img{
          margin: 2%;
          width: 96%;
        }
        .work2 a img{
          margin: 2%;
          width: 96%;
        }
      }

      @media only screen and (max-width: 768px){
        header{
          width: 96%;
          margin: 30px auto 100px auto;
          text-align: left;
        }
    
        .iAm{
          visibility: hidden;
        }
        footer{
          text-align:left;
          width: 90%;
          margin: 60px auto;
        }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);