import './display.css';

export default function (body: HTMLBodyElement) {
  const wrapper = document.createElement('div');
  wrapper.id = 'scrollWrapper';
  body.appendChild(wrapper);
}
