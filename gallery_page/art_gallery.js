// filter options should be of the form gallery_Filter-Name-Shown-To-User

const gallery_table = [
  {
    name: "BITD_Digital",
    alt_text:
      "Six figures standing in shadows, with a caption reading Oxventure presents: Blades in the Dark. The four men are wearing suits(one a victorian doctor's garb, one high fashion, and the remaining two, heavy brown jackets over patterned shirts), while one woman wears a hooded cloak to cover her hair and the other wears a boxer's garb and is carrying a fully loaded rucksack. The image is a painting in watercolour and ink.",
    filter_tags: "gallery_Watercolour gallery_Pen gallery_Fan-Art",
    description:
      'Fan art of the table-top role-playing group <a href="https://www.oxventure.com/" rel="noopener noreferrer" class="external-link under-overlay"> Oxventure</a>\'s playthrough of Blades in the Dark, with each cast member drawn as their character. Based on original designs by <a href="https://www.instagram.com/themarvelousmrc" rel="noopener noreferrer" class="external-link under-overlay"> Colin Craker</a>, with linework completed in pen, colours in watercolor, and lighting effects using Affinity Photo.',
    height: "143.39",
  },
  {
    name: "BITD_Pen",
    alt_text:
      "Six figures standing in shadows, with a caption reading Oxventure presents: Blades in the Dark. The four men are wearing suits(one a victorian doctor's garb, one high fashion, and the remaining two, heavy brown jackets over patterned shirts), while one woman wears a hooded cloak to cover her hair and the other wears a boxer's garb and is carrying a fully loaded rucksack. The image is an artwork in pen.",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description:
      'Fan art of the table-top role-playing group <a href="https://www.oxventure.com/" rel="noopener noreferrer" class="external-link under-overlay"> Oxventure</a>\'s playthrough of Blades in the Dark, with each cast member drawn as their character. Based on original designs by <a href="https://www.instagram.com/themarvelousmrc" rel="noopener noreferrer" class="external-link under-overlay"> Colin Craker</a>. This image is of the base pen layer, on textured paper, which was later painted in watercolour.',
    height: "150.54",
  },
  {
    name: "Slaine",
    alt_text:
      "A celtic warrior stands at the base of a misty valley, in the centre of a stone circle. He wears a deer-skull helm, a belt with a boar's head embossed in the front, a kilt, and a large wooden cloak and is holding a glowing sword above his head. Shadowy figures emerge from behind the stones.",
    filter_tags: "gallery_Digital gallery_Fan-Art",
    description:
      "My entry into the 2000AD Art Stars competition in 2020! Inspired by Clint Langley's design of Sláine, Lord of Misrule, this piece was my first time going from sketch to full render digitally, working mostly in Paint Tool Sai, before moving into Adobe Photoshop to add lighting and colour filters.",
    height: "142.74",
  },
  {
    name: "Foxes_Digital",
    alt_text:
      "A humanoid with a fox's face and nine tails stands side-on, holding a glowing crown, but otherwise wreathed in shadow. They are wearing plate armour, save for their head, hands, and tails, and have a pensieve look on their face. The image is a painting in watercolour and ink",
    filter_tags: "gallery_Watercolour gallery_Pen gallery_Art-Trade",
    description:
      'My part of an art-share with the amazing <a href="https://www.instagram.com/flash_psd/" rel="noopener noreferrer" class="external-link under-overlay"> John Gordon</a>, where we each drew a piece based on a list of criteria provided by the other artist! My prompt was "Vulpus Rex" or "King of the Foxes" and the piece consists of a pen outline, watercolour shading, and lighting effects in Adobe Photoshop.',
    height: "125.8",
  },
  {
    name: "Foxes_Watercolour",
    alt_text:
      "A humanoid with a fox's face and nine tails stands side-on, holding a glowing crown, but otherwise wreathed in shadow. They are wearing plate armour, save for their head, hands, and tails, and have a pensieve look on their face. The image is an artwork in pen.",
    filter_tags: "gallery_Pen gallery_Art-Trade",
    description:
      'My part of an art-share with the amazing <a href="https://www.instagram.com/flash_psd/" rel="noopener noreferrer" class="external-link under-overlay"> John Gordon</a>, where we each drew a piece based on a list of criteria provided by the other artist! My prompt was "Vulpus Rex" or "King of the Foxes." This image is of the base pen layer, on textured paper, which was later painted with watercolour.',
    height: "129.06",
  },
  {
    name: "Byrnison",
    alt_text:
      "A pencil sketch of a polar bear with a scarred face, standing over a Texan man wearing a cowboy hat and woolen coat, alongside a hare. The man has a short beard and moustache. All three are only shown from the shoulders up.",
    filter_tags: "gallery_Fan-Art gallery_Pencil",
    description:
      "A pencil sketch of Lee Scoresby (Lin Manuel Miranda), his daemon the hare Hester, and the panserbjørn Iorek Byrnison from the TV series His Dark Materials, based on the book series of the same name by Philip Pullman. By using a technical pencil and varied line weights, I was able to mimic the textures of materials such as fur and wool.",
    height: "248.14",
  },
  {
    name: "Breakquest_Watercolour",
    alt_text: "",
    filter_tags: "gallery_Fan-Art gallery_Pen gallery_Watercolour",
    description: "",
    height: "213.65",
  },
  {
    name: "Breakquest_Pen",
    alt_text: "",
    filter_tags: "gallery_Fan-Art gallery_Pen",
    description: "",
    height: "214.3",
  },
  {
    name: "Croc_Monochrome",
    alt_text: "",
    filter_tags: "gallery_Pencil gallery_Pen gallery_Art-Trade",
    description: "",
    height: "136.23",
  },
  {
    name: "Croc_Sepia",
    alt_text: "",
    filter_tags: "gallery_Pencil gallery_Pen gallery_Art-Trade",
    description: "",
    height: "136.23",
  },
  {
    name: "Gargoyle",
    alt_text: "",
    filter_tags: "gallery_Acrylic",
    description: "",
    height: "198.69",
  },
  {
    name: "Hellblade_Monochrome",
    alt_text: "",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description: "",
    height: "244.89",
  },
  {
    name: "Hellblade_Pen",
    alt_text: "",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description: "",
    height: "280.01",
  },
  {
    name: "Neverwinter_Mice_Digital",
    alt_text: "",
    filter_tags: "gallery_Pen gallery_Fan-Art gallery_Digital",
    description: "",
    height: "122.55",
  },
  {
    name: "Neverwinter_Mice_Pen",
    alt_text: "",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description: "",
    height: "125.15",
  },
  {
    name: "Jakub",
    alt_text: "",
    filter_tags: "gallery_Pencil gallery_Portrait",
    description: "",
    height: "153.8",
  },
  {
    name: "Layton_Switch",
    alt_text: "",
    filter_tags: "gallery_Fan-Art gallery_Digital",
    description: "",
    height: "155.75",
  },
  {
    name: "Trunchbull",
    alt_text: "",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description: "",
    height: "247.49",
  },
];

