

  this.player.on('adserror', function (error) {
    _this.log('error occurred');
    console.log(error);
  });

};

Ads.prototype.SAMPLE_AD_TAG = 'http://pubads.g.doubleclick.net/gampad/ads?' +
'sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&' +
'ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&' +
'unviewed_position_start=1&' +
'cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&' +
'vid=short_onecue&correlator=';

Ads.prototype.init = function () {
  if (this.adTagInput.value == '') {
    this.log('Error: please fill in an ad tag');
  } else {
    this.player.ima.initializeAdDisplayContainer();
    this.player.ima.setContentWithAdTag(null, this.adTagInput.value, false);
    this.player.ima.requestAds();
    this.wrapperDiv.removeEventListener(this.startEvent, this.boundInit);
  }
};

Ads.prototype.adsManagerLoadedCallback = function () {

  var events = [
  google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
  google.ima.AdEvent.Type.CLICK,
  google.ima.AdEvent.Type.COMPLETE,
  google.ima.AdEvent.Type.FIRST_QUARTILE,
  google.ima.AdEvent.Type.LOADED,
  google.ima.AdEvent.Type.MIDPOINT,
  google.ima.AdEvent.Type.PAUSED,
  google.ima.AdEvent.Type.RESUMED,
  google.ima.AdEvent.Type.STARTED,
  google.ima.AdEvent.Type.THIRD_QUARTILE,
  google.ima.AdEvent.Type.AD_BRExAK_READY];


  for (var index = 0; index < events.length; index++) {if (window.CP.shouldStopExecution(0)) break;
    this.player.ima.addEventListener(
    events[index],
    this.onAdEvent.bind(this));
  }window.CP.exitedLoop(0);
};

Ads.prototype.onAdEvent = function (event) {
  var message = 'Ad event: ' + event.type;
  this.log(message);
};

Ads.prototype.log = function (message) {
  this.console.innerHTML = this.console.innerHTML + '<br/>' + message;
};

var ads = new Ads();
