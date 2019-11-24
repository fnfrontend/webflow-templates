(function ($) {

  $(document).ready(function(){
      $("html").attr("data-wf-domain","click-funnels-treasure-chest.webflow.io");
      $("html").attr("data-wf-page","5dd6ab56eab36e5bec7d4535"); 
      $("html").attr("data-wf-site","5dd6ab56eab36e61da7d4515");
      $("html").attr("data-wf-status","1");
    
      setTimeout(function(){
        $("html").append('<script src="https://uploads-ssl.webflow.com/5dd6ab56eab36e61da7d4515/js/webflow.11c8e3c9a.js" type="text/javascript"></script>');
        alert("triggered1");
      },500);
  });
}(jQuery));
