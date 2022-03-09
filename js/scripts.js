 /* eslint-env jquery */

 // eslint-disable-next-line no-unused-vars
function newItem(){ 
    //1. Adding a new item to the list of items: 
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!')
    } else {
        let list = $('#list');
        list.append(li);
    }

    //2. Crossing an item out:
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick',function crossOut(){
        li.toggleClass('strike');
    });

    //3. Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem(){
        li.addClass('delete')
    }

    $('#list').sortable();
}