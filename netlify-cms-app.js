import CMS from 'netlify-cms-app';

import siteConfig from './public/config.yml';

CMS.init({
  siteConfig,
});

export default CMS;
