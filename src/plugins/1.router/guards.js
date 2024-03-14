import { canNavigate } from "@layouts/plugins/casl"

// import { useCookie } from "@vueuse/integrations/useCookie"

export const setupGuards = (router) => {
  router.beforeEach((to, from, next) => {
    const isLoggedIn = !!(useCookie("userData").value && useCookie("accessToken").value)

    // Public route, continue.
    if (to.meta.public) {
      next()
    }

    // If the user is logged in but the route is for unauthenticated users only,
    // redirect to home, otherwise proceed.
    else if (to.meta.unauthenticatedOnly) {
      if (isLoggedIn) {
        next({ name: "dashboards-analytics" }) // Replace 'home' with your home route name
      } else {
        next()
      }
    }

    // Check permissions with canNavigate
    else if (!canNavigate(to)) {
      next(
        isLoggedIn
          ? { name: "not-authorized" }
          : {
              name: "login",
              query: {
                ...to.query,
                to: to.fullPath !== "/" ? to.path : undefined
              }
            }
      )
    }

    // No conditions met, proceed with navigation.
    else {
      next()
    }
  })
}
