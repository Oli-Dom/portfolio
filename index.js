function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener('click', () => {
  scrollToElement('techStack');
});

link2.addEventListener('click', () => {
  scrollToElement('projs');
});

link3.addEventListener('click', () => {
  scrollToElement('top');
});
