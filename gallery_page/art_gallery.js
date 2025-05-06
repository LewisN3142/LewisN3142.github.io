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
    alt_text:
      "Six humanoids and a cat stand in group-photo style. The three in the foreground are a human, a purple tiefling with ram's horns, and a warforged robot made of steel plate with leather belts. In the background are a goth elf (Shadar-Kai), a human wearing glasses, and an orc wearing an animal skull helmet and holding a gold bedpan aloft. The image is in watercolour and pen, with a caption reading `The BreakQuest Club.'",
    filter_tags: "gallery_Fan-Art gallery_Pen gallery_Watercolour",
    description:
      'Fan art of the short-lived yet outstanding original iteration of the DnD group <a href="https://www.youtube.com/playlist?list=PLTZXfIDHhP2u29vBGJjhR_Z4kPFB9WeWB" rel="noopener noreferrer" class="external-link under-overlay"> The BreakQuest Club</a> featuring then members of the Dicebreaker and Eurogamer YouTube channels, drawn as their characters in the campaign. The linework was completed in pen and coloured using watercolour. By painting in darker shades on one side of the pen lines than the other, both texture and contrast could be created.',
    height: "213.65",
  },
  {
    name: "Breakquest_Pen",
    alt_text:
      "Six humanoids and a cat stand in group-photo style. The three in the foreground are a human, a purple tiefling with ram's horns, and a warforged robot made of steel plate with leather belts. In the background are a goth elf (Shadar-Kai), a human wearing glasses, and an orc wearing an animal skull helmet and holding a gold bedpan aloft. The image is a pen base which was later watercoloured and which has a caption reading `The BreakQuest Club.'",
    filter_tags: "gallery_Fan-Art gallery_Pen",
    description:
      'Fan art of the short-lived yet outstanding original iteration of the DnD group <a href="https://www.youtube.com/playlist?list=PLTZXfIDHhP2u29vBGJjhR_Z4kPFB9WeWB" rel="noopener noreferrer" class="external-link under-overlay"> The BreakQuest Club</a> featuring then members of the Dicebreaker and Eurogamer YouTube channels, drawn as their characters in the campaign. This image is of the base pen layer which was later painted in watercolour.',
    height: "214.3",
  },
  {
    name: "Croc_Monochrome",
    alt_text:
      "A reptilian humanoid in medieval traveller's garb (a hooded cloak with leather wrist wraps and shoulder plating) holds a staff and casts a messenger magpie into the air. Behind them is a broken tree and a covered wagon with bags in front. The image is a pencil drawing on grey paper.",
    filter_tags: "gallery_Pencil gallery_Pen gallery_Art-Trade",
    description:
      'My part of an art-share with the wonderful <a href="https://www.instagram.com/triantafillia.vassou/" rel="noopener noreferrer" class="external-link under-overlay"> Triantafillia Vassou</a>, where we each drew a piece based on a shared prompt, namely "lizardling rogue with avian familiar." For my part, I took inspiration from the lizardling raiders in the Neverwinter Nights series and drew one sending off a messenger magpie after finding a trader caravan in the woods.',
    height: "136.23",
  },
  {
    name: "Croc_Sepia",
    alt_text:
      "A reptilian humanoid in medieval traveller's garb (a hooded cloak with leather wrist wraps and shoulder plating) holds a staff and casts a messenger magpie into the air. Behind them is a broken tree and a covered wagon with bags in front. The image is a pencil drawing with a sepia tint.",
    filter_tags: "gallery_Pencil gallery_Pen gallery_Art-Trade",
    description:
      'My part of an art-share with the wonderful <a href="https://www.instagram.com/triantafillia.vassou/" rel="noopener noreferrer" class="external-link under-overlay"> Triantafillia Vassou</a>, where we each drew a piece based on a shared prompt, namely "lizardling rogue with avian familiar." For my part, I took inspiration from the lizardling raiders in the Neverwinter Nights series and drew one sending off a messenger magpie after finding a trader caravan in the woods. The sepia filter was added to make the piece feel like an in-universe sketch.',
    height: "136.23",
  },
  {
    name: "Gargoyle",
    alt_text:
      "A mossy stone grotesque (read: gargoyle) sits perched on a spherical fence-post top, with its tail wrapped around the post itself. In the background is a modern day building from a housing estate. This picture is an acrylic painting.",
    filter_tags: "gallery_Acrylic",
    description:
      "This from-life painting of a grotesque (read: gargoyle) was completed in acrylic on an approximately A1 piece of paper as a centrepiece for my A-level art exhibition. Working at such a large scale in a medium I'm not confident in was a challenge, but I learned a lot from layering shades of green and brown to generate texture and contrast the red tiles on the house in the background.",
    height: "198.69",
  },
  {
    name: "Hellblade_Monochrome",
    alt_text:
      "A pen illustration of three figures. In the center is a female, pictish warrior with braided hair, a scarred face, and sleeveless fur jerkin. On the left of her is a shirtless man covered in barbs and holding a longsword, his body is covered in wooden barbs, his head wrapped in a sack, and dried blood down his chest. On the right, is a bony figure with a bird skull head, feather head-dress, and leather rags. The background is shadows.",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description:
      " 'Even in darkness the wonder and beauty of the wrld never leaves. It's always there, just waiting to be seen again.' A pen illustration of Senua from the game Hellblade: Senua's Sacrifice, alongside the first two bosses from the game &ndash; the fire giant Surtr and the God of illusion Valravn the raven, with the background digitally edited to black for increased contrast.",
    height: "244.89",
  },
  {
    name: "Hellblade_Pen",
    alt_text:
      "A pen illustration of three figures. In the center is a female, pictish warrior with braided hair, a scarred face, and sleeveless fur jerkin. On the left of her is a shirtless man covered in barbs and holding a longsword, his body is covered in wooden barbs, his head wrapped in a sack, and dried blood down his chest. On the right, is a bony figure with a bird skull head, feather head-dress, and leather rags.",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description:
      'A pen illustration of Senua from the game Hellblade: Senua\'s Sacrifice, alongside the first two bosses from the game &ndash; the fire giant Surtr and the God of illusion Valravn the raven. The story of the pictish warrior Senua\'s journey through Helheim as she battles with psychosis is a masterpiece, with the combination of visceral and detailed combat, whispers of the fates, glimpses of Galena, and poignant depiction of Senua\'s anxiety making it one of my favourite pieces of media. The fact that this piece was shared by both actress <a href="https://www.instagram.com/melinajuergensofficial/" rel="noopener noreferrer" class="external-link under-overlay"> Melina Juergens</a> and the Ninja Theory accounts on social media was just the icing on the cake.',
    height: "280.01",
  },
  {
    name: "Neverwinter_Mice_Digital",
    alt_text:
      "An ink drawing of four rodent warriors - a squirrel with an acorn helmet, a stocky gerbil with an axe, a mouse with long ears and light medieval armour, all lead by a mouse in robes, holding a torch aloft.",
    filter_tags: "gallery_Pen gallery_Fan-Art gallery_Digital",
    description:
      'A fan art crossover between <a href="https://www.mouseguard.net/" rel="noopener noreferrer" class="external-link under-overlay"> David Petersen</a>\'s Mouse Guard series and the 3rd edition DnD game Neverwinter Nights, with characters from the former taking poses from the key art of the latter. This piece was lined using drawing pens then inked using fude brush pens and water. A final, digital pass was added in order to get the lighting just right.',
    height: "122.55",
  },
  {
    name: "Neverwinter_Mice_Pen",
    alt_text:
      "A drawing of four rodent warriors - a squirrel with an acorn helmet, a stocky gerbil with an axe, a mouse with long ears and light medieval armour, all lead by a mouse in robes, holding a torch aloft. The image shows the pen base drawing which was later inked to add shading.",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description:
      'A fan art crossover between <a href="https://www.mouseguard.net/" rel="noopener noreferrer" class="external-link under-overlay"> David Petersen</a>\'s Mouse Guard series and the 3rd edition DnD game Neverwinter Nights, with characters from the former taking poses from the key art of the latter. This image is the third in a series of Mouse Guard pieces using fude pen, which was later inked and digitally edited to mimic the Neverwinter Nights key art style.',
    height: "125.15",
  },
  {
    name: "Mouseguard2",
    alt_text:
      "A pair of mouse-like warriors, one wearing a cloak and belt, the other in hooded robes, standing back to back in a field. The first mouse is holding a short sword and the second holds a cane. This image is a pen drawing.",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description:
      'The second in a series of artworks inspired by the comic book series Mouse Guard, which I created while learning to use a fude brush pen. At the time I was working on this piece, news had just broken that Wes Ball and Vance Kovacs\' <a href="https://www.youtube.com/watch?v=XWHPhc2xNNU" rel="noopener noreferrer" class="external-link under-overlay"> Mouse Guard film</a> had unfortunately been cancelled. Credits go to <a href="https://www.mouseguard.net/" rel="noopener noreferrer" class="external-link under-overlay"> David Petersen</a> for the original character designs.',
    height: "111.79",
  },
  {
    name: "Mouseguard1",
    alt_text:
      "A murine warrior in a hooded cloak pushes his short sword into the ground in front of him. He appears to be leaving a farmhouse with a windmill, which rests on the plains behind him. This image is a pen drawing.",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description:
      'The first in a series of artworks inspired by the comic book series Mouse Guard, which I created while learning to use a fude brush pen. At the time I was working on this piece, news had just broken that Wes Ball and Vance Kovacs\' <a href="https://www.youtube.com/watch?v=XWHPhc2xNNU" rel="noopener noreferrer" class="external-link under-overlay"> Mouse Guard film</a> had unfortunately been cancelled. Credits go to <a href="https://www.mouseguard.net/" rel="noopener noreferrer" class="external-link under-overlay"> David Petersen</a> for the original character designs.',
    height: "140",
  },
  {
    name: "Jakub",
    alt_text:
      "A man with a striped, short-sleeved shirt and short hair plays an electric guitar in-front of the silhouette of an industrial building with several chimneys and gantries. The image is a pencil drawing and has the setlist of a concert on the right-hand side.",
    filter_tags: "gallery_Pencil gallery_Portrait",
    description:
      "A portrait of guitarist Jakub Zytecki, drawn in celebration of the first performance of his solo EPs 'Ladder Head' and 'Feather Bed' in the UK at the Islington Assembly Hall in 2018. For this piece, I used biro pen to draw in the folds in clothes, boundaries of objects, and other dark areas, building out the overall details with pencil around these. By erasing portions of pencil, dappled lighting could then be created on the shirt for example.",
    height: "153.8",
  },
  {
    name: "Layton_Switch",
    alt_text:
      "A young boy wearing a blue suit and cap, with a red bow-tie is sitting on the ground playing on a Nintendo Switch. A man in a dark suit and top hat sits next to him, playing on another console, but peering over the boy's shoulder. This image is a cartoon illustration.",
    filter_tags: "gallery_Fan-Art gallery_Digital",
    description:
      'A piece of digital fan art of Professor Layton and his charge Luke, drawn to celebrate the announcement of <a href="https://www.layton.jp/jouki/en/" rel="noopener noreferrer" class="external-link under-overlay"> Professor Layton and The New World of Steam</a> on Nintendo Switch (the webpage found by following the link has a puzzle to be solved). This illustration also proved to be a good test piece for Affinity Photo.',
    height: "155.75",
  },
  {
    name: "Trunchbull",
    alt_text:
      "A brutish woman with wide shoulders and hair pulled into a tight bun stares menacingly at the viewer. She wears a suit jacket, skirt, long socks, and shoes double knotted with bows. A wavy handwritten caption identifies her as Miss Trunchbull. This image is a cartoon ink illustration.",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description:
      'An ink caricature of the character Miss Trunchbull from the Roald Dahl book "Matilda." This piece drew inspiration from the characterisation in both the 1996 film of the same name and the musical scored by Tim Minchin, in addition to <a href="https://quentinblake.com/" rel="noopener noreferrer" class="external-link under-overlay"> Quentin Blake</a>\'s illustrations.',
    height: "247.49",
  },
  {
    name: "Astro",
    alt_text:
      "A small robot, styled like an astronaut with an aerial on their helmet, bounds across the image. They have a billowing blue cape behind them and three-fingered hands, like a claw machine. This picture is a drawing in pen and pencil.",
    filter_tags: "gallery_Pencil gallery_Pen gallery_Fan-Art",
    description:
      'Fan art of the Sony mascot character <a href="https://www.teamasobi.com/games/astro-bot" rel="noopener noreferrer" class="external-link under-overlay"> Astro Bot</a>, created by Team Asobi. This piece was created shortly after I played Astro\'s Playroom and was made as part of a series of artworks to hang on my door in university halls, to highlight my interests and make my room more welcoming.',
    height: "151",
  },
  {
    name: "PennJillette",
    alt_text:
      "A shoulders up portrait of a bespectacled man with a ponytail and short beard, concentrated at the chin. He is wearing a suit and tie and smiles at the viewer. This image is an acrylic painting.",
    filter_tags: "gallery_Acrylic gallery_Portrait gallery_Penn",
    description:
      "An acrylic painting of magician Penn Jillette (part of a pair with the portrait of Teller) completed during my A-level studies. The focus of this piece was on using weight of line and the texture of paint to build out the shapes and forms. The painting was completed on black paper to aid in generating contrast and encourage working with lighter shades, quite different to my usual style.",
    height: "248",
  },
  {
    name: "Teller",
    alt_text:
      "A shoulders up portrait of a man with his head in a performative bird cage. The cage only has four bars and the man smiles from within. He is wearing a suit and tie, and has a receeding hairline. This image is an acrylic painting.",
    filter_tags: "gallery_Acrylic gallery_Portrait",
    description:
      "An acrylic painting of the magician Teller (part of a pair with the portrait of Penn Jillette) completed during my A-level studies. The focus of this piece was on using weight of line and the texture of paint to build out the shapes and forms. The painting was completed on black paper to aid in generating contrast and encourage working with lighter shades, quite different to my usual style.",
    height: "250",
  },
  {
    name: "Poppy_Acrylic",
    alt_text:
      "A ceramic poppy sits in a grassy field, the sunlight glistening on the polished surface.",
    filter_tags: "gallery_Acrylic",
    description:
      "An acrylic painting of one of the ceramic poppies from the `Blood Swept Lands and Seas of Red' installation at the Tower of London in 2014. The display was the work of Paul Cummins and Tom Piper, created to commemorate 100 years since the start of World War I.",
    height: "179",
  },
  {
    name: "Moebius_Greece",
    alt_text:
      "A pen drawing of a young waitress standing by a tree, watching a seagull flying across the landscape beyond the hotel gates. Flowers grow by the base of the tree and there is a swimming pool nearby.",
    filter_tags: "gallery_Pen",
    description:
      "An artwork drawn while I was on holiday in Greece, using the croquis style and inspired by the work of Milo Manara. This piece was an exercise in producing the most amount of clarity with the fewest number of lines and with very little in the way of pencil under-drawing.",
    height: "176",
  },
  {
    name: "Jocat",
    alt_text:
      "A medieval bard wearing a red, feather-tipped fez leans against a grey brick wall, while reading from a book. Scraps of paper fly out from between the book's pages and float towards a cartoony fantasy castle in the background. The caption to this watercolour painting reads `Have you heard the good word of sword and shield?' ",
    filter_tags: "gallery_Pen gallery_Fan-Art gallery_Watercolour",
    description:
      'Fan art of the YouTube creator <a href="https://www.jocat.net/" rel="noopener noreferrer" class="external-link under-overlay"> JoCat</a>\'s DnD character. This piece was drawn as part of a submission to join their art team and was made by following their reference sheet, to demonstrate that I was capable of following a style guide.  ',
    height: "105",
  },
  {
    name: "Mathsoc_Adverts",
    alt_text:
      "A trio of pictures drawn in pen, showing anthropomorphised deer and horses enjoying a university lifestyle. The first piece shows a student and chaperone at a pub, the second a lecturer teaching maths, and the third a pair of students eating burgers at a barbecue.",
    filter_tags: "gallery_Pen",
    description:
      "A series of three pieces completed as part of my work as academic secretary of the University of Surrey's maths society, for use in advertising events. The compositions are based on photos from actual events and the characters are drawn in the style of the series `Bojack Horseman,' which was popular at the time.",
    height: "84",
  },
  {
    name: "Icy_Tabs",
    alt_text:
      "A man made of ice, wearing jeans, a jumper, and a cape, stands atop a cresting hill, fending off shadow like figures with a long halberd. The encroaching figures have googly eyes and swarm like zombies. The piece is captioned with the text `TABZ: icycaress'.",
    filter_tags: "gallery_Fan-Art gallery_Watercolour gallery_Pen",
    description:
      'A watercolour painting of YouTube creator <a href="https://www.youtube.com/user/IcyCaress" rel="noopener noreferrer" class="external-link under-overlay"> IcyCaress</a>, inspired by IcyCaress\' playthrough of "Totally Accurate Battle Zombielator" and based on the original character design by <a href="https://www.instagram.com/floating_megane/" rel="noopener noreferrer" class="external-link under-overlay"> Floating Megane</a>. The composition is loosely based on the cover of the 1993 game DOOM.',
    height: "274",
  },
  {
    name: "Icy_Colour",
    alt_text:
      "An ink portrait of a man made of ice, dressed in a heavy hunting jacket, white t-shirt, and ski goggles standing in the shadows. The figure is frowning and has cracks on his face, as if he has seen combat. The image has been digitally coloured.",
    filter_tags: "gallery_Pen gallery_Digital gallery_Fan-Art",
    description:
      'A portrait of YouTube creator <a href="https://www.youtube.com/user/IcyCaress" rel="noopener noreferrer" class="external-link under-overlay"> IcyCaress</a>, completed for their birthday and for a time, their profile picture on Twitter and Discord. The character is based on an original designby <a href="https://www.instagram.com/floating_megane/" rel="noopener noreferrer" class="external-link under-overlay"> Floating Megane</a>, drawn here in the style of the video game "Darkwood." This picture was drawn in pen and ink, then edited to add colour and lighting using Photoshop Elements.',
    height: "204",
  },
  {
    name: "Icy_Monochrome",
    alt_text:
      "An ink portrait of a man made of ice, dressed in a heavy hunting jacket, white t-shirt, and ski goggles standing in the shadows. The figure is frowning and has cracks on his face, as if he has seen combat.",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description:
      'A portrait of YouTube creator <a href="https://www.youtube.com/user/IcyCaress" rel="noopener noreferrer" class="external-link under-overlay"> IcyCaress</a>, completed for their birthday and for a time, their profile picture on Twitter and Discord. The character is based on an original designby <a href="https://www.instagram.com/floating_megane/" rel="noopener noreferrer" class="external-link under-overlay"> Floating Megane</a>, drawn here in the style of the video game "Darkwood." This picture shows the base layer, drawn in pen and ink, which was subsequently coloured in Photoshop Elements.',
    height: "204",
  },
  {
    name: "Peanut_Pen",
    alt_text:
      "An illustration of three figures in the style of a sitcom poster. The hypothetical sitcom has the title 'Peanut!' and the poster shows a man wearing a leather jacket and headphones, as well as a man made of ice in ski-goggles and a jumper, being hugged by a rounded mannequin, which is smiling. The two men look nervous and the ice man is visibly sweating.",
    filter_tags: "gallery_Pen gallery_Fan-Art",
    description:
      'Fan art of YouTube creators <a href="https://www.youtube.com/user/IcyCaress" rel="noopener noreferrer" class="external-link under-overlay"> IcyCaress</a> and <a href="https://www.youtube.com/@IGP" rel="noopener noreferrer" class="external-link under-overlay"> IGP</a>\'s playthrough of the game "SCP Containment Breach." During the playthrough, the duo gave SCP-173 the nickname "peanut" due to its shape, which inspired the sitcom feel of this piece. The caricatures of IGP (left) and Icycaress (right) are based on original designs by <a href="https://www.instagram.com/floating_megane/" rel="noopener noreferrer" class="external-link under-overlay"> Floating Megane</a>.',
    height: "218",
  },
  {
    name: "Gundyr",
    alt_text:
      "A figure in plate armour stands in the centre of a ruined amphitheatre, holding a halberd. A snake like pustule grows from his shoulder and bears its pointed teeth. There are small gravestones around the edge of the arena.",
    filter_tags: "gallery_Pencil gallery_Pen gallery_Fan-Art",
    description:
      "Fan art of the tutorial boss Iudex Gundyr from Dark Souls 3, drawn in pen and pencil. This piece was one of the first full page illustrations in a sketchbook gifted to me for my birthday by my university friends and housemates.",
    height: "135",
  },
  {
    name: "Sekiro_Digital",
    alt_text:
      "A schematic illustration of a prosthetic arm weapon called the `weighted ball,' drawn from two perspectives (palm side up and palm side down). The arm is made of a series of metal and bone bars, joined by ropes. A long reel of rope, wrapped around the arm, is attached to a heavy ball, which is held in the hand and can be thrown.",
    filter_tags:
      "gallery_Digital gallery_Fan-Art gallery_Pen gallery_Watercolour",
    description:
      'My submission for <a href="https://www.youtube.com/vaatividya" rel="noopener noreferrer" class="external-link under-overlay"> VaatiVidya</a>\'s Sekiro Prosthetic Weapon <a href="https://www.youtube.com/watch?app=desktop&v=m68K1bupM9Q&t=1148s" rel="noopener noreferrer" class="external-link under-overlay"> Art Competition</a>. The challenge was to develop an original design for a weapon which could be incorporated into the game &ndash; This image was completed in pen and watercolour then digitally tweaked and came with a series of supplementary sketches illustrating the weapon\'s use.',
    height: "113",
  },
  {
    name: "Passenger_Pencil",
    alt_text:
      "A side profile of a man with short hair and a beard, wearing a canvas shirt with a button-down collar. This image is a pencil drawing. Several lines in the background symbolise the wind and a caption identifies the man as the musician Passenger.",
    filter_tags: "gallery_Pencil gallery_Portrait",
    description:
      "A pencil sketch of indie musician Passenger (most well known for `Let Her Go') which I drew during a long car ride the day after seeing him support Ed Sheeran on the 2015 Multiply tour. The fast, short pencil strokes are a consequence of the unorthodox drawing location, but manage to successfully depict the form and texture of his face and shirt.",
    height: "247",
  },
  {
    name: "Prince_Pen",
    alt_text:
      "A portrait of the musician Prince, completed in marker pen. He has his hair in an afro and is wearing a suit jacket and open shirt with a wide collar.",
    filter_tags: "gallery_Pen gallery_Portrait",
    description:
      "Beginning with a scribble made by one of my university coursemates, this piece coalesced into a portrait of the musician Prince, lined in pen and coloured using Sharpie marker. This drawing is part of a series of `complete the scribble' images I created during a a pub-quiz in the first year of my undergraduate degree.",
    height: "198",
  },
  {
    name: "The_Mask",
    alt_text:
      "An acrylic painting of a man wearing a yellow suit and wide-brimmed hat. The hat has a feather in the band and the man's face is obscured by a grimacing green mask. His face is tilted slightly towards the floor, as if to obscure the mask from view.",
    filter_tags: "gallery_Acrylic gallery_Portrait gallery_Fan-Art",
    description:
      "Another piece that began with a scribble drawn by one of my university coursemates, this piece depicts Jim Carrey's character in the 1994 film `The Mask.' As I had the final result in mind from the offset, a fairly minimal amount of under-drawing was necessary, with the bulk of the image being completed acrylic paint.",
    height: "240",
  },
  {
    name: "Gandalf",
    alt_text:
      "A pencil portrait of an old, wizard-like figure wearing a tall, sagging, wide-brimmed hat. He is smoking a long pipe and has a thick, bushy beard.",
    filter_tags: "gallery_Pencil gallery_Fan-Art",
    description:
      "A quick pencil sketch of Gandalf from The Lord of the Rings, drawn in order to practice speed, texture, and shading with a new technical pencil.",
    height: "274",
  },
  {
    name: "Hyenas",
    alt_text:
      "Pencil sketches of the heads and flanks of four hyena. The creatures are drawn from various angles, with three of the hyena having their mouths open and the fourth chewing on a carcass.",
    filter_tags: "gallery_Pencil",
    description:
      "A series of pencil sketches of hyenas, inspired by both the cast of the West End performance of The Lion King and the daemon of Gerard Bonneville in Philip Pullman's `La Belle Sauvage.' The dynamic facial expressions of these animals made them really fun to draw!",
    height: "156",
  },
  {
    name: "Horses",
    alt_text:
      "Pencil and pen sketches of the horses in an equestrian show called Son Martorellet. There are two full-body illustrations of horses, one rearing up on its hind legs and carrying a rider, the other cantering, as well as separate drawings of the rider and the horse's head.",
    filter_tags: "gallery_Pencil gallery_Pen",
    description:
      'This piece is a series of observational drawings of performing horses from the equestrian show at <a href="https://www.sonmartorellet.com/en/home/" rel="noopener noreferrer" class="external-link under-overlay"> Son Martorellet</a> in Menorca, which I visited during a tour of the island on holiday. I am very grateful to the performers for letting me watch them train and make reference materials.',
    height: "141",
  },
  {
    name: "PT_Phone",
    alt_text:
      "An ink drawing of an old landline phone with a coiled cord joining the handset to the base. The phone sits on a plain countertop in a dark corner and the german text `glaubte ich ein telephon zu hören' is superimposed over the image.",
    filter_tags: "gallery_Pen gallery_Fan-Art gallery_Digital",
    description:
      "This picture is based on Hideo Kojima's playable teaser for Silent Hills, namely P.T. Having followed the mystery of 7780s Studio at the time of its release, the tense horror of the game has stuck with me and provided inspiration for the Inktober 2019 prompt `ring.' The german text translates to `I thought I heard a phone.' ",
    height: "229",
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
      draggable: "false",
    });

    var newImage = createElement("img", {
      height: item.height,
      class: "gallery-thumb lazyload",
      "data-src": "/gallery_page/gallery_images/" + item.name + "_200px.webp",
      loading: "lazy",
      alt: item.alt_text,
      draggable: "false",
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
