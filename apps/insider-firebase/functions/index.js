const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

process.env.TZ = 'Asia/Tokyo';

exports.selectInsider = functions.firestore
  .document('games/hmuzwvtrQ97XMQzcoGLk')
  .onUpdate(async (change) => {
    const before = change.before.data();
    const after = change.after.data();
    if (!before.theme && after.theme) {
      const masterId = after.master;
      const snap = await db.collection('users').get();
      const ids = snap.docs.map((item) => item.data().uid);
      const filtered = ids.filter((item) => item !== masterId);
      var randIndex = Math.floor(Math.random() * filtered.length);
      return change.after.ref.set(
        {
          insider: filtered[randIndex],
        },
        { merge: true }
      );
    }

    return null;
  });
