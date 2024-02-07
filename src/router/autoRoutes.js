const routes = []

function importAll(r) {
    r.keys().forEach(key => {
        const componentConfig = r(key);
        const componentName = key.replace('./', '').replace('.vue', '')
        routes.push({
            path: `/${componentName.toLowerCase()}`,
            name: componentName,
            component: componentConfig.default || componentConfig,
            meta: componentConfig.default.meta || {}
        });
    });
}

importAll(require.context('@/views/', false, /\.vue$/))


export default routes;