export const handleClickScroll = (event) => {
  let element;
  if (event.target.innerText === 'Projects') {
    element = document.getElementById('projects-section');
  }

  if (event.target.innerText === 'Skills') {
    element = document.getElementById('skills-section');
  }

  if (event.target.innerText === 'Contact Me') {
    element = document.getElementById('about-section');
  }

  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
