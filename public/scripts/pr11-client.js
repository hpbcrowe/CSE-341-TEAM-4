//initialize socket io
const socket = io();

//repopulate list when server broadcasts and event
socket.on('update-list', () => {
    populateList()
});

const populateList = () => {
    console.log('populating list');
    const nameList = document.getElementById('nameList');
    fetch('p11/fetchAll')
        .then(res => res.json())
        .then(data => {
            // Clear the list first
            while (nameList.firstChild)
             { nameList.firstChild.remove() }

            // Repopulate the list
            for (const avenger of data.names.avengers) {
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(avenger.name + ', ' + (avenger.power ? avenger.power :  "no power") + ', ' + (avenger.age ? avenger.age :  "no age")));
                nameList.appendChild(li);
            }
        })
        .catch(err => {
            console.log(err);
        });
}
const submitName = () => {
    const newName = document.getElementById('newName').value // Grab the value of our new name
    const newPower = document.getElementById('powers').value // Grab the value of our new power
    const newAge = document.getElementById('age').value // Grab the value of our new age
    
    fetch('/p11/insertName', {
        method: 'POST', // Send a POST request
        headers: {
            // Set the Content-Type, since our server expects JSON
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newName, newPower, newAge })

    })
        .then(res => {
            // Clear the input
            document.getElementById('newName').value = ''
            document.getElementById('powers').value = ''
            document.getElementById('age').value = ''
            console.log(res);
            // Repopulate the list with our new name added
            populateList()

            //Tell the server to broadcast changes to other users
            socket.emit('new-name')
        })
        .catch(err => {
            // Clear the input
            document.getElementById('newName').value = ''
            console.error(err)
            
        })
}

// populateList()



//INITIALIZE LIST
populateList()