import CMS from "netlify-cms-app";
import { fr } from 'netlify-cms-locales';

CMS.registerLocale('fr', fr);

CMS.init({
  config: {
    backend: {
      name: "git-gateway"
    }
  }
});
