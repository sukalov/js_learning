let a = 'fghjkd   '
let b = a.split('')
let c = []
for (let i = 0; i < 100; i++) {
    let ind = Math.floor(Math.random()* b.length)
    c.push(b[ind])
}
let d = c.join('').replace(/\s+/g, ' ')
console.log(d)

const text = `The sun cast its warm golden rays over the tranquil meadow, painting the surrounding landscape with a soft glow. A gentle breeze rustled through the tall grass, causing it to sway in a mesmerizing dance. Birds chirped melodiously, their sweet songs filling the air with a symphony of nature's music. In the distance, a river meandered gracefully, its crystal-clear waters glistening under the sunlight. It was a moment of serene beauty, a snapshot `
console.log(text.replace(/[^asdfghjkl\s]*/gmi, ''))