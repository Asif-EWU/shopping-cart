// remove section
var removeSection = document.getElementsByClassName('remove-item');
for (let i = 0; i < removeSection.length; i++) {
    const section = removeSection[i];
    section.addEventListener('click', function(event) {
        event.target.closest('.cart-item').remove();
    })
}