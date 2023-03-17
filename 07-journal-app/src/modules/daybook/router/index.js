export const daybookRouter = {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DaybookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry-selected',
            component: () => import(/* webpackChunkName: "no-entry-selected" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        }, {
            path: ':id',
            name: 'entry-view',
            component: () => import(/* webpackChunkName: "entry-view" */ '@/modules/daybook/views/EntryView.vue'),
            props: (route) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]
}