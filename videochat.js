const peer = new Peer();

peer.on('open', id => {
  document.getElementById('my-peer-id').innerText = `Your ID: ${id}`;
});

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    const myVideo = document.getElementById('my-video');
    myVideo.srcObject = stream;

    peer.on('call', call => {
      call.answer(stream);
      call.on('stream', remoteStream => {
        document.getElementById('remote-video').srcObject = remoteStream;
      });
    });

    window.callDoctor = function () {
      const peerId = document.getElementById('peer-id-input').value;
      const call = peer.call(peerId, stream);
      call.on('stream', remoteStream => {
        document.getElementById('remote-video').srcObject = remoteStream;
      });
    };
  })
  .catch(error => {
    alert("Error accessing camera/microphone.");
    console.error(error);
  });
