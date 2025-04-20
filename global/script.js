$(document).ready(function () {
  // Make site responsive to mobile (touch sliders, adjust for no scroll bar)
  function touchCheck() {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || window.opera);
    return check;
  }

  function touchResponsive() {
    if (touchCheck() == true) {
      $("#nav-burger-symbol").css("flex-basis", "calc(48% - 22.5px)");
    } else {
      $("#nav-burger-symbol").css("flex-basis", "calc(48% - 28.5px)");
    }
    if (document.getElementById("cards")) {
      var xDown = null;
      var yDown = null;

      document
        .getElementById("cards")
        .addEventListener("touchstart", handleTouchStart, false);
    }
  }
  touchResponsive();

  // Code for sidebar and overlay
  function onFadeOut() {
    $("#overlay").fadeOut(250);
    $("#body").removeClass("toggled");
    $("#wrapper").removeClass("toggled");
    $("#primary-navigation").fadeOut(80);
    $("#menu-toggle").removeClass("toggled");
    $("#menu-toggle").attr("aria-expanded", "false");
    $(".under-overlay:not(.link-back-card)").each(function () {
      $(this).removeAttr("tabindex");
    });
  }

  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    if ($("#wrapper").hasClass("toggled")) {
      onFadeOut();
    } else {
      $("#wrapper").addClass("toggled");
      $("#menu-toggle").addClass("toggled");
      $("#primary-navigation").delay(150).fadeIn(300);
      $("#overlay").fadeIn(400);
      $("#body").addClass("toggled");
      $("#menu-toggle").attr("aria-expanded", "true");
      $(".under-overlay").each(function () {
        $(this).attr("tabindex", "-1");
      });
    }
  });

  $("#overlay").click(function () {
    onFadeOut();
  });

  // JQuery for toggle sub menus
  $(".dropdown-btn").click(function () {
    if ($(this).hasClass("active-dropdown")) {
      $(this).attr("aria-expanded", "false");
      $(this).parent().next(".dropdown-container").slideToggle(125);
    } else {
      $(this).attr("aria-expanded", "true");
      $(this).parent().next(".dropdown-container").slideToggle(250);
    }
    $(this).toggleClass("active-dropdown");
  });

  $(".abstract-link").click(function () {
    if ($(this).hasClass("abstract-toggled")) {
      $(this).attr("aria-expanded", "false");
      $(this)
        .next(".abstract-container")
        .children()
        .children(".close-abstract-button")
        .attr("aria-expanded", "false");
    } else {
      $(this).attr("aria-expanded", "true");
      $(this)
        .next(".abstract-container")
        .children()
        .children(".close-abstract-button")
        .attr("aria-expanded", "true");
    }
    $(this).next(".abstract-container").slideToggle(200);
    $(this).toggleClass("abstract-toggled");
  });

  // JQuery for privacy
  $(".close-abstract-button").click(function () {
    $(this).parent().parent(".abstract-container").slideToggle(200);
    $(this)
      .parent()
      .parent(".abstract-container")
      .prev(".abstract-link")
      .toggleClass("abstract-toggled");
    $(this)
      .parent()
      .parent(".abstract-container")
      .prev(".abstract-link")
      .attr("aria-expanded", "false");
    $(this).attr("aria-expanded", "false");
  });

  // JQuery for closing sidebar if element linking to current page clicked
  $(".dropdown-item-current").click(function () {
    onFadeOut();
  });

  // JQuery for terms and conditions modal
  function onOverlayOpen() {
    $("#modal-overlay").fadeIn(400);
    $("#body").addClass("toggled");
    $(".under-modal-overlay").each(function () {
      $(this).attr("tabindex", "-1");
    });
  }

  function onOverlayClose() {
    $("#body").removeClass("toggled");
    $("#modal-overlay").delay(50).fadeOut(250);
    $(".under-modal-overlay:not(.link-back-card)").each(function () {
      $(this).removeAttr("tabindex");
    });
  }

  // Control modal for terms and conditions
  $("#terms-conditions").click(function () {
    $("#terms-conditions-modal").addClass("modal-toggled");
    $(this).attr("aria-expanded", "true");
    $("#close-terms-button").attr("aria-expanded", "true");
    $(this).addClass("modal-toggled");
    onOverlayOpen();
  });

  $(".close-modal").click(function () {
    $("#terms-conditions-modal").removeClass("modal-toggled");
    $("#terms-conditions").attr("aria-expanded", "false");
    $("#close-terms-button").attr("aria-expanded", "false");
    $("#terms-conditions").removeClass("modal-toggled");
    onOverlayClose();
  });

  $(".close-gallery-modal").click(function () {
    $(".gallery-thumb-wrapper").removeClass("modal-toggled");
    $("#gallery-modal").removeClass("modal-toggled");

    $(".gallery-thumb-wrapper").attr("aria-expanded", "false");
    $("#close-gallery-modal-button").attr("aria-expanded", "false");
    $("#next-gallery-modal-button").attr("aria-expanded", "false");
    $("#previous-gallery-modal-button").attr("aria-expanded", "false");

    onOverlayClose();
  });

  $(".gallery-thumb-wrapper").click(function () {
    $("#gallery-modal-img").attr("src", null);
    $("#gallery-modal-img").attr(
      "src",
      "/gallery_page/gallery_images/" + $(this).attr("id") + ".webp"
    );
    $("#gallery-modal-img").attr("data-lightbox", $(this).attr("id"));
    $(this).addClass("modal-toggled");
    $("#gallery-modal").addClass("modal-toggled");

    $(".gallery-thumb-wrapper").attr("aria-expanded", "true");
    $("#close-gallery-modal-button").attr("aria-expanded", "true");
    $("#next-gallery-modal-button").attr("aria-expanded", "true");
    $("#previous-gallery-modal-button").attr("aria-expanded", "true");

    onOverlayOpen();
    // add aria-controls, alt, aria-label etc to thumbs
    // Add code to filter the gallery and links to menu for pre-filtered selection and add text -- make sure buttons work with filter
    // Generate html through json also?
  });

  // Automatically find id of first and last thumbnails and use these instead of "BITD_Digital" etc
  const firstGalleryImage = document.querySelectorAll(
    ".gallery-thumb-wrapper:first-child"
  );
  const lastGalleryImage = document.querySelectorAll(
    ".gallery-thumb-wrapper:last-child"
  );

  // Code for next and previous buttons
  $("#previous-gallery-modal-button").click(function () {
    var currentLightbox = $("#gallery-modal-img");
    if (currentLightbox.attr("data-lightbox") != firstGalleryImage) {
      $(".gallery-thumb-wrapper").removeClass("modal-toggled");
      $("#" + currentLightbox.attr("data-lightbox"))
        .prev(".gallery-thumb-wrapper")
        .click();
    }
  });

  $("#next-gallery-modal-button").click(function () {
    var currentLightbox = $("#gallery-modal-img");
    if (currentLightbox.attr("data-lightbox") != lastGalleryImage) {
      $(".gallery-thumb-wrapper").removeClass("modal-toggled");
      $("#" + currentLightbox.attr("data-lightbox"))
        .next(".gallery-thumb-wrapper")
        .click();
    }
  });

  $("#gform").on("submit", function () {
    $("#gform *").fadeOut(300);
    $("#contact-submitted-text").delay(300).fadeIn(150);
  });

  $(".youtube-thumb-wrapper").click(function () {
    $(this).attr("aria-expanded", "true");
    var $iframe = $(this).parent().parent().parent().next(".youtube-video");
    $iframe.attr(
      "src",
      "https://www.youtube-nocookie.com/embed/" +
        $(this).attr("data-video-number") +
        "&rel=0&modest-branding=1&mute=1"
    );
    $iframe.addClass("youtube-video-loaded");
    $iframe.show();
  });
});

// Card Carousel Buttons etc (need to make so can have multiple carousels on page, use this and put in doc ready)
let activeIndex = 0;
const cards = document.getElementsByClassName("card");

// Functions to manage accessibility of invisible cards
function removeCardFromTabFlow(item) {
  $(item).addClass("link-back-card");
  $(item).attr("tabindex", "-1");
}
function addCardToTabFlow(item) {
  $(item).removeClass("link-back-card");
  $(item).removeAttr("tabindex");
}

// Handler for left arrow
function handleSliderLeft() {
  // Get index of card to right, left, and two to left
  const nextIndex =
    activeIndex + 1 <= cards.length - 1
      ? activeIndex + 1
      : 1 + activeIndex - cards.length;
  const previousIndex =
    activeIndex - 1 >= 0 ? activeIndex - 1 : cards.length - 1 + activeIndex;
  const twicePreviousIndex =
    activeIndex - 2 >= 0 ? activeIndex - 2 : cards.length - 2 + activeIndex;

  const currentCard = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);
  const previousCard = document.querySelector(
    `[data-index="${previousIndex}"]`
  );
  const twicePreviousCard = document.querySelector(
    `[data-index="${twicePreviousIndex}"]`
  );

  // Change data status of cards
  currentCard.dataset.status = "activeRight";
  previousCard.dataset.status = "activeMiddle";
  nextCard.dataset.status = "inactive";
  twicePreviousCard.dataset.status = "activeLeft";

  // Make side cards clickable
  $(nextCard).removeAttr("onclick");
  $(previousCard).removeAttr("onclick");
  $(currentCard).attr("onclick", "handleSliderRight()");
  $(twicePreviousCard).attr("onclick", "handleSliderLeft()");

  // Make sure hidden cards are not tab-able
  var currentLinks = currentCard.getElementsByTagName("a");
  for (var i = 0; i < currentLinks.length; i++) {
    removeCardFromTabFlow(currentLinks[i]);
  }
  var newLinks = previousCard.getElementsByTagName("a");
  for (var i = 0; i < newLinks.length; i++) {
    addCardToTabFlow(newLinks[i]);
  }

  $(`*[data-dots="${activeIndex}"]`).removeClass("slider-dot-selected");
  $(`*[data-dots="${previousIndex}"]`).addClass("slider-dot-selected");
  activeIndex = previousIndex;
}

// Handler for right arrow
function handleSliderRight() {
  // Get index of card to right, left, and two to right
  const nextIndex =
    activeIndex + 1 <= cards.length - 1
      ? activeIndex + 1
      : 1 + activeIndex - cards.length;
  const previousIndex =
    activeIndex - 1 >= 0 ? activeIndex - 1 : cards.length - 1 + activeIndex;
  const twiceNextIndex =
    activeIndex + 2 <= cards.length - 1
      ? activeIndex + 2
      : 2 + activeIndex - cards.length;

  const currentCard = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextCard = document.querySelector(`[data-index="${nextIndex}"]`);
  const previousCard = document.querySelector(
    `[data-index="${previousIndex}"]`
  );
  const twiceNextCard = document.querySelector(
    `[data-index="${twiceNextIndex}"]`
  );

  // Change data status of cards
  currentCard.dataset.status = "activeLeft";
  previousCard.dataset.status = "inactive";
  nextCard.dataset.status = "activeMiddle";
  twiceNextCard.dataset.status = "activeRight";

  // Make side cards clickable
  $(nextCard).removeAttr("onclick");
  $(previousCard).removeAttr("onclick");
  $(currentCard).attr("onclick", "handleSliderLeft()");
  $(twiceNextCard).attr("onclick", "handleSliderRight()");

  // Make sure hidden cards are not tab-able
  var currentLinks = currentCard.getElementsByTagName("a");
  for (var i = 0; i < currentLinks.length; i++) {
    removeCardFromTabFlow(currentLinks[i]);
  }
  var newLinks = nextCard.getElementsByTagName("a");
  for (var i = 0; i < newLinks.length; i++) {
    addCardToTabFlow(newLinks[i]);
  }

  $(`*[data-dots="${activeIndex}"]`).removeClass("slider-dot-selected");
  $(`*[data-dots="${nextIndex}"]`).addClass("slider-dot-selected");
  activeIndex = nextIndex;
}

function onDotClick(number) {
  const cardsDifference =
    number - activeIndex >= 0
      ? number - activeIndex
      : number - activeIndex + cards.length;
  const LeftOrRight = cards.length * 0.5;

  if (cardsDifference > LeftOrRight) {
    for (i = 0; i < cards.length - cardsDifference; i++) {
      handleSliderLeft();
    }
  } else {
    for (i = 0; i < cardsDifference; i++) {
      handleSliderRight();
    }
  }
}

// Functions for swipe on card carousel
function handleTouchStart(event) {
  xDown = event.touches[0].clientX;
  yDown = event.touches[0].clientY;

  pageWidth = window.innerWidth || document.body.clientWidth;
  threshold = Math.max(1, Math.floor(0.01 * pageWidth));

  document
    .getElementById("cards")
    .addEventListener("touchmove", handleTouchMove, false);
}

function handleTouchMove(event) {
  // Prevent firing if values null (i.e. no previous touchStart)
  if (!xDown || !yDown) {
    return;
  }

  var xDiff = xDown - event.touches[0].clientX;
  var yDiff = yDown - event.touches[0].clientY;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    // Prevents vertical scrolling in same motion as horizontal
    // Lifetime of listener (and prevent) is until touchEnd
    event.preventDefault();
    // Check for side swipe and direction
    if (xDiff > threshold) {
      handleSliderRight();
    } else if (xDiff < -1 * threshold) {
      handleSliderLeft();
    } else {
    }
  } else {
    // Normal scroll behaviour if more y than x
  }

  // Set values null -- otherwise, fires repeatedly within stroke
  // N.B. removing listener unlocks vertical motion within stroke but prevents repeat swiping within stroke
  xDown = null;
  yDown = null;
}
