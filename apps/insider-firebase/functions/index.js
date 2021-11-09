const functions = require('firebase-functions');

exports.selectInsider = functions.firestore
  .document('games/hmuzwvtrQ97XMQzcoGLk')
  .onUpdate((change) => {
    const before = change.before.data();
    const after = change.after.data();
    if (!before.theme && after.theme) {
      return change.after.ref.set(
        {
          insider: 'Sm28F6P5sGe8jS1eN0XbeUbPycV2',
        },
        { merge: true }
      );
    }

    return null;
  });
