
let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');




btn.addEventListener('click', function shuffelWord() {
    let word_spl = inp.value.split('');

    for (let i = word_spl.length - 1; i > 0; i--) {
        // letra random
        let j = Math.floor(Math.random() * (i + 1));
        // cambio de posiciones
        [word_spl[i], word_spl[j]] = [word_spl[j], word_spl[i]];
        
      }inp.value = word_spl.join('')
})








