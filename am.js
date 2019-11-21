
  this.player.src([
  { type: "video/mp4", src: "https://r6---sn-aigl6n7z.googlevideo.com/videoplayback?expire=1574365597&ei=PZXWXeCJLYP0Vo-fmPAP&ip=95.179.228.10&id=o-ABPgQMwElug6eIiyGSWO1fUAiqbVNRUCtuNG4fxJfahW&itag=18&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-aigl6n7z%2Csn-aigzrn7k&ms=au%2Crdu&mv=m&mvi=5&pl=26&initcwndbps=873750&mime=video%2Fmp4&gir=yes&clen=7633354&ratebypass=yes&dur=139.389&lmt=1540215560823224&mt=1574343945&fvip=2&fexp=23842630%2C23860862&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgDOqBvK6_R-J6gMAzIETJnapFcTtsp7gFazOM4-DFKO4CIQDahoZk741w0pkdKJqdmWhe92xUOoo5MvyaiLQklIi-5w%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRQIgaWrYHRLlrCyyuGtUpzkJ6hjdoUwiWcjjpVb51-gRFYoCIQC9XDQKT1EiEx6Kc60aOdVojHRpwZ6u6wYtcDWOTTMpcw%3D%3D" }]);


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
