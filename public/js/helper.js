export function createElementWithClassesText(tagName, classNames, text) {
    let item = document.createElement(tagName);

    if (classNames != undefined) {
        classNames.forEach(className => {
            item.classList.add(className);
        })
    }

    if (text != undefined) {
        let innerText = document.createTextNode(text);
        item.appendChild(innerText);
    }

    return item;
}

export function createImageWithClasses(classNames, src, alt) {
    let ava = createElementWithClassesText('img', classNames);
    ava.setAttribute('src', src);
    ava.setAttribute('alt', alt);

    return ava;
}
//////////////////////////////////////////////////////////////////
