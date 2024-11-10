import './style.css';
import setup from './setup/setup';

function main(): void {
  let body: HTMLBodyElement = document.body as HTMLBodyElement;
  console.log(body);

  setup();
}

main();
