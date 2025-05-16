/**
 * Opens a URL in a new tab using modern MouseEvent constructor
 * @param {string} url - The URL to open in a new tab
 */
export function safeOpenNewTab(url: string) {
  // Create link in memory
  const a = window.document.createElement('a');
  a.target = '_blank';
  a.href = url;

  // Create MouseEvent with modern constructor
  const clickEvent = new MouseEvent('click', {
    // Default values for mouse event
    view: window,
    bubbles: true,
    cancelable: true,

    // Mouse specific properties
    detail: 0,
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,

    // Modifier keys
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,

    // Mouse button (0 = left button)
    button: 0,
    buttons: 0,

    // For compatibility with older browsers
    relatedTarget: null,
  });

  // Dispatch the click event
  a.dispatchEvent(clickEvent);
  a.remove();
}
