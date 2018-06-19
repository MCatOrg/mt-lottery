import Button from './components/button';
import './index.less'

const components = {
    Button,
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
    Button,
};
export {
    Button,
}