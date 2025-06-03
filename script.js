const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');

});
document.querySelectorAll('.nav-links a').forEach(link =>{
    link.addEventListener('click',() => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
})
document.querySelectorAll('card').forEach(card =>{
    card.addEventListener('click', function(){
        console.log('Card clicked:' + this.querySelector('h2').textContent)
    });
});

document.addEventListener('DOMContentLoaded',function(){
    class Carousel{
        constructor(element){
            this.carousel = element;
            this.items = this.carousel.querySelectorAll('.carousel-item');
            this.indciator = this.carousel.querySelectorAll('.indicator');
            this.prevBtn = this.carousel.querySelectorAll('.prev');
            this.nextBtn = this.carousel.querySelectorAll('.next');
            this.currentIndex =  0;
            this.totalItems =  this.items.length;
            this.autoPlayInterval = null;
            this.autoPlayDelay = 5000;
            this.init()
        }
        init(){
            this.showItem(this.currentIndex);
            this.prevBtn.addEventListener('click',  () => this.prev());
            this.nextBtn.addEventListener('click',  () => this.next());
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click',  () => this.goTo(index));
            });
            this.startAutoPlay();
            this.carousel.addEventListener('mouseenter',() => this.stopAutoPlay());
            this.carousel.addEventListener('mouseenter',() => this.startAutoPlay());
        }
        showItem(index){
            this.items.forEach(item =>{
                
            })
        }
    }
})