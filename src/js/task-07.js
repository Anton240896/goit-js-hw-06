const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

range.addEventListener("input", changeRange);
    function changeRange (evt) {
       text.style.fontSize = evt.currentTarget.value + 'px';

}
    