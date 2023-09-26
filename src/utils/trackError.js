export default function trackError() {
  // 收集普通错误
  window.onerror = function (message, source, lineno, colno, error) {
    new Image().src = `/log.gif?action=${error}`;
  };

  // 收集Promise错误
  window.addEventListener(
    'unhandledrejection',
    e => (new Image().src = `/log.gif?action=Promise------${e.reason}`)
  );

  // 通过sendBeacon发送错误
  document.addEventListener('visibilitychange', function logData() {
    if (document.visibilityState === 'hidden') {
      navigator.sendBeacon('/log.gif?action="data from sendBeacon"');
    }
  });
}
