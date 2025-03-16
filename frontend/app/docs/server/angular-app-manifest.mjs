
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio01/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio01/about",
    "route": "/Portfolio01"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio01/home"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio01/header"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio01/footer"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio01/nav"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio01/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio01/contact"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio01/projects"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 840, hash: '2b4f45b9848ed8bcdf2da64e025ffc595c37aaa5831e85c2c55c57f50cc02ab1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '5d7a1971ed0340e056c097ba2182483e9d6581cb4f21c1fbb156d1ac183a2ca3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'header/index.html': {size: 6149, hash: '4b158e51310cf5fb3eff623761d8d5f19376b41f40f20456ce45085efc7c0a9c', text: () => import('./assets-chunks/header_index_html.mjs').then(m => m.default)},
    'nav/index.html': {size: 6149, hash: '4b158e51310cf5fb3eff623761d8d5f19376b41f40f20456ce45085efc7c0a9c', text: () => import('./assets-chunks/nav_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 6149, hash: '4b158e51310cf5fb3eff623761d8d5f19376b41f40f20456ce45085efc7c0a9c', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 6149, hash: '4b158e51310cf5fb3eff623761d8d5f19376b41f40f20456ce45085efc7c0a9c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6149, hash: '4b158e51310cf5fb3eff623761d8d5f19376b41f40f20456ce45085efc7c0a9c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 6149, hash: '4b158e51310cf5fb3eff623761d8d5f19376b41f40f20456ce45085efc7c0a9c', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 6149, hash: '4b158e51310cf5fb3eff623761d8d5f19376b41f40f20456ce45085efc7c0a9c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-BRLG7P6X.css': {size: 2950, hash: '+9o0y3CFIUE', text: () => import('./assets-chunks/styles-BRLG7P6X_css.mjs').then(m => m.default)}
  },
};
