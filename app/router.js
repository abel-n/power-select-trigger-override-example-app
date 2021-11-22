import EmberRouter from '@ember/routing/router';
import config from 'power-select-trigger-override-example-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
