import notification from "./Notification.client";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(notification);
});