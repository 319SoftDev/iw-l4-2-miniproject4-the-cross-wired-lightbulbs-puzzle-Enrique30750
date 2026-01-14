// YOUR CODE HERE
console.log("Script Running.")
const toggle = ids => ids.forEach(id => {
    const el = document.querySelector(`#${id}`);
    if (el) el.classList.toggle('active');
});

const s1 = document.querySelector('#switch1');
if (s1) s1.addEventListener('change', () => toggle(['lightbulb3','lightbulb8']));

const s2 = document.querySelector('#switch2');
if (s2) s2.addEventListener('change', () => toggle(['lightbulb1','lightbulb7']));

const s3 = document.querySelector('#switch3');
if (s3) s3.addEventListener('change', () => toggle(['lightbulb4','lightbulb6','lightbulb8']));

const s4 = document.querySelector('#switch4');
if (s4) s4.addEventListener('change', () => toggle(['lightbulb2','lightbulb9']));

const s5 = document.querySelector('#switch5');
if (s5) s5.addEventListener('change', () => toggle(['lightbulb5']));

const s6 = document.querySelector('#switch6');
if (s6) s6.addEventListener('change', () => toggle(['lightbulb1','lightbulb4']));

const s7 = document.querySelector('#switch7');
if (s7) s7.addEventListener('change', () => toggle(['lightbulb2','lightbulb3']));

const s8 = document.querySelector('#switch8');
if (s8) s8.addEventListener('change', () => toggle(['lightbulb5','lightbulb9']));

const s9 = document.querySelector('#switch9');
if (s9) s9.addEventListener('change', () => toggle(['lightbulb6','lightbulb7']));