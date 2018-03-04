
export default {
  siteRoot: 'http://phantomland-media.s3-website-us-east-1.amazonaws.com/',
  getSiteData: () => ({
    title: 'Phantomland Media',
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
 