//Name needs to be capped in on screen not in code
//Career/Field
//Short Desc
//Interests
//Past positions including company/place ,name ,title, short desc of duties
//Skills "BAM" = cool
let Name = 'Quincy Stafford'

console.log(Name.toUpperCase())
console.log('Career: Full Stack Development Student' )
console.log('Description: I am an introverted gaming adict procrastinator')

console.log('')
console.log('My Interests:')
console.log('1. Video Games')
console.log('2. Coding')
console.log('3. Switch Configuration')
console.log('4. Exercise')

console.log('')
function displayPosition(compName, jobtitle, desc) {
    console.log(jobtitle,'at', compName, '-', desc )
}
console.log('My Previous Experience:')
console.log(displayPosition('USAF', 'Cyber Transport Specialist', 'Configured Juniper, Avaya, and Brocade Switches'))
console.log(displayPosition('UPS', 'Package Handler', 'Handle packages and processing them to be moved in to parcel trucks and distributed to the public'))
console.log(displayPosition('Jacks', 'Team Memeber', 'Clean, Unload and process inbound freight, Process food, Cook and assemblew food'))

console.log('')
console.log('My Skillz:')
console.log('* BAM: Avaya Switch Configuration')
console.log('* BAM: Juniper Switch Configuration')
console.log('* BAM: Brocade Switch Configuration')
console.log('* JavaScript')
console.log('* Python')
console.log('* CSS')