import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

export default {
  path: '/demo',
  name: 'demo',
  meta,
  redirect: { name: 'demo-vueVideo' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'flvjs', name: `${pre}flvjs`, component: () => import('@/pages/demo/flvjs'), meta: { ...meta, title: 'flvjs' } },
    { path: 'vueVideo', name: `${pre}vueVideo`, component: () => import('@/pages/demo/vueVideo'), meta: { ...meta, title: 'vueVideo' } }
  ])('demo-')
}
