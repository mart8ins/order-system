import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
    animate('500ms ease-out', keyframes([
        style({
            offset: 0.2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
)

export let slide = trigger('slide', [
    state('void', style({ transform: 'translateX(-20px)' })),
    transition(':enter', [
        animate(500)
    ]),
    transition(':leave',
        useAnimation(bounceOutLeftAnimation)
    )
])



export let fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('{{ duration }} {{ easing }}') // parametri, ko katrā komponentē var mainīt
], {
    params: { // default vērtības animācijai
        duration: '2s',
        easing: 'ease-out'
    }
})

export let fadeOutAnimation = animation([
    animate(1000, style({ opacity: 0 }))
])

export let fade = trigger('fade', [
    transition(':enter',
        useAnimation(fadeInAnimation)
    ),
    transition(':leave',
        useAnimation(fadeOutAnimation)
    )
])
