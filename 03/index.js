function onClickHandler(e) {
    e.stopPropagation()
    console.log(e.currentTarget.id)
}

const sml = document.getElementById('small')
const mdm = document.getElementById('medium')
const big = document.getElementById('big')

sml.onclick = onClickHandler
mdm.onclick = onClickHandler
big.onclick = onClickHandler

// e.target -элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget - элемент, который вызвал обработчик в процессе всплытия

sml.onclick = null

const input = document.getElementById('input')

function onChangeHandler(e) {
    console.log(e.currentTarget.value)
}

input.oninput = onChangeHandler
const btn = document.querySelector('#button')
console.dir(btn)
btn.ondblclick = (e) => console.log(e)