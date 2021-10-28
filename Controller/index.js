const axios = require('axios');
const { ipStack } = require('../constants');

const whereAmI = async (req, res) => {
  try {
    let ip;
    let country;
    let language;

    await axios({
      method: 'get',
      url: 'http://ipv4bot.whatismyipaddress.com/',
    }).then((response) => {
      ip = response.data;
    });

    await axios({
      method: 'get',
      url: `http://api.ipstack.com/${ip}?access_key=${ipStack}`,
    }).then((response) => {
      const { data } = response;
      const { code } = data.location.languages[0];
      language = code;
      country = data.country_code;
    });

    return res.json({ ip, country, language });
  } catch (exception) {
    return res.json({ msg: exception, statusCode: 500 });
  }
};

module.exports = { whereAmI };
