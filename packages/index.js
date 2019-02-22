import './utils/rem';
import './utils/index'
import { LotteryGrid, LotteryList } from './components/Lottery';
import './index.less'

const components = {
    LotteryGrid,
    LotteryList,
};

const install = function(Vue, config = {}) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });

    Vue.prototype.$config = config
};
  
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    LotteryGrid,
    LotteryList,
};
export {
    LotteryGrid,
    LotteryList,
}