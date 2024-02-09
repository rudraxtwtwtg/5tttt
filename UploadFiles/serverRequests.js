// execute simultaneous requests 
axios.all([
  {% if serverType == "minecraft" %}
    axios.get('https://api.minetools.eu/ping/{{ config("server-ip") }}/{{ config("server-port") }}'),
  {% endif %}
  {% if serverType == "rust" %}
    axios.get('https://api.rust-servers.info/status/{{ config("server-port") }}'),,
  {% endif %}
  {% if serverType == "unturned" %}
    axios.get('https://unturned-servers.net/api/?object=servers&element=detail&key={{ config("server-port") }}'),
  {% endif %}
  axios.get('https://discordapp.com/api/guilds/{{ config("discord_id") }}/embed.json')
])
.then(status => {
  //this will be executed only when all requests are complete
  $(".player-count").html(numberWithCommas(status[0].data.players.online));
  $("#discord-count").html(numberWithCommas(status[1].data['presence_count']));
})
.catch(error => {
  console.log(error.response)
});