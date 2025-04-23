$(document).ready(function () {
  const gallery_table = [
    {
      name: "BITD_Digital",
      alt_text: "",
      filter_tags: "",
      description: "description goes here",
    },
    {
      name: "BITD_Pen",
      alt_text: "",
      filter_tags: "",
      description: "second description goes here",
    },
    {
      name: "Slaine",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Foxes_Digital",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Foxes_Watercolour",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Byrnison",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Breakquest_Pen",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Breakquest_Watercolour",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Croc_Monochrome",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Croc_Sepia",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Gargoyle",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Hellblade_Monochrome",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Hellblade_Pen",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Neverwinter_Mice_Digital",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
    {
      name: "Neverwinter_Mice_Pen",
      alt_text: "",
      filter_tags: "",
      description: "",
    },
  ];

  // Loop through table, generate map, generate html for page
  var description_map = new Map();
  gallery_table.forEach(addGalleryImage);

  function addGalleryImage(item) {
    var newButton = document.createElement("button");
    newButton.setAttribute(
      "class",
      "gallery-thumb-wrapper under-modal-overlay under-overlay"
    );
    newButton.setAttribute("aria-controls", "gallery-modal");
    newButton.setAttribute("aria-expanded", "false");
    newButton.setAttribute(
      "aria-label",
      "Open high resolution version of image" + item.name
    );
    newButton.setAttribute("id", item.name);

    var newImage = document.createElement("img");
    newImage.setAttribute("class", "gallery-thumb " + item.filter_tags);
    newImage.setAttribute(
      "src",
      "/gallery_page/gallery_images/" + item.name + "_200px.webp"
    );
    newImage.setAttribute(
      "srcset",
      "/gallery_page/gallery_images/" +
        item.name +
        "_300px.webp 300w, /gallery_page/gallery_images/" +
        item.name +
        "_200px.webp 200w"
    );
    newImage.setAttribute("sizes", "(min-width: 300px) 300px, 200px");
    newImage.setAttribute("loading", "lazy");
    newImage.setAttribute("alt", item.alt_text);

    description_map.set(item.name, item.description);

    newButton.appendChild(newImage);
    document.getElementById("masonry-container").appendChild(newButton);
  }

  // Move code for gallery classes here (may need to put overlay code into gallery)
  // Add into code line which queries map to get description for modal

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
});

// Code for filter (add and remove hidden class to classlist)
// Modify next and back arrows to only go to next image without hidden class
// Clean up lighthouse
// Add in alt_text, filter_tags, aria_label, aria_controls
// Apply to youtube
