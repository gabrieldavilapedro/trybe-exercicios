
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
const { winter, spring, summer, autumn } = yearSeasons;
const meses = [... spring, ...summer, ...autumn, ...winter]
console.log(meses);