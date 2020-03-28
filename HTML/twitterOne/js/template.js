 let profile = {
     id: 'aloncon',
     name: 'Alon Rambo 3',
     bio: 'ddddd',
     location: 'Israel',
     website: 'http://elcogem.com',
 };

 const tweete = [
    
    {
    'user': 'IvankaTrump',
    'name': 'Ivanka Trump',
    'from': '@FLOTUS',
    'time': '4d 1m',
    'id': 'IvankaTrump',
    'img': 'https://pbs.twimg.com/profile_images/1054179226100908032/i5ZXfFdE_400x400.jpg',
    'text': 'As the days go by, isolation can be challenging. But if we make social distancing & personal hygiene a priority, we will get through this faster. We can stop #COVID19 but only if we all commit to following the rules. Be safe, be healthy!.'
    },
    {
    'user': 'alon 2',
    'name': 'Melania Trump',
    'from': '@Mosheeeeee_NEWS',
    'time': '7d 1m',        
    'id': 'MelaniaTrump',
    'img': 'https://pbs.twimg.com/profile_images/848946510918295557/RmsOl1zv_400x400.jpg',
    'text': 'Everyone reacts differently in stressful situations. If you or someone close to you is struggling with managing the stress of #COVID19 this may be a good resource for you.'
    },
    {
    'user': 'alon 1',
    'name': 'rambo 3',
    'from': '@Alon_NEWS',
    'time': '4d 8m',
    'id': 'aloncon1',
    'img': 'https://pbs.twimg.com/profile_images/1207525587427872768/JWMsWBr-_400x400.jpg',
    'text': 'Sand beneath our feet,     big blue sky above our heads    No need to keep the stressing from our everyday life on our minds    We have got to leave all that behind .'
    },
    {
    'user': 'alon 2',
    'name': 'rambo 3',
    'from': '@Mosheeeeee_NEWS',
    'time': '7d 18m',        
    'id': 'aloncon2',
    'img': 'https://pbs.twimg.com/profile_images/1227307215079563264/RFhjEBVm_400x400.jpg',
    'text': 'keep the stressing from our everyday life on our minds lorm ipsum sd s ksd skd sdk sd ksd ksd ksd k'
    },
    {
        'user': 'alon 1',
        'name': 'rambo 3',
        'from': '@Alon_NEWS',
        'time': '4d 8m',
        'id': 'aloncon1',
        'img': 'https://pbs.twimg.com/profile_images/1207525587427872768/JWMsWBr-_400x400.jpg',
        'text': 'Sand beneath our feet,     big blue sky above our heads    No need to keep the stressing from our everyday life on our minds    We have got to leave all that behind .'
        },
        {
            'user': 'alon 2',
            'name': 'rambo 3',
            'from': '@Mosheeeeee_NEWS',
            'time': '7d 18m',        
            'id': 'aloncon2',
            'img': 'https://pbs.twimg.com/profile_images/1227307215079563264/RFhjEBVm_400x400.jpg',
            'text': 'keep the stressing from our everyday life on our minds lorm ipsum sd s ksd skd sdk sd ksd ksd ksd k'
            }


];

window.onload = function() {
    const fName = document.querySelector("#fname");
    fName.value = profile.name; 
    const fBio = document.querySelector("#fBio");
    fBio.value = profile.bio; 
    const fLocation = document.querySelector("#fLocation");
    fLocation.value = profile.location; 
    const fWebsite = document.querySelector("#fWebsite");
    fWebsite.value = profile.website;
    
    let profileTmp = Object.assign({}, profile);
    //add events
    var event = new Event('input');
    fName.addEventListener('input', (e) => {
        profileTmp.name = e.target.value;
    }, false);
    fBio.addEventListener('input', (e) => {
        profileTmp.bio = e.target.value;
    }, false);
    fLocation.addEventListener('input', (e) => {
        profileTmp.location = e.target.value;
    }, false);
    fWebsite.addEventListener('input', (e) => {
        profileTmp.website = e.target.value;
    }, false);
    // Save button event
    const profileSaveButton = document.querySelector("#profileSaveButton");
    profileSaveButton.addEventListener('click', (e) => {
        //update json obj
       profile = {...profileTmp}; 
       editProfileCloseHandler(); //close Modal.
    });


    fName.dispatchEvent(event);
    

if ('content' in document.createElement('template')) {

    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    var template = document.querySelector('#feedItemTemplate');

    // Clone the new row and insert it into the table

        tweete.forEach(element => {
            console.log(element);
            var tbody = document.querySelector("#feed-item-template");
            var clone = template.content.cloneNode(true);
            var img = clone.querySelectorAll("#img-col-img");
            img[0].src = element.img;
            var name = clone.querySelectorAll("#top-title-name");
            name[0].textContent  = element.name;
            var more = clone.querySelectorAll("#top-title-more");
            more[0].textContent  = `${element.from} ${element.id}`;
            var time = clone.querySelectorAll("#top-title-time");
            time[0].textContent  = element.time;
            var text = clone.querySelectorAll("#story-col-text");
            text[0].textContent  = element.text;
        
            tbody.appendChild(clone);
        
        
        });

} else {
    console.log('not supported');
    // Find another way to add the rows to the table because 
    // the HTML template element is not supported.
}

}