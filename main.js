canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.



background_image = "Tortugayarena.jpg";

Tortuga_image = "Tortuga.png";

Tortuga_x = 10;
Tortuga_y = 10;

function add(){
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src=background_image;

    Tortuga_imgTag= new Image();
    Tortuga_imgTag.onload = uploadTortuga;
    Tortuga_imgTag.src=Tortuga_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadTortuga(){
    ctx.drawImage(Tortuga_imgTag, Tortuga_x, Tortuga_y, 100, 90)
}

        function my_keydown(e)
        {
            keyPressed = e.keyCode;
            console.log(keyPressed);
                if(keyPressed=="38")
                {
                    up();
                }
                if(keyPressed=="40")
                {
                    down();
                }
                if(keyPressed=="37")
                {
                    left();
                }
                if(keyPressed=="39")
                {
                    right();
                }
        }       
    

    window.addEventListener("keydown", my_keydown)

    function up()
    {
        if(Tortuga_y >=0)
        {
            Tortuga_y = Tortuga_y - 10;
                uploadBackground();
                uploadTortuga();
        }
    }
    function down()
    {
        if(Tortuga_y <=500)
            {
                Tortuga_y = Tortuga_y + 10;
                    uploadBackground();
                    uploadTortuga();
            }
    }
    function right()
    {
        if(Tortuga_x <= 500)
            {
                Tortuga_x = Tortuga_x + 10;
                    uploadBackground();
                    uploadTortuga();
            }
    }
    function left()
    {
        if(Tortuga_x >= 0)
            {
                Tortuga_x = Tortuga_x - 10;
                    uploadBackground();
                    uploadTortuga();
            }
    }