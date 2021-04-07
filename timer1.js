const args = process.argv
.slice(2) // slices to usable values
.filter(el => el >= 0) //makes sure numbers are positive
.filter(el => !isNaN(el)); //makes sure only numbers are inputed


args.forEach(el => 
  setTimeout(() => { 
  process.stdout.write('\x07')
  console.log('alarm at ' + el) // my sound wasn't working so I put this
  }, el * 1000)
);