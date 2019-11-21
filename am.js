

var Ads = function () {
  // Set up UI stuff.
  this.adTagInput = document.getElementById('tagInput');
  var sampleAdTag = document.getElementById('sampleAdTag');
  sampleAdTag.addEventListener('click', () => {
    this.adTagInput.value = this.SAMPLE_AD_TAG;
  });
  this.console = document.getElementById('ima-sample-console');

  this.player = videojs('content_video');

  // Remove controls from the player on iPad to stop native controls from stealing
  // our click
  var contentPlayer = document.getElementById('content_video_html5_api');
  if ((navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/Android/i)) &&
  contentPlayer.hasAttribute('controls')) {
    contentPlayer.removeAttribute('controls');
  }

  // Start ads when the video player is clicked, but only the first time it's
  // clicked.
  this.startEvent = 'click';
  if (navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/Android/i)) {
    this.startEvent = 'touchend';
  }


  this.wrapperDiv = document.getElementById('content_video');
  this.boundInit = this.init.bind(this);
  this.wrapperDiv.addEventListener(this.startEvent, this.boundInit);

  var options = {
    id: 'content_video',
    adsManagerLoadedCallback: this.adsManagerLoadedCallback.bind(this),
    autoPlayAdBreaks: false };

  this.player.ima(options);

  var _this = this;

  this.player.ima.setAdBreakReadyListener(function () {
    _this.player.ima.playAdBreak();
  });
