//YOU DO NOT NEED TO EDIT this code.
if (!/(&|\?)username=/.test(window.location.search)) {
  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }
  newSearch += 'username=' + (prompt('What is your name?') || 'anonymous');
  window.location.search = newSearch;
}

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader("X-Parse-Application-Id", "wPfavNOxOKTzlXiMq9r226nSo5Vl5aMFfEcvAupE");
  jqXHR.setRequestHeader("X-Parse-REST-API-Key", "eCGqXWtDjoZofGzf785KvSODrUrXURbL6JCQqaHj");
});
