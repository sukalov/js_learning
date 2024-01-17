let a = 'fghjkd   '
let b = a.split('')
let c = []
for (let i = 0; i < 100; i++) {
    let ind = Math.floor(Math.random()* b.length)
    c.push(b[ind])
}
let d = c.join('').replace(/\s+/g, ' ')
console.log(d)

const text2 = `A fierce jerk fired the gun, her fury echoing through the rugged cliffs. The frightened kid urged quick 
escape, darting through the narrow bushes. Red sparks flickered, triggering a surge of adrenaline in the hardened fugitive. Judging the risk, he leaped over a sturdy hurdle, defying gravity. His quick reflexes guided him, ensuring safe jumps over the hazardous terrain. A rugged figure emerged, his jerky movements hinting at concealed secrets. A fragile deer hesitated, its delicate frame juxtaposed with the harsh surroundings. The fugitive's heart raced, his instincts kicking into high gear. He ducked behind a thick hedge, hiding from the pursuing forces. A jerk of the head, a fleeting glance, and he vanished into the dense thicket.`
const text = `A jar of sugar sat on the desk, while the fragile rug lay askew on the floor. A sleek red jeep raced 
through the dark, headlights flashing. The skier's gear clanked as he leaped off the jagged ledge, hurtling through 
the air. A joyful shriek escaped his lips as he landed safely on the frozen lake. The larks sang their melodious 
tunes, filling the air with harmonious melodies. A feral dog howled in the distance, its eerie cry echoing through 
the night. A judge presided over the court, gavel in hand, delivering a stern ruling. The aged tree stood tall, its 
branches reaching towards the sky, a sanctuary for birds. A fearless hiker trekked through the dense jungle, 
navigating the treacherous terrain. The eerie fog engulfed the landscape, creating an ethereal atmosphere.`
 
console.log(text.replace(/[^dkrueifghj\s]*/gmi, ''))
