import './utils/index'

import Lottery from './components/Lottery';
import './index.less'

const components = {
    Lottery,
};

const install = function(Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
};
  
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    Lottery,
};
export {
    Lottery,
}