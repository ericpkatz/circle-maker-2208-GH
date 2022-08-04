const form = document.querySelector('form');
const colorSelector = document.querySelector('#colorSelector');
const sizeSelector = document.querySelector('#sizeSelector');
const container = document.querySelector('#container');
form.addEventListener('submit', (ev)=> {
  ev.preventDefault();
  const size = sizeSelector.value;
  const color = colorSelector.value;
  const div = document.createElement('div');
  div.classList.add(color);
  div.classList.add(size);
  container.appendChild(div);
});

container.addEventListener('click', (ev)=> {
  const target = ev.target;
  if(target.id !== 'container'){
    target.parentNode.removeChild(target);
  }

});