$(document).ready(function () {
  // Loop through table, generate map, generate set for filters, generate html for page
  var description_map = new Map();
  var filter_set = new Set();
  var masonryContainer = document.getElementById("masonry-container");
  var filterColumns = document.getElementById("filter-columns");

  gallery_table.forEach(addGalleryImage);
  var filter_array = Array.from(filter_set).sort();
  filter_array.forEach(addFilterButton);

  function createElement(type, props) {
    var element = document.createElement(type);
    for (var prop in props) {
      element.setAttribute(prop, props[prop]);
    }
    return element;
  }

  // Add image from table to gallery as button
  function addGalleryImage(item) {
    var newButton = createElement("button", {
      class:
        "gallery-thumb-wrapper under-modal-overlay under-overlay " +
        item.filter_tags +
        " ",
      "aria-controls": "gallery-modal",
      "aria-expanded": "false",
      "aria-label": "Open high resolution version of image" + item.name,
      id: item.name,
    });

    var newImage = createElement("img", {
      height: item.height,
      class: "gallery-thumb lazyload",
      "data-src": "/gallery_page/gallery_images/" + item.name + "_200px.webp",
      loading: "lazy",
      alt: item.alt_text,
    });

    item.filter_tags.split(" ").forEach(function (filterName) {
      filter_set.add(filterName);
    });

    description_map.set(item.name, item.description);
    newButton.appendChild(newImage);
    masonryContainer.appendChild(newButton);
  }

  // Add filter option checkbox to list
  function addFilterButton(filterName) {
    // Construct id, aria label, and inner html from filterName
    var filterNameGalleryless = filterName.split("_")[1];
    var filterNameWords = filterNameGalleryless.replace(/-/g, " ");

    var newIcon = createElement("i", {
      class: "abstract-icon icon-checkbox-unchecked",
    });

    var newButton = createElement("button", {
      class:
        "modal-button under-modal-overlay under-overlay gallery-filter-button",
      id: filterName,
      type: "checkbox",
      "aria-controls": "masonry-container",
      "aria-label": "filters gallery to show only " + filterNameWords,
    });

    newButton.appendChild(newIcon);
    newButton.innerHTML += filterNameWords;
    filterColumns.appendChild(newButton);
    filterColumns.appendChild(createElement("br", {}));
  }

  $(".close-gallery-modal").click(function () {
    $(".gallery-thumb-wrapper").removeClass("modal-toggled");
    $("#gallery-modal").removeClass("modal-toggled");

    $(".gallery-thumb-wrapper").attr("aria-expanded", "false");
    $("#close-gallery-modal-button").attr("aria-expanded", "false");
    $("#next-gallery-modal-button").attr("aria-expanded", "false");
    $("#previous-gallery-modal-button").attr("aria-expanded", "false");

    $("#body").removeClass("toggled");
    $("#modal-overlay").delay(50).fadeOut(250);
    $(".under-modal-overlay:not(.link-back-card)").each(function () {
      $(this).removeAttr("tabindex");
    });
  });

  $(".gallery-thumb-wrapper").click(function () {
    $("#modal-overlay").fadeIn(400);
    $("#body").addClass("toggled");
    $(".under-modal-overlay").each(function () {
      $(this).attr("tabindex", "-1");
    });

    $("#gallery-modal-img").attr(
      "src",
      "/gallery_page/gallery_images/" + $(this).attr("id") + ".webp"
    );
    $("#gallery-modal-img").attr("data-lightbox", $(this).attr("id"));

    document.getElementById("gallery-modal-description").innerHTML =
      description_map.get($(this).attr("id"));

    $(this).addClass("modal-toggled");
    $("#gallery-modal").addClass("modal-toggled");

    $(".gallery-thumb-wrapper").attr("aria-expanded", "true");
    $("#close-gallery-modal-button").attr("aria-expanded", "true");
    $("#next-gallery-modal-button").attr("aria-expanded", "true");
    $("#previous-gallery-modal-button").attr("aria-expanded", "true");
  });

  // Code for next and previous buttons (edit to only move between non-invisible)
  $("#previous-gallery-modal-button").click(function () {
    var currentLightbox = $("#gallery-modal-img");
    var firstGalleryImage = document.querySelectorAll(
      ".gallery-thumb-wrapper:not(.gallery-image-hidden):first-child"
    );
    if (currentLightbox.attr("data-lightbox") != firstGalleryImage) {
      $(".gallery-thumb-wrapper").removeClass("modal-toggled");
      $("#" + currentLightbox.attr("data-lightbox"))
        .prevAll(".gallery-thumb-wrapper:not(.gallery-image-hidden):lt(1)")
        .click();
    }
  });

  $("#next-gallery-modal-button").click(function () {
    var currentLightbox = $("#gallery-modal-img");
    var lastGalleryImage = document.querySelectorAll(
      ".gallery-thumb-wrapper:not(.gallery-image-hidden):last-child"
    );
    if (currentLightbox.attr("data-lightbox") != lastGalleryImage) {
      $(".gallery-thumb-wrapper").removeClass("modal-toggled");
      $("#" + currentLightbox.attr("data-lightbox"))
        .nextAll(".gallery-thumb-wrapper:not(.gallery-image-hidden):lt(1)")
        .click();
    }
  });

  const galleryModal = document.getElementById("gallery-modal");

  document.addEventListener("keydown", (event) => {
    if (galleryModal.classList.contains("modal-toggled")) {
      switch (event.key) {
        case "ArrowLeft":
          $("#previous-gallery-modal-button").click();
          break;
        case "ArrowRight":
          $("#next-gallery-modal-button").click();
          break;
        case "Escape":
          $(".close-gallery-modal").click();
      }
    }
  });

  // Add code to generate buttons here

  $(".gallery-filter-button").click(function () {
    $(this).children("i").toggleClass("icon-checkbox-unchecked");
    $(this).children("i").toggleClass("icon-checkbox-checked");
    $(this).toggleClass("toggled");

    var activeButtons = [];
    $(".gallery-filter-button").each(function () {
      if ($(this).hasClass("toggled")) {
        activeButtons.push($(this).attr("id"));
      }
    });
    switch (activeButtons.length == 0) {
      case true:
        $(".gallery-thumb-wrapper").removeClass("gallery-image-hidden");
        break;
      case false:
        var classCheck = "." + activeButtons.join(".");
        $(".gallery-thumb-wrapper").each(function () {
          switch ($(this).filter(classCheck).length === 0) {
            case false:
              $(this).removeClass("gallery-image-hidden");
              break;
            case true:
              $(this).addClass("gallery-image-hidden");
              break;
          }
        });
        break;
    }
  });

  $("#clear-filters-button").click(function () {
    $(".gallery-filter-button").removeClass("toggled");
    $(".gallery-filter-button")
      .children("i")
      .removeClass("icon-checkbox-checked");
    $(".gallery-filter-button")
      .children("i")
      .addClass("icon-checkbox-unchecked");
    $(".gallery-thumb-wrapper").removeClass("gallery-image-hidden");
  });
});

// Code for filter (add and remove hidden class to classlist)
// Modify next and back arrows to only go to next image without hidden class
// Add in alt_text, aria_label
