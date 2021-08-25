import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to my laboratory!',
        welcomeMsgP1: 'My name is Jorge, but you can call me George if you want. I\'m a Software Developer.',
        welcomeMsgP2: 'This is a fun project I built while learning vue.js and bootstrap.',
        welcomeMsgP3: 'Here I put some of my personal work that I do in my (very little) spare time. Also you can checkout my professional background.',
        welcomeMsgP4: 'You can reach me out using the contact button down below.'
    },
    'es': {
        welcomeMsg: '¡Bienvenido a mi laboratorio!',
        welcomeMsgP1: 'Me llamo Jorge, aunque puedes llamarme George si lo deseas. Me dedico a desarrollar software, generalmente web.',
        welcomeMsgP2: 'Esto que ves es un proyecto que hice por diversión mejorando mis habilidades en VueJs y Bootstrap.',
        welcomeMsgP3: 'Además, aquí pongo mi algunos proyectos personales que hago en mi (muy poco) tiempo libre. También puedes revisar mi background profesional.',
        welcomeMsgP4: 'Puedes contactarme a través del botón de abajo.'
    }
};

const i18n = new VueI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;