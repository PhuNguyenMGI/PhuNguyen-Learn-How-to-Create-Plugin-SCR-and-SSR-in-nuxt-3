import Notification from "~/components/Notification.vue";
import { createApp } from "vue";

const install = (app) => {
    const nuxtApp = useNuxtApp();
    let comp = null;
    nuxtApp.provide("globalNotification", (value: object) => initNotification());

    const initNotification = () => {
        if (comp) {
            nuxtApp.$event("close", () => {
                comp.unmount();
                comp = null;
            });
        } else {
            comp = createComponent();
            nuxtApp.$listen("close", () => {
                if (comp) {
                    comp.unmount();
                    comp = null;
                }
            })
        }
    }

    const createComponent = () => {
        const div = document.createElement('div');
        document.getElementById('notification')?.appendChild(div);
        const component = createApp(Notification);
        component.mount(div);
        return component;
    }
}

export default {install};