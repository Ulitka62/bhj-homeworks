const toolTip = Array.from(document.querySelectorAll('.has-tooltip'));
let divElem;

function tooltipsMaker() {
    for (let i = 0; i < toolTip.length; i++) {
        toolTip[i].insertAdjacentHTML(`afterEnd`, `<div class="tooltip">${toolTip[i].title}</div>`);
    }

    divElem = document.querySelectorAll(`.tooltip`);

    for (let i = 0; i < toolTip.length; i++) {
        toolTip[i].addEventListener(`click`, function(event) {
            event.preventDefault();

            if ( divElem[i].classList.contains(`tooltip_active`) ) {
                divElem[i].classList.remove(`tooltip_active`);
            } else {
                divElemRemove();

                const left = toolTip[i].getBoundingClientRect().left;
                const top = toolTip[i].getBoundingClientRect().top;
                const bottom = toolTip[i].getBoundingClientRect().bottom;

                divElem[i].style = `left: ${left}px; top: ${top + (bottom - top)}px`;
                divElem[i].classList.add(`tooltip_active`);
            }

            document.addEventListener(`scroll`, divElemRemove);
        });
    }
}

function divElemRemove() {
    for (let i = 0; i < divElem.length; i++) {
        divElem[i].classList.remove(`tooltip_active`);
    }
}

document.addEventListener(`DOMContentLoaded`, tooltipsMaker);