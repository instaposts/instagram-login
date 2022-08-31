const get_name = document.getElementById('name').value


const data = { username: 'example' };

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
