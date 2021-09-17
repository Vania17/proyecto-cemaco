

const getServer = (opc,divRender) => {

    const data = new FormData();
    data.append('opc',opc);

    fetch("api.php",{
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
    
        response.forEach(r => {
            const producto = `<div class="hardware-store__item">
                    <div class="hardware-store__item-img">
                        <img src="${r.img}" alt="">
                        <svg class="svg-icon-wishlist">
                            <use xlink:href="#svg-icon-wishlist">
                                <svg id="svg-icon-wishlist" viewBox="0 0 32 32">
                                    <title>Wishlist</title>
                                    <path fill="currentColor" d="M29.5,4.6c-1.7-1.8-3.9-2.8-6.4-2.8c-1.8,0-3.5,0.6-5,1.7c-0.8,0.6-1.4,1.3-2,2.1c-0.6-0.8-1.3-1.5-2-2.1             c-1.5-1.2-3.2-1.7-5-1.7c-2.5,0-4.7,1-6.4,2.8C0.9,6.3,0,8.8,0,11.4c0,2.7,1,5.2,3.2,7.8c1.9,2.3,4.7,4.7,7.9,7.5l0,0             c1.1,0.9,2.3,2,3.6,3.1c0.3,0.3,0.8,0.5,1.2,0.5c0.5,0,0.9-0.2,1.2-0.5c1.3-1.1,2.5-2.2,3.6-3.1c3.2-2.7,6-5.1,7.9-7.5             c2.2-2.6,3.2-5.1,3.2-7.8C32,8.8,31.1,6.3,29.5,4.6z">
                                    </path>
                                </svg>
                            </use>
                        </svg>
                    </div>
                    <div class="hardware-store__color">
                        <div class="white-color"></div>
                        <div class="yellow-color"></div>
                        <div class="orange-color"></div>
                        <div class="pink-color"></div>
                        <div class="green-color"></div>
                        <div class="purple-color"></div>
                    </div>
                    <p class="hardware-store__item-p">Black & Decker</p>
                    <h3>${r.nombre}</h3>
                    <div class="hardware-store__star">  
                    </div>
                    <div class="hardware-store__price">
                        <span>Desde</span>
                        <p>Q${r.precio}</p>
                    </div>
                    <div class="hardware-store__more">
                        <p>Envío gratis</p>
                        <button type="text">Ver más</button>
                    </div>
                </div>
            `;
    
            document.getElementById(divRender).innerHTML += producto;
            
        });

        let flechaIzq = "";
        let flechaDer = "";

        if(opc == "productos"){
            flechaIzq = "arrow-left"
            flechaDer = "arrow-right"
        }else{
            flechaIzq = "arrow-left2"
            flechaDer = "arrow-right2"
        }

        console.log("cargo imagenes..");
    
        new Glider(document.querySelector('#'+divRender), {
            slidesToShow: 6, //'auto',
            slidesToScroll: 2,
            itemWidth: 100,
            draggable: true,
            scrollLock: false,
            rewind: true,
            arrows: {
                prev: '#'+flechaIzq,
                next: '#'+flechaDer,
            },
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 6,
                        exactWidth: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 4,
                        exactWidth: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 4,
                        dots: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3,
                        dots: false,
                        arrows: false,
                        scrollLock: true
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                        scrollLock: true
                    }
                }
            ]
        });
    
    
    })

}


getServer("productos","productos");

getServer("herramientas","herramientas");


new Glider(document.querySelector('#brands'), {
    slidesToShow: 6, //'auto',
    slidesToScroll: 2,
    itemWidth: 150,
    draggable: true,
    scrollLock: false,
    dots: '',
    rewind: true,
    arrows: {
        prev: '#brand-left',
        next: '#brand-right'
    },
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToScroll: 'auto',
                itemWidth: 300,
                slidesToShow: 'auto',
                exactWidth: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToScroll: 4,
                slidesToShow: 4,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
                dots: false,
                arrows: false,
                scrollLock: true
            }
        }
    ]
});