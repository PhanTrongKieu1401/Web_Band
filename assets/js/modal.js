document.querySelector('.modal_ticket').addEventListener('click', function(){
    closeModal()
})

document.querySelector('.modal_container').addEventListener('click', function(event){
    event.stopPropagation();
})

function openModal(){
    // document.querySelector('.modal_ticket').style.display = 'flex';
    document.querySelector('.modal_ticket').classList.add('modal_open');
}

function closeModal(){
    // document.querySelector('.modal_ticket').style.display = 'none';
    document.querySelector('.modal_ticket').classList.remove('modal_open');
}