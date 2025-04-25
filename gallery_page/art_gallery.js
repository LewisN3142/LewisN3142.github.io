$(document).ready(function () {
  const gallery_table = [
    {
      name: "BITD_Digital",
      alt_text:
        "Six figures standing in shadows, with a caption reading Oxventure presents: Blades in the Dark. The four men are wearing suits(one a victorian doctor's garb, one high fashion, and the remaining two, heavy brown jackets over patterned shirts), while one woman wears a hooded cloak to cover her hair and the other wears a boxer's garb and is carrying a fully loaded rucksack. The image is a painting in watercolour and ink.",
      filter_tags: "gallery_watercolour gallery_pen gallery_fanart",
      description:
        'Fan art of the table-top role-playing group <a href="https://www.oxventure.com/" rel="noopener noreferrer" class="external-link under-overlay"> Oxventure</a>\'s playthrough of Blades in the Dark, with each cast member drawn as their character. Based on original designs by <a href="https://www.instagram.com/themarvelousmrc" rel="noopener noreferrer" class="external-link under-overlay"> Colin Craker</a>, with linework completed in pen, colours in watercolor, and lighting effects using Affinity Photo.',
    },
    {
      name: "BITD_Pen",
      alt_text:
        "Six figures standing in shadows, with a caption reading Oxventure presents: Blades in the Dark. The four men are wearing suits(one a victorian doctor's garb, one high fashion, and the remaining two, heavy brown jackets over patterned shirts), while one woman wears a hooded cloak to cover her hair and the other wears a boxer's garb and is carrying a fully loaded rucksack. The image is an artwork in pen.",
      filter_tags: "gallery_pen gallery_fanart",
      description:
        'Fan art of the table-top role-playing group <a href="https://www.oxventure.com/" rel="noopener noreferrer" class="external-link under-overlay"> Oxventure</a>\'s playthrough of Blades in the Dark, with each cast member drawn as their character. Based on original designs by <a href="https://www.instagram.com/themarvelousmrc" rel="noopener noreferrer" class="external-link under-overlay"> Colin Craker</a>. This image is of the base pen layer, on textured paper, which was later painted in watercolour.',
    },
    {
      name: "Slaine",
      alt_text:
        "A celtic warrior stands at the base of a misty valley, in the centre of a stone circle. He wears a deer-skull helm, a belt with a boar's head embossed in the front, a kilt, and a large wooden cloak and is holding a glowing sword above his head. Shadowy figures emerge from behind the stones.",
      filter_tags: "gallery_digital gallery_fanart",
      description:
        "My entry into the 2000AD Art Stars competition in 2020! Inspired by Clint Langley's design of Sláine, Lord of Misrule, this piece was my first time going from sketch to full render digitally, working mostly in Paint Tool Sai, before moving into Adobe Photoshop to add lighting and colour filters.",
    },
    {
      name: "Foxes_Digital",
      alt_text:
        "A humanoid with a fox's face and nine tails stands side-on, holding a glowing crown, but otherwise wreathed in shadow. They are wearing plate armour, save for their head, hands, and tails, and have a pensieve look on their face. The image is a painting in watercolour and ink",
      filter_tags: "gallery_watercolour gallery_pen gallery_trade",
      description:
        'My part of an art-share with the amazing <a href="https://www.instagram.com/flash_psd/" rel="noopener noreferrer" class="external-link under-overlay"> John Gordon</a>, where we each drew a piece based on a list of criteria provided by the other artist! My prompt was "Vulpus Rex" or "King of the Foxes" and the piece consists of a pen outline, watercolour shading, and lighting effects in Adobe Photoshop.',
    },
    {
      name: "Foxes_Watercolour",
      alt_text:
        "A humanoid with a fox's face and nine tails stands side-on, holding a glowing crown, but otherwise wreathed in shadow. They are wearing plate armour, save for their head, hands, and tails, and have a pensieve look on their face. The image is an artwork in pen.",
      filter_tags: "gallery_pen gallery_trade",
      description:
        'My part of an art-share with the amazing <a href="https://www.instagram.com/flash_psd/" rel="noopener noreferrer" class="external-link under-overlay"> John Gordon</a>, where we each drew a piece based on a list of criteria provided by the other artist! My prompt was "Vulpus Rex" or "King of the Foxes." This image is of the base pen layer, on textured paper, which was later painted with watercolour.',
    },
    {
      name: "Byrnison",
      alt_text:
        "A pencil sketch of a polar bear with a scarred face, standing over a Texan man wearing a cowboy hat and woolen coat, alongside a hare. The man has a short beard and moustache. All three are only shown from the shoulders up.",
      filter_tags: "gallery_fanart gallery_pencil",
      description:
        "A pencil sketch of Lee Scoresby (Lin Manuel Miranda), his daemon the hare Hester, and the panserbjørn Iorek Byrnison from the TV series His Dark Materials, based on the book series of the same name by Philip Pullman. By using a technical pencil and varied line weights, I was able to mimic the textures of materials such as fur and wool.",
    },
    {
      name: "Breakquest_Watercolour",
      alt_text: "",
      filter_tags: "gallery_fanart gallery_pen gallery_watercolour",
      description: "",
    },
    {
      name: "Breakquest_Pen",
      alt_text: "",
      filter_tags: "gallery_fanart gallery_pen",
      description: "",
    },
    {
      name: "Croc_Monochrome",
      alt_text: "",
      filter_tags: "gallery_pencil gallery_pen gallery_trade",
      description: "",
    },
    {
      name: "Croc_Sepia",
      alt_text: "",
      filter_tags: "gallery_pencil gallery_pen gallery_trade",
      description: "",
    },
    {
      name: "Gargoyle",
      alt_text: "",
      filter_tags: "gallery_acrylic",
      description: "",
    },
    {
      name: "Hellblade_Monochrome",
      alt_text: "",
      filter_tags: "gallery_pen gallery_fanart",
      description: "",
    },
    {
      name: "Hellblade_Pen",
      alt_text: "",
      filter_tags: "gallery_pen gallery_fanart",
      description: "",
    },
    {
      name: "Neverwinter_Mice_Digital",
      alt_text: "",
      filter_tags: "gallery_pen gallery_fanart gallery_digital",
      description: "",
    },
    {
      name: "Neverwinter_Mice_Pen",
      alt_text: "",
      filter_tags: "gallery_pen gallery_fanart",
      description: "",
    },
  ];

  // Loop through table, generate map, generate html for page
  var description_map = new Map();
  gallery_table.forEach(addGalleryImage);

  function createElement(type, props) {
    var element = document.createElement(type);
    for (var prop in props) {
      element.setAttribute(prop, props[prop]);
    }
    return element;
  }

  function addGalleryImage(item) {
    var newButton = createElement("button", {
      class: "gallery-thumb-wrapper under-modal-overlay under-overlay",
      "aria-controls": "gallery-modal",
      "aria-expanded": "false",
      "aria-label": "Open high resolution version of image" + item.name,
      id: item.name,
    });

    var newImage = createElement("img", {
      class: "gallery-thumb " + item.filter_tags,
      src: "/gallery_page/gallery_images/" + item.name + "_200px.webp",
      srcset:
        "/gallery_page/gallery_images/" +
        item.name +
        "_300px.webp 300w, /gallery_page/gallery_images/" +
        item.name +
        "_200px.webp 200w",
      sizes: "(min-width: 300px) 300px, 200px",
      loading: "lazy",
      alt: item.alt_text,
    });

    description_map.set(item.name, item.description);

    newButton.appendChild(newImage);
    document.getElementById("masonry-container").appendChild(newButton);
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

  // Automatically find id of first and last thumbnails (without invisible class)
  const firstGalleryImage = document.querySelectorAll(
    ".gallery-thumb-wrapper:first-child"
  );
  const lastGalleryImage = document.querySelectorAll(
    ".gallery-thumb-wrapper:last-child"
  );

  // Code for next and previous buttons (edit to only move between non-invisible)
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
      }
    }
  });
});

// Code for filter (add and remove hidden class to classlist)
// Modify next and back arrows to only go to next image without hidden class
// Add in alt_text, aria_label
