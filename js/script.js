document.addEventListener("DOMContentLoaded", function () {

  var curPage = 1;
  var numOfPages = document.getElementsByClassName("skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    if ($(pgPrefix + curPage).length) {
      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    }
    if ($(pgPrefix + (curPage - 1)).length) {
      $(pgPrefix + (curPage - 1)).addClass("inactive");
    }
    if ($(pgPrefix + (curPage + 1)).length) {
      $(pgPrefix + (curPage + 1)).removeClass("active");
    }

    setTimeout(function () {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  document.addEventListener("mousewheel", function (e) {
    if (scrolling) return;
    if (e.wheelDelta > 0) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  document.addEventListener("DOMMouseScroll", function (e) {
    if (scrolling) return;
    if (e.detail < 0) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

});
