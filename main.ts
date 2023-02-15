function llamar_elemento_lista () {
    icono = randint(0, 9)
    lista[icono].showImage(0)
    basic.pause(200)
}
let icono = 0
let lista: Image[] = []
lista = [
images.iconImage(IconNames.Heart),
images.iconImage(IconNames.StickFigure),
images.iconImage(IconNames.Happy),
images.iconImage(IconNames.Asleep),
images.iconImage(IconNames.Angry),
images.iconImage(IconNames.Yes),
images.iconImage(IconNames.Sad),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.Confused),
images.iconImage(IconNames.Skull)
]
basic.forever(function () {
    llamar_elemento_lista()
})
