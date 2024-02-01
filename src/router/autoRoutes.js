// src/router/autoRoutes.js
const routes = []

function importAll(r) {
    r.keys().forEach(key => {
        console.log("key =>", key)
        const componentName = key.replace('./', '').replace('.vue', '')
        routes.push({
            path: `/${componentName.toLowerCase()}`,
            name: componentName,
            component: () => import(`@/views/${componentName}.vue`)
        })
    })
}

importAll(require.context('@/views/', false, /\.vue$/))

export default routes
