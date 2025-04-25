$(document).ready(function () {
  const videos_table = [
    {
      title: "Returnal &ndash; Phrike Zero Damage Run",
      video: "gl8woxgskpk?si=KfwK3Plrbl34ObcO",
      imageID: "Returnal_Phrike",
      alt: "Thumbnail showing Returnal gameplay. Image displays a sci-fi astronaut shooting an alien, while dodging glowing, spherical projectiles.",
      description: [
        "Back in September of 2022, while playing Returnal on PS5 for the first time, I finally made it to Phrike, the boss of the initial biome. Despite never having seen the boss before, my first attempt ended up being a zero damage run! Unfortunately, it wasn't quite a no-hit run as I was knocked over by a melee attack about half way through the fight. This game is stunning and so fun to play!",
      ],
      article: "Gameplay",
    },
    {
      title: "Sifu &ndash; Above The Skyscrapers Gold Stamp in 4 Hits",
      video: "UdXt0zCdXx0?si=Lbiwp3kXuC9BLUmh",
      imageID: "Sifu_Skyscraper",
      alt: "Thumbnail showing Sifu gameplay. Image displays the bearded protagonist in hand-to-hand combat with a stocky man in a tracksuit.",
      description: [
        "Following the release of Sifu's final update for the Arenas Expansion in September 2023, I began working my way through the Tiger Arena Challenges. This clip in particular comes from a gold stamp run of the 'Above the Skyscrapers' arena, in which one has to beat waves of enemies while remaining below age 33 (i.e. without dying) in order to get all three regular stamps and do so while being hit fewer than 6 times in order to obtain the gold stamps.",
      ],
      article: "Gameplay",
    },
    {
      title:
        "The Last of Us Part II &ndash; I Didn't Know You Could One-Shot These Enemies!",
      video: "9afZQmuEDZg?si=EnZ8KiPIBHNCCqbh",
      imageID: "TLOU_Headshot",
      alt: "Thumbnail displaying The Last of Us 2 gameplay. The image shwos a young girl with a bow and arrow on her back, walking in a crouched pose through an abandoned shop.",
      description: [
        "The title really says it all! I was surprised that I actually made this shot, let alone that it insta-killed the brute. This was my second run through this area of the game, so I wasn't exactly caught by surprise when the enemy appeared, however my previous attempt absolutely chewed through my resources as I ran around the interior of the shop. This run through was a lot more efficient!",
      ],
      article: "Gameplay",
    },
    {
      title: "Ghostrunner Demo &ndash; An Awakening in 1:27.15",
      video: "COfr4pO0xhQ?si=ObKivNDG64PEqd8f",
      imageID: "Ghostrunner_Demo",
      alt: "Thumbnail of Ghostrunner gameplay. The image is a first person view of the interior to a large industrial building covered in wires and beams. The player character is holding a sword.",
      description: [
        "This is a single-level in-bounds speedrun of the first stage from the Ghostrunner demo, namely 'An Awakening,' completed on PS4 in May of 2021. The route used was my own, based on the world record at the time, with a couple of the extended dashing tricks (like the air ground dash) replaced with more straightforward, yet slower, routing. As the in-game timer and death counter did not correctly display during the run, this attempt could not be submitted to the leaderboards.",
      ],
      article: "Speedrun",
    },
    {
      title: "Ghostrunner 2 &ndash; Full Demo in 6:07.97",
      video: "89ecHE_GG0k?si=N98Qx_eNgZvrgRiM",
      imageID: "Ghostrunner_2",
      alt: "Thumbnail showing Ghostrunner 2 gameplay. The image displays the final time of 6:07.97 and number of deaths as 9, with the phrase `Thank you for running' in large text at the top.",
      description: [
        "Here is a speedrun of the full demo for Ghostrunner 2, completed in September of 2023 on PS5. Having messed around with running the demo for the first Ghostrunner game during the COVID19 pandemic, I just had to pick this up after it was announced. There is one trick I do not go for at 2:22 in the video, which involves doing a super jump off a ledge to skip having to set up the fan stored in the side room. I couldn't make the skip consistent at the time, but a little practice would probably make it viable.",
      ],
      article: "Speedrun",
    },
    {
      title: "Astro's Playroom &ndash; Climbing Run in 20.01",
      video: "60e2DCMoeoA?si=2DXNYMXpE6iqvxWO",
      imageID: "Astro_Climbing",
      alt: "Thumbnail showing gameplay of the climbing run challenge from Astro's Playroom. A robotic monkey is half way up a mechanical climbing wall embedded into a cliff in the forest.",
      description: [
        "My attempt at speedrunning the Climbing Run challenge from Astro's Playroom on PS5 from September of 2021. This challenge utilised the adaptive trigger technology of the Dualsense and involved pressing the triggers at speed to climb a wall, where some of the rocks were fragile and would break if you pressed too hard. At the time this was recorded, I was grinding low times in all of the Network Speed Run challenges and reached 213th place globally.",
      ],
      article: "Speedrun",
    },
    {
      title: "Astro's Playroom &ndash; Hopping Run in 26.80",
      video: "rZR0UTPrJ24?si=yVzznREq54MbhYT9",
      imageID: "Astro_Hopping",
      alt: "Thumbnail showing gameplay of the hopping run in Astro's Playroom. The image shows a robotic frog standing in the middle of a podium, with confetti in the air and palm trees in the background.",
      description: [
        "My attempt at speedrunning the Hopping Run challenge from Astro's Playroom on PS5 from September of 2021. Much of the challenge involved pressing/releasing the adaptive triggers to jump at the earliest opportunity upon landing and turning while doing so. Note, this run was re-timed by myself, since the recording did not include the challenge end-card. As such, the time is only approximate and likely an over-estimate.",
      ],
      article: "Speedrun",
    },
    {
      title: "Astro's Playroom &ndash; Jetpack Run in 37.73",
      video: "PkDWMIyObCU?si=6D6WarGe0vYrRsdK",
      imageID: "Astro_Jetpack",
      alt: "Thumbnail showing gameplay of the jetpack run from Astro's Playroom. The image shows Astro in a small flying saucer, travelling through the interior of a larger spaceship. Two enemy robots block the exit.",
      description: [
        "My attempt at speedrunning the Jetpack Run challenge from Astro's Playroom on PS5 from September of 2021. Again this run utilises the adaptive triggers combined with motion controls to guide Astro-bot through a fixed course, with the player attempting to avoid obstacles and take corners as tightly as possible.",
      ],
      article: "Speedrun",
    },
    {
      title: "Astro's Playroom &ndash; Rolling Run in 32.86",
      video: "K9DEszNY6IU?si=6_fNK1mqJgPqqi9I",
      imageID: "Astro_Rolling",
      alt: "Thumbnail showing gameplay of the rolling run from Astro's Playroom. The image shows a ball, being controlled by the player, rolling along a muddy, winding track with several obstacles to avoid.",
      description: [
        "My attempt at speedrunning the Rolling Run challenge from Astro's Playroom from September of 2021. Unlike the other challenges shown above, this one uses the trackpad to steer a rolling ball along a course, while the haptic feedback simulates the textures of surfaces such as mud and metal. Rhythm and steering are again the most important factors for this challenge.",
      ],
      article: "Speedrun",
    },
    {
      title: "Bloodborne &ndash; Sewer Skip (PS4 &ndash; Unedited)",
      video: "U0X1DeYR4uo?si=N2MDmRK2E5N3FAMD",
      imageID: "Bloodborne_Sewer",
      alt: "Thumbnail showing the Bloodborne main menu. The image features a man in a long leather coat and tricorn hat, holding a gun and saw. This is overlaid with the title of the game.",
      description: [
        "In this clip, I demonstrate Sewer Skip from Bloodborne &ndash; a speedrun skip used to skip the sewers of Central Yharnam. This is done by jumping onto a railing above the sewers and walking along until you can drop off at the end and land on the bridge by the shortcut. In this clip I miss the fence and choose to reload, since when I touch the top of the fence on the way past, the game sets that as my last 'stable ground,' the place where the player is positioned when the game reloads.",
      ],
      article: "Speedrun",
    },
    {
      title: "Bloodborne &ndash; Old Yharnam Skip (PS4 &ndash; Unedited)",
      video: "MRs7N0meki8?si=ChOPdk55MESVkMhZ",
      imageID: "Bloodborne_Old_Yharnam",
      alt: "Thumbnail displaying Bloodborne gameplay. A man dressed in a long black coat and tricorn stands next to a floor-level lantern in a dusty, abandoned hall.",
      description: [
        "Here I demonstrate Old Yharnam Skip from Bloodborne &ndash; a speedrun skip used to reach the Blood Starved Beast boss without traversing the bulk of Old Yharnam (this also avoids Hunder Djura). We do this by abusing player jump height to clear the fence at the start of the area and get out of bounds. The rooftops have very little collision, but by carefully moving along the pieces that do, we can reach the street below. Note that the traversable regions do not match the parts of the roof that render in.",
      ],
      article: "Speedrun",
    },
    {
      title: "Bloodborne &ndash; Hut Skip (PS4 &ndash; Unedited)",
      video: "wXBImOHn-kI?si=EiHPODa0Xzszb7P1",
      imageID: "Bloodborne_Hut",
      alt: "Thumbnail displaying Bloodborne gameplay. The image shows a figure dressed in a long black coat and tricorn standing on some rocks in a forest.",
      description: [
        "This clip is a demonstration of Hut Skip from Bloodborne &ndash; a speedrun skip used to bypass the middle section of the Forbidden Woods area. We do this by rolling off a rock to clip out of bounds, traversing through out of bounds while avoiding objects without collision, and climbing onto a second stack of rocks. From here, careful camera positioning using an R1 attack lines us up with the corner of the hut, allowing us to roll onto an invisible wall that runs along the side of the building. We can then roll into the hut, since the wall does not have collision this high up.",
        "The second part of this glitch abuses the collision of the wooden beams in the lift shaft inside the hut &ndash; we can land half way down (taking a little fall damage) and then drop to the bottom where we can then proceed to fight the Shadows of Yharnam.",
      ],
      article: "Speedrun",
    },
    {
      title: "Bloodborne &ndash; Yahar'gul Skip (PS4 &ndash; Unedited)",
      video: "KrmJYDkSSYs?si=pELZR0kSKcc4AIXW",
      imageID: "Bloodborne_Yahargul",
      alt: "Thumbnail displaying Bloodborne gameplay. A topless man is falling from the roof of a gothic manor onto the balcony of the first  floor.",
      description: [
        "Now we have a demonstration of Yahar'gul Skip from Bloodborne &ndash; a speedrun skip used to reach The One Reborn shortly after entering the area. This skip is characterised by the poor collision of the fence shown at the beginning of the clip &ndash; with the correct angle and enough speed, you can just walk straight through it!",
        "The setup used here makes the skip more consistent, since there are enemies off-camera targeting the player. We transform the Saw Cleaver, backstep, transform attack, and then use a charged R2 in order to clip through the fence. This ensures that we make it through and puts us far enough forward that we land on solid ground on the other side, rather than falling into the building.",
      ],
      article: "Speedrun",
    },
    {
      title:
        "Bloodborne &ndash; Nightmare Frontier Skip (PS4 &ndash; Loads Cut)",
      video: "xErWYscdks0?si=RiUIh7YNmmH1wHaY",
      imageID: "Bloodborne_Nightmare",
      alt: "Thumbnail displaying Bloodborne gameplay. A topless man holding a gun and saw stands at the top of a lift shaft. The floor is covered in etched green tile.",
      description: [
        "Finally in this series, we have a demonstration of Nightmare Frontier Skip from Bloodborne &ndash; a speedrun skip used to reach the Amygdala boss fight directly from the Nightmare Frontier lantern, via the shortcut lift. We do this by falling down the lift shaft and bouncing off a ledge, setting that as stable ground. We then quit-out (loading screens have been cut here) and when we load back in, we are on the ledge, far enough down the lift shaft that we no longer die due to fall damage when we jump down. An emote is used to line up the initial fall and time the quit-out.",
      ],
      article: "Speedrun",
    },
    {
      title: "Atomic Heart &ndash; Doors Are Just A Suggestion",
      video: "1fI4LjS3LHA?si=qeIX0A6t4bDxbZzg",
      imageID: "Atomic_Glitch1",
      alt: "Thumbnail displaying Atomic Heart gameplay. The image is a first person view of the player holding a pistol and walking down a clean, polished, sci-fi corridor. The room is all white with a red fabric carpet along the middle.",
      description: [
        "Here's a glitch from Atomic Heart on PS5 I stumbled across during a casual playthrough. I'm not entirely sure what the trigger is yet, but in some circumstances, the player character can walk through a closed door as if it were not there at all. It doesn't appear to work on every door (but could be useful for bypassing puzzle locks) and in this clip it seems to be related to using the scanner and closing a door at the same time. More testing required...",
      ],
      article: "Glitches",
    },
    {
      title: "Ghostrunner &ndash; Walls Are Just A Suggestion",
      video: "SW9R0oJLPYY?si=hKE80GcEzq6I-dAd",
      imageID: "Ghostrunner_Glitch1",
      alt: "Thumbnail displaying Ghostrunner gameplay. The screen shows a black and red first-person view of an industrial environment. An overlay reads `Critical Failure, Restart from Checkpoint'.",
      description: [
        "This clip shows a glitch I encountered while learning the in-bounds speedrun route of the Ghostrunner level 'An Awakening.' Attempting to wall run on the steel beam structure on the corner of a wall causes the player character to get stuck in the collision and clip out of bounds, before falling to the kill-plane below. Unfortunately, the glitch isn't too useful for out-of-bounds runs as the current route skips this section of the level, but could be a useful back-up strategy for marathons.",
      ],
      article: "Glitches",
    },
    {
      title:
        "God of War Ragnarök &ndash; No Door? But There Must Be A Way Inside!",
      video: "v5ERm5jDzXU?si=p7wW1dNrNy8Yi8LY",
      imageID: "GoW_Ragnarok_Glitch1",
      alt: "Thumbnail displaying God of War gameplay. The image shows two figures, one a muscular male with snake-like tattoos covering his body, the other a woman with shoulder length brown hair, standing at the base of a mossy cliff.",
      description: [
        "This glitch is an interesting one! While playing God of War Ragnarök on PS5, I noticed that one of the crawlspaces, which was meant to be obstructed by a Draupnir spear point, was already interactible, as if a check hadn't been run. As a result, Kratos and Freya were both able to enter the crawlspace while it was blocked. I didn't pass through fully in-case the game became soft-locked, but managed to get Freya stuck inside.",
        "In the middle of the clip there is a slight hitching (originally much longer but edited for time) which suggests the code caught an error &ndash; I had several of these incidents towards the end of the game, presumably due to the amount of data the game was reading/writing, though this was on a very early patch so is likely now resolved.",
      ],
      article: "Glitches",
    },
  ];

  // Loop through table, generate map, generate html for page
  videos_table.forEach(addYoutubeVideo);

  function createElement(type, props) {
    var element = document.createElement(type);
    for (var prop in props) {
      element.setAttribute(prop, props[prop]);
    }
    return element;
  }

  function addYoutubeVideo(item) {
    // Set up outer box
    var newSection = createElement("section", {
      class: "Review-section youtube-row",
    });

    // Set up youtube video description
    var newTextDiv = createElement("div", { class: "youtube-column-text" });
    var newTitle = createElement("h3", { class: "youtube-title" });
    newTitle.innerHTML = item.title;
    newTextDiv.appendChild(newTitle);

    item.description.forEach(function (paragraph, index) {
      var newPara = createElement("p", { class: "medium-para" });
      newPara.innerHTML = paragraph;
      newTextDiv.appendChild(newPara);
    });

    // Set up youtube video image
    var newImageDiv = createElement("div", { class: "youtube-column-image" });
    var newButton = createElement("button", {
      class: "youtube-thumb-wrapper under-modal-overlay under-overlay",
      "aria-controls": item.imageID + "_Youtube_Video",
      "aria-expanded": "false",
      "aria-label": "Opens Youtube Player",
      "data-video-number": item.video,
    });
    var newThumbnail = createElement("img", {
      class: "youtube-thumb",
      src: "games_images/" + item.imageID + "_Thumb.webp",
      loading: "lazy",
      alt: item.alt,
    });
    newButton.appendChild(newThumbnail);

    var newCaption = createElement("p", { class: "youtube-thumb-caption" });
    newCaption.innerHTML = " Click here to load video below ";
    newButton.appendChild(newCaption);

    var newSpan = createElement("span", { class: "youtube-player-padding" });
    newImageDiv.appendChild(newSpan);
    newImageDiv.appendChild(newButton);

    // Combine all
    newSection.appendChild(newTextDiv);
    newSection.appendChild(newImageDiv);

    // Set up iframe
    var newIframe = createElement("iframe", {
      id: item.imageID + "_Youtube_Video",
      class: "youtube-video under-overlay under-modal-overlay",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;",
      loading: "lazy",
    });

    var newArticle = document.getElementById(item.article + "_Article");
    newArticle.appendChild(newSection);
    newArticle.appendChild(newIframe);
  }

  $(".youtube-thumb-wrapper").click(function () {
    $(this).attr("aria-expanded", "true");
    var $iframe = $(this).parent().parent().next(".youtube-video");
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
