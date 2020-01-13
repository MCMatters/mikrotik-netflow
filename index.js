const collector = require('node-netflowv9');
const MongoClient = require('mongodb').MongoClient;
const configMongo = require('./config/mongo');

collector({ socketType: 'udp4' }).on('data', (data) => {
  const flow = data.flows[0] || null;

  if (!flow) {
    return;
  }

  MongoClient.connect(configMongo.url, (error, client) => {
    if (error) {
      return console.error(error);
    }

    client.db(configMongo.database).collection('logs').insert({
      srcAddr: flow.ipv4_src_addr,
      srcPort: flow.l4_src_port,
      dstAddr: flow.ipv4_dst_addr,
      dstPort: flow.l4_dst_port,
    });
  });
}).listen(8787);
