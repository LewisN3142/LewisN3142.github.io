$(document).ready(function () {
  // Make site responsive to touch --- check on phone once launched, if not then delete
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
  }
  touchResponsive();

  // Array of youtube videos
  const youtubeVideos = [
    "https://www.youtube-nocookie.com/embed/gl8woxgskpk?si=KfwK3Plrbl34ObcO",
    "https://www.youtube-nocookie.com/embed/UdXt0zCdXx0?si=Lbiwp3kXuC9BLUmh",
    "https://www.youtube-nocookie.com/embed/COfr4pO0xhQ?si=ObKivNDG64PEqd8f",
    "https://www.youtube-nocookie.com/embed/89ecHE_GG0k?si=N98Qx_eNgZvrgRiM",
    "https://www.youtube-nocookie.com/embed/60e2DCMoeoA?si=2DXNYMXpE6iqvxWO",
    "https://www.youtube-nocookie.com/embed/rZR0UTPrJ24?si=yVzznREq54MbhYT9",
    "https://www.youtube-nocookie.com/embed/PkDWMIyObCU?si=6D6WarGe0vYrRsdK",
    "https://www.youtube-nocookie.com/embed/K9DEszNY6IU?si=6_fNK1mqJgPqqi9I",
    "https://www.youtube-nocookie.com/embed/U0X1DeYR4uo?si=N2MDmRK2E5N3FAMD",
    "https://www.youtube-nocookie.com/embed/MRs7N0meki8?si=ChOPdk55MESVkMhZ",
    "https://www.youtube-nocookie.com/embed/wXBImOHn-kI?si=EiHPODa0Xzszb7P1",
    "https://www.youtube-nocookie.com/embed/KrmJYDkSSYs?si=pELZR0kSKcc4AIXW",
    "https://www.youtube-nocookie.com/embed/xErWYscdks0?si=RiUIh7YNmmH1wHaY",
    "https://www.youtube-nocookie.com/embed/9afZQmuEDZg?si=EnZ8KiPIBHNCCqbh",
    "https://www.youtube-nocookie.com/embed/1fI4LjS3LHA?si=qeIX0A6t4bDxbZzg",
    "https://www.youtube-nocookie.com/embed/SW9R0oJLPYY?si=hKE80GcEzq6I-dAd",
    "https://www.youtube-nocookie.com/embed/v5ERm5jDzXU?si=p7wW1dNrNy8Yi8LY",
  ];

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
  $("#terms-conditions").click(function () {
    $(".modal").toggleClass("modal-toggled");
    $(this).attr("aria-expanded", "true");
    $("#close-terms-button").attr("aria-expanded", "true");
    $(this).addClass("modal-toggled");
    $("#modal-overlay").fadeIn(400);
    $("#body").addClass("toggled");

    $(".under-modal-overlay").each(function () {
      $(this).attr("tabindex", "-1");
    });
  });

  function onModalClose() {
    $(".modal").toggleClass("modal-toggled");
    $("#terms-conditions").attr("aria-expanded", "false");
    $("#close-terms-button").attr("aria-expanded", "false");
    $("#terms-conditions").removeClass("modal-toggled");
    $("#body").removeClass("toggled");
    $("#modal-overlay").delay(50).fadeOut(250);

    $(".under-modal-overlay:not(.link-back-card)").each(function () {
      $(this).removeAttr("tabindex");
    });
  }

  // Add respective class to any button which closes the modal
  $(".close-modal").click(function () {
    onModalClose();
  });

  $("#gform").on("submit", function (e) {
    $("#gform *").fadeOut(300);
    $("#contact-submitted-text").delay(300).fadeIn(150);
  });

  // Code that manages the banjo button audio
  /* var banjoAudio = document.getElementById("banjoAudio");

  function banjoButtonUnpress() {
    $(".banjo-button").each(function () {
      $(this).removeClass("banjo-button-pressed");
      banjoAudio.pause();
    });
  }

  $(".banjo-button").click(function () {
    if ($(this).hasClass("banjo-button-pressed")) {
    } else {
      $(this).addClass("banjo-button-pressed");
      banjoAudio.currentTime = 0;
      banjoAudio.play();
      setTimeout(() => {
        banjoButtonUnpress();
      }, 3000);
    }
  });
  */

  $(".youtube-thumb-wrapper").click(function () {
    $(this).attr("aria-expanded", "true");
    var $iframe = $(this).parent().parent().parent().next(".youtube-video");
    var $dataIndex = $(this).attr("data-video-number");
    $iframe.attr(
      "src",
      youtubeVideos[$dataIndex] + "&rel=0&modest-branding=1&mute=1"
    );
    $iframe.addClass("youtube-video-loaded");
    $iframe.show();
  });
});

// Card Carousel Buttons etc
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

  activeIndex = nextIndex;
}
