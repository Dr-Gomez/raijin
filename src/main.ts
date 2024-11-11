import './style.css';
import setup from './setup/setup';
import display from './display/display';

function main(): void {
  let body: HTMLBodyElement = document.body as HTMLBodyElement;
  setup();
  display(body);
}

main();
