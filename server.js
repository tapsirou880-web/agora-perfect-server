const express = require('express'); 
const { RtcTokenBuilder, RtcRole } = require('agora-access-token'); 
 
const app = express(); 
 
const APP_ID = "1f332d4a87c940a090e688a209548579"; 
const APP_CERTIFICATE = "67157947ac094269a1982b9ef191323b"; 
 
app.use((req, res, next) =
  res.header('Access-Control-Allow-Origin', '*'); 
  next(); 
}); 
 
app.get('/', (req, res) =
  res.json({ status: 'online', appId: APP_ID }); 
}); 
 
app.get('/token', (req, res) =
  try { 
    const channel = req.query.channel; 
 
    if (!channel) return res.json({ error: 'channel required' }); 
 
    const token = RtcTokenBuilder.buildTokenWithUid( 
      APP_ID, APP_CERTIFICATE, channel, parseInt(uid), RtcRole.PUBLISHER, 86400 
    ); 
 
    res.json({ 
      success: true, 
      token: token, 
      appId: APP_ID, 
      channel: channel, 
      uid: parseInt(uid) 
    }); 
 
  } catch (error) { 
    res.json({ error: error.message }); 
  } 
}); 
 
app.listen(PORT, () =
  console.log('Server started on port', PORT); 
  console.log('AppID:', APP_ID); 
}); 
