import * as components from './components'
import ImpVis from '@impvis/components';
const ImpVisKatex = {
    install(Vue){
        Vue.use(ImpVis);
        for(const componentName in components){
            const component = components[componentName]
            Vue.component(component.name,component)
        }
    }
}
export default ImpVisKatex;
if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(ImpVisKatex)
}