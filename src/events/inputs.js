/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
    // Write your code here

    const textInput = document.getElementById('write-some-text');

    textInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            alert(textInput.value)
        }
    })
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
    // Write your code here//
    const TextInput = document.querySelector("#list-input");
    const list = document.querySelector("#list");

    function List() {
        const input_trim = TextInput.value.trim();
        if (input_trim) {
            const li = document.createElement('li');
            li.textContent = input_trim;
            list.appendChild(li);
            TextInput.value = '';
        }
    }

    TextInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            List();
        }
    });
    TextInput.addEventListener('blur', List);

}

/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
    //Write your code here
    const container = document.querySelector('#list');
    container.addEventListener('click', (event) => {
        event.target.remove();
    });
}
