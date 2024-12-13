/**
 * In javascript we can use the fetch function to make HTTP calls to the network
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * In the next exercise, when the user clicks ont the button with id "click-to-fetch"
 * you have to call this url : https://api.github.com/octocat
 * Then, you have to display the content returned by the api on the "pre" tag with id "display-here"
 */
export function fetchDataOnClick() {
  // Write your code here
const click = document.querySelector("#click-to-fetch")
    click.addEventListener('click', (event) => {

const file  = "https://api.github.com/octocat"
           fetch (file)
            .then(x => x.text())
            .then(y => document.querySelector("#display-here").innerHTML = y);
    })

}
