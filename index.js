function myFunction() {
    let div;
    let text = document.getElementById("input-text").value;

    for (i = 0; i < text.length; i++) {
        if (text[i] === text[i + 1]) {
            if (text.split(text[i]).length - 1 > 1) {
                text = text.replace(/(.)\1/g, '');
                i--;
            }
        }
    }

    div = document.getElementById('output-text');
    div.style.marginLeft = '10em';
    div.style.maxWidth = '50%';
    div.innerHTML = text;

    document.body.append(div);
}
