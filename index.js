
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image') 
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let description = document.createElement ('h3')
// description.setAttribute('class', 'dog-content')
description.textContent = 'Description:'
dogDetails.append(description)

let details = document.createElement ('p')
details.textContent = "This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals."
dogDetails.append (details)

let feedingHeader = document.createElement ('h3')
feedingHeader.textContent = 'Feeding Times:'
dogDetails.append (feedingHeader)

let feedingTimes = document.createElement ('ul')
dogDetails.append (feedingTimes)
let time1 = document.createElement ('li')
time1.textContent = "9:00 am"
feedingTimes.append (time1)
let time2 = document.createElement ('li')
time2.textContent = "12:00 pm"
feedingTimes.append (time2)
let time3 = document.createElement ('li')
time3.textContent = "5:00 pm"
feedingTimes.append (time3)
