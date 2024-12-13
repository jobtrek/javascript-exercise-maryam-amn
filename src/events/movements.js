/**
 * Register a new event listener that will retrieve the position of the mouse on the screen
 * and display the coordinates on the p with id "mouse-coordinates".
 * You need to display coordinates as follows : "x: 232, y: 332
 */
export function mouseMovements() {
    // Write your code here

    addEventListener('mousemove', (event) => {
        let x = event.clientX;
        let y = event.clientY;
        let text = "x: " + x + ",  y: " + y;
        document.querySelector("#mouse-coordinates").innerHTML = text;
    })

}

const randomRGB = () => {
    const o = Math.round
    const r = Math.random
    const s = 255
    return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)})`
}
let enteringColor = ''

/**
 * On the page, you have an input with the id "focus-me".
 * You need to add three behaviors to this input.
 * First, when you hover it, you have to display a message in his label with
 *        the text "Yes, you hover me !". and remove the message when the hover is loosed.
 * Second, when you focus the input, you have to change hist border color to a random one,
 *         but different from all the previously used and different from the original one.
 * Third, when you loose focus of the field, you need to reset the border color to the default one.
 */
export function hoverFocusAndBlur() {
    // Write your code here

    const focus = document.querySelector('#focus-me')

    let oldLabels = []

    focus.addEventListener("mouseover", (event) => {

        const labelElement = event.target.labels
        for (const element of labelElement) {
            oldLabels.push(element.textContent)
            element.textContent = 'Yes, you hover me !'
        }
    })

    focus.addEventListener("mouseout", (event) => {
        const labelElement = event.target.labels
        for (const element of labelElement) {
            element.textContent = oldLabels.splice(0, 1)
        }
    })

    const input_border = document.querySelector('#focus-me');
    input_border.addEventListener('focus', () => {
        input_border.style.borderColor = randomRGB();
    });

    enteringColor = "#6495ed"
    let blur_border = document.querySelector("#focus-me")
    blur_border.addEventListener('blur', () => {
        blur_border.style.borderColor = enteringColor
    });

}

/**
 * On the same input from the previous exercise, you need to add a new behavior :
 * Now, each new letter on the input should randomly change the default color of the input border.
 * You don't need to change the current border color, which is controlled by the previous exercise,
 * but you need to change the original color, the one that will be applied when the
 * precedent exercise will lose focus of the field.
 * Take the opportunity to also apply this colour to the text of the 2 input labels.
 */
export function changesOnInputEvents() {
    // Write your code here

    const border_color = document.querySelector("#focus-me")
    border_color.addEventListener("input", (e) => {
        enteringColor = randomRGB()
        border_color.labels.forEach(label => label.style.color = enteringColor)
    })


}
