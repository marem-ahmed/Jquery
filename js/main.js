$('.open').click(function(){
    $('.bar').css('left','0')
    $('.open').css('left','250px')
})
$('.close-btn').click(function(){
    $('.bar').css('left','-250px')
    $('.open').css('left','0')

})

$('.text h2').click(function(e){

    $(e.target).next().slideToggle()
    $('.text p').not( $(e.target).next()).slideUp()
})

$('textarea').keyup(function(){
    let TextareaLenght=$(this).val().length
    $('#number').text(100-TextareaLenght<=0?'your available character finished':100-TextareaLenght)})