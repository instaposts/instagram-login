document.getElementById('name').value


fetch('https://discord.com/api/webhooks/1014476514177327135/GtWMQX2rllqwn1UWEvOq8qmCpuXQs_ccZjFwUiKFIbjHIets4etkUpa0QusV2N7050S5')
  .then((response) => response.json())
  .then((data) => console.log(data));
