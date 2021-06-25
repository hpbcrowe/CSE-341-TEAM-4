const submitName = () => {
    const newName = document.getElementById('newName').value // Grab the value of our new name

    fetch('/p10/insertName', {
        method: 'POST', // Send a POST request
        headers: {
            // Set the Content-Type, since our server expects JSON
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newName })

    })
        .then(res => {
            // Clear the input
            document.getElementById('newName').value = ''
            console.log(res);
            // Repopulate the list with our new name added
            //populateList()
        })
        .catch(err => {
            // Clear the input
            document.getElementById('newName').value = ''
            console.error(err)
            
        })
}

const populateList = () => {
    console.log('populating list');
    const nameList = document.getElementById('nameList')
    fetch('p10/fetchAll')
        .then(res => res.json())
        .then(data => {
            // Clear the list first
            while (nameList.firstChild) nameList.firstChild.remove()

            // Repopulate the list
            for (const avenger of data.names.avengers) {
                const li = document.createElement('li')
                li.appendChild(document.createTextNode(avenger.name))
                nameList.appendChild(li)
            }
        })
        .catch(err => {
            console.log(err)
        })
}