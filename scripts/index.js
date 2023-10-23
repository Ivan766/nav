const cards = document.querySelectorAll(".BS_block");


for (let i = 0; i < cards.length; i++){
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
    const cardItem = this.querySelector(".BS_block_con");
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;

    cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 10 + 'deg) rotateY(' + (event.offsetX - halfHeight) / 10 + 'deg';
}

function stopRotate() {
    const cardItem = this.querySelector(".BS_block_con");
    cardItem.style.transform = 'rotate(0)';
}



const links = document.querySelectorAll(".BS_block_con");

$(".BS_block_con").click(function (event) { 
    const valLink = $(this).data("link");
    if (event.ctrlKey) {
        window.open(valLink);
    }
    else {
        window.location.href = valLink;
    }
});

// Клик колёсиком
$(".BS_block_con").on("mousedown", function(event) {
    if (event.which === 2) {
       window.open($(this).data("link"));
    }
});

// Title и favicon
document.addEventListener("visibilitychange", function(){
	if (document.hidden){
		document.title = "Вернись";
        $("#favicon").attr("href","images/toggle_off.png");
	} else {
        $("#favicon").attr("href","images/toggle_on.png");
		document.title = "Спасибо";
        setTimeout(function(){
            document.title = "Start page";
        }, 1000)
	}
});


