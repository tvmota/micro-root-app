import System from 'systemjs';
import singleSpa from 'single-spa';

function showWhenAnyOf(routes) {
  return function (location) {
    return routes.some((route) => location.pathname === route);
  };
}

function showWhenPrefix(routes) {
  return function (location) {
    return routes.some((route) => location.pathname.startsWith(route));
  };
}

function showExcept(routes) {
  return function (location) {
    return routes.every((route) => location.pathname !== route);
  };
}

singleSpa.registerApplication(
  'login',
  () => System.import('login'),
  showWhenAnyOf(['/login']),
);

singleSpa.registerApplication(
  'app-header',
  () => System.import('header'),
  showExcept(['/login']),
);

singleSpa.registerApplication(
  'app-sidebar',
  () => System.import('sidebar'),
  showExcept(['/login']),
);

singleSpa.registerApplication(
  'angularjs',
  () => System.import('angularjs'),
  showWhenPrefix(['/angularjs']),
);

singleSpa.registerApplication(
  'app1',
  () => System.import('app1'),
  showWhenPrefix(['/app1']),
)

singleSpa.registerApplication(
  'app2',
  () => System.import('app2'),
  showWhenPrefix(['/app2']),
)

singleSpa.registerApplication(
  'app3',
  () => System.import('app3'),
  showWhenPrefix(['/app3']),
)

singleSpa.start();