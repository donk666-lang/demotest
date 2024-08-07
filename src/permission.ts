import router from "./router";

router.beforeEach((to, from, next) => {
  const myToken = sessionStorage.getItem('token')

  if (myToken) {
    if (to.path == "/index") {
      next("/")
    } else {
      next()
    }
  } else {
    if (to.path == "/index") {
      next()
    } else {
      console.log('....////')
      next()
    }
  }
})