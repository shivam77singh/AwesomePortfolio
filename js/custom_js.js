body{
    overflow-x: hidden;
}

.change-bg{
    background-color: rgb(24, 24, 24);
}

.navbar-brand img{
    height: 4rem;
}
.navbar{
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: .1rem;
}
.nav-item{
    padding: 1rem;
}

.navbar-nav{
    display: none;
}


.hamburger,.navbar-toggler{
    width: 3rem;
    height: 3rem;
    background-color:blue;
    border-radius: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
}
.change-nav-display{
    display: flex;
    transition: all 0.8s ease;
    animation: animate1 0.7s ease;
}
@keyframes animate1{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
    
}

/* @media only screen and (min-width: 1000px){ */
    .circle{
        position: fixed;
        background-color: blue;
        z-index: -1;
        clip-path: circle(10px at 96% 7%);
        -webkit-clip-path: circle(10px at 96% 7%);
        transition: all 1s ease;
        top: 0;
        width: 100%;
        height: 100vh;
    }

    
    .nav-link{
        color: white!important;
    }
/* } */


.lines{
    width:1.4rem;
    height: 0.2rem;
    background-color: white!important;
    margin: 2px;
    transition: all 0.5s ease;
}







/* Rotate first bar */

.change #line1 {
    /* -webkit-transform: rotate(-45deg) translate(-9px, 6px) ; */
    transform: translateY(8px) rotate(-45deg);
  }
  
  /* Fade out the second bar */
  .change #line2 {
    opacity: 0;
  }
  
  /* Rotate last bar */
  .change #line3 {
    /* -webkit-transform: rotate(45deg) translate(-8px, -8px) ; */
    transform: translateY(-8px) rotate(45deg)  ;
  }
  .change{
    transform: rotate(270deg);
}

.cunt{
    width: 100%;
    height: 200vh;
    background-color: rgb(172, 172, 238);
}


.para{
    font-family: 'Bungee Inline', cursive;
    color: black!important;
    font-size: 80px;
    pointer-events: none;
}
.make-white{
    animation: animate2 1s ease;
    color: white;
}


.mouse-cursor{
    position: absolute;
    width: 170px;
    height: 170px;
    border-radius: 100px;
    background:rgba(25, 0, 255, 0.4);
    backdrop-filter: blur(40px);
    z-index: -1;
    transform: translate(-50%, -50%);
    transition: all 0s ease-in-out;
    pointer-events: none;
}



.developer{
    /* border: 2px solid black; */
    font-family: 'Bungee Inline', cursive;
    position: absolute;
    top: 5%;
    left: 10%;
    z-index: -1;
    font-size: 12rem;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 20px 20px 20px rgba(175, 175, 175, 0.5);
    transition: all 1.4s ease;
    width: 100%;
    /* border: 2px solid black; */
    /* color: rgba(0, 13, 199, 0.7);
    text-shadow: 10px 10px 7px rgba(100, 102, 255, 0.5); */
    
}

.nav-link{
    transition: all 0.7s ease-in-out;
}

.link-grow{
    transform: scale(1.4);
    transition: all 0.7s ease;
}

.head{
    pointer-events: none;
    transition: all 1s ease;
}









/* about styling starts here */


.bar{
    background-color:white;
    width: 3rem;
    height: 2px;
}
.under-text{
    display: flex;
    align-items: center;
    /* justify-content: center; */
}


.type-text{
    /* border: 2px solid black; */
    height: 3rem;
}

.my-btn{
    color: white!important;
    background:rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
}
.my-btn a{
    text-decoration: none;
    color: white;
}





/* services styling starts here */

.services{
    background: url('../bg/1.jpg');
    background-attachment: fixed;
    width: 100%;
    /* -webkit-filter: grayscale(100%); 
    filter: grayscale(100%); */
    color: white!important;
}
.cards{
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    height: 14rem;
    transition: all 0.5s ease;
}

.fas{
    font-size: 40px;
    color: rgb(255, 255, 255);
}
.cards:hover{
    /* background-color: rgba(28, 0, 187, 0.2); */
    backdrop-filter: blur(0px);
    /* background: transparent; */
    transform: scale(1.04);
    cursor: pointer;
}






/* media queries */

@media only screen and (min-width: 725px) and (max-width:1900px){
    .about{
        margin-top: 150px!important;
        /* border: 2px solid black; */
        background:rgba(107, 87, 255, 0.2);
        backdrop-filter: blur(40px);
        color: white!important;
    }
}


@media only screen and (max-width: 1200px){
    .para{
        font-size: 60px;
    }
    .developer{
        font-size: 9rem;
        left: 20%;
    }
}  





@media only screen and (max-width: 1000px){
    .hamburger{
        display: none;
    }
    /* .circle{
        display: none;
    } */
    .navbar-nav{
        display: flex;
    }
    .navbar{
        background-color: blue!important;
    }
    .circle.open{
        width: 100%;
        height: 100vh;
        clip-path: circle(705px at 90% -10%);
        -webkit-clip-path: circle(705px at 90% -10%);
    }
    
    .mouse-cursor{
        display: none;
    }
    .developer{
        font-size: 8rem;
        left: 20%;
        top: 35%;
        text-shadow: 20px 20px 20px rgba(134, 134, 134, 0.7);
    }
    .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* margin-top: 4rem; */
    }
    .info1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }
    .info1 p{
        text-align: center;
    }
    
    
    
    
}




@media only screen and (min-width: 1000px){
    .circle.open{
        width: 100%;
        height: 100vh;
        clip-path: circle(1040px at 90% -10%);
        -webkit-clip-path: circle(1040px at 90% -10%);
    }
}

@media only screen and (max-width:800px){
    .developer{
        font-size: 6rem;
    }
}


@media only screen and (max-width: 725px){
    .circle{
        display: none;
    }
    /* .white{
        color: black!important;
    } */
    .about{
        backdrop-filter: blur(40px);
        background-color: rgba(0, 0, 255, 0.9);
        color: white;
    }
    .developer{
        font-size: 5rem;
        color: rgba(255, 255, 255, 0.7);
        text-shadow: 20px 20px 20px rgba(134, 134, 134, 0.7);
    }
    
}



.home-image{
   opacity: 0.9;
}
.info{
    /* display: flex;
    flex-direction: column; */
    /* border: 2px solid black; */
}
.info1,.cards ul{
    /* margin-top: 1rem; */
    /* border: 2px solid black; */
    margin-bottom: 2rem;
    /* margin-left: 1rem; */
    width: 25rem;
    letter-spacing: 0.02rem;
    line-height: 1.4rem;
    font-family: 'Roboto Mono', sans-serif;
    
}
.cards>h5{
    letter-spacing: 0.02rem;
    line-height: 1.4rem;
    font-family: 'Roboto Mono', sans-serif;
    font-weight: 600;
}
.info1>p{
    font-size: 14px;
}
