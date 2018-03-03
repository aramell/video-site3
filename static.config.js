import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/weddings',
        component: 'src/containers/Weddings',
      },
      {
        path: '/realestate',
        component: 'src/containers/RealEstate',
      },
      {
        path: '/promotional',
        component: 'src/containers/Promotional',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
 