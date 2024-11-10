type inventory = string | null;
type status = 'none' | 'partial' | 'complete' | null;

export default function (): status {
  let setupStatus: inventory = localStorage.getItem('setupStatus');
  if (setupStatus === null) {
    return 'none';
  } else if (setupStatus === 'partial') {
    return 'partial';
  } else if (setupStatus === 'complete') {
    return 'complete';
  } else {
    return null;
  }
}
