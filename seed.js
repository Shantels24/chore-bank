// Your family and house checklist, loaded the first time the app opens.
export const SEED_MEMBERS = [
 {
  "name": "Jahari",
  "role": "kid",
  "base": 0,
  "color": 1,
  "createdAt": 1791231920252,
  "id": "m-jahari"
 },
 {
  "name": "Kazlyn",
  "role": "kid",
  "base": 0,
  "color": 2,
  "createdAt": 1791231920252,
  "id": "m-kazlyn"
 },
 {
  "name": "Ma'kayla",
  "role": "kid",
  "base": 0,
  "color": 0,
  "createdAt": 1791231920252,
  "id": "m-makayla"
 }
];
export const SEED_CHORES = [
 {
  "title": "Bathroom",
  "short": "Bathroom",
  "value": 1,
  "days": {
   "1": "m-makayla",
   "2": "m-kazlyn",
   "3": "m-jahari",
   "4": "m-makayla",
   "5": "m-kazlyn",
   "6": "m-jahari",
   "0": "m-makayla"
  },
  "items": [
   {
    "s": "Cleaning",
    "t": "Clean the inside of the toilet with toilet cleaner"
   },
   {
    "s": "Cleaning",
    "t": "Clean the whole outside of the toilet: seat, lid, sides, base, and the floor around it"
   },
   {
    "s": "Cleaning",
    "t": "Clean the sink with cleaner and the Scrub Daddy"
   },
   {
    "s": "Cleaning",
    "t": "Clean the tub with cleaner and the Scrub Daddy"
   },
   {
    "s": "Cleaning",
    "t": "Wipe down the counters with cleaner and a clean towel"
   },
   {
    "s": "Cleaning",
    "t": "Clean the mirror with glass cleaner and paper towels until there are no streaks"
   },
   {
    "s": "Cleaning",
    "t": "Sweep the entire bathroom floor"
   },
   {
    "s": "Cleaning",
    "t": "Sweep the corners, around the toilet, under and around cabinets, and anywhere dirt collects"
   },
   {
    "s": "Cleaning",
    "t": "Pick up anything the broom can't get with your hand"
   },
   {
    "s": "Cleaning",
    "t": "Pick up EVERY piece of trash, big or small"
   },
   {
    "s": "Organizing",
    "t": "Check inside the drawers"
   },
   {
    "s": "Organizing",
    "t": "Check under the sink"
   },
   {
    "s": "Organizing",
    "t": "Check inside cabinets and closets"
   },
   {
    "s": "Organizing",
    "t": "Make sure there's NO trash in drawers, cabinets, under the sink, the closet, or on the floor"
   },
   {
    "s": "Organizing",
    "t": "Put bathroom supplies neatly where they belong"
   },
   {
    "s": "Organizing",
    "t": "No clothes, socks, towels, or personal items left on the floor"
   },
   {
    "s": "Organizing",
    "t": "No personal items left sitting on the counter"
   },
   {
    "s": "Organizing",
    "t": "Make sure everything is neat and has a proper place"
   }
  ],
  "standard": "If you can see trash, dirt, hair, clothes, or random items, the bathroom is NOT finished.",
  "createdAt": 1791231920252,
  "id": "c-bathroom"
 },
 {
  "title": "Jahari's Bedroom",
  "short": "Bedroom",
  "value": 1,
  "days": {
   "3": "m-jahari",
   "0": "m-jahari"
  },
  "items": [
   {
    "s": "Pick up & organize",
    "t": "Make your bed completely"
   },
   {
    "s": "Pick up & organize",
    "t": "Pick up EVERYTHING from the floor"
   },
   {
    "s": "Pick up & organize",
    "t": "Pick up every piece of trash, even tiny pieces of paper"
   },
   {
    "s": "Pick up & organize",
    "t": "Pick up all shoes and put them where they belong"
   },
   {
    "s": "Pick up & organize",
    "t": "Hang up clothes that need to be hung"
   },
   {
    "s": "Pick up & organize",
    "t": "Put dirty clothes where dirty clothes belong"
   },
   {
    "s": "Pick up & organize",
    "t": "Put clean clothes away"
   },
   {
    "s": "Pick up & organize",
    "t": "Put everything in its proper drawer or storage space"
   },
   {
    "s": "Pick up & organize",
    "t": "Organize all drawers: every drawer has a purpose"
   },
   {
    "s": "Pick up & organize",
    "t": "No broken pencils, papers, toys, or random items in clothing drawers"
   },
   {
    "s": "Pick up & organize",
    "t": "Put nightgowns with the other matching clothing"
   },
   {
    "s": "Pick up & organize",
    "t": "Make sure everything has a home"
   },
   {
    "s": "Surfaces",
    "t": "Pick everything up from the dresser"
   },
   {
    "s": "Surfaces",
    "t": "Pick everything up from the desk"
   },
   {
    "s": "Surfaces",
    "t": "Pick everything up from the nightstand and side tables"
   },
   {
    "s": "Surfaces",
    "t": "Put everything where it belongs"
   },
   {
    "s": "Surfaces",
    "t": "Wipe down the dresser"
   },
   {
    "s": "Surfaces",
    "t": "Wipe down the desk"
   },
   {
    "s": "Surfaces",
    "t": "Wipe down nightstands and side tables"
   },
   {
    "s": "Surfaces",
    "t": "Check around and under furniture for trash"
   },
   {
    "s": "Vacuuming",
    "t": "Before vacuuming, the only thing on the carpet should be the carpet"
   },
   {
    "s": "Vacuuming",
    "t": "Vacuum the entire floor"
   },
   {
    "s": "Vacuuming",
    "t": "Vacuum the corners and around furniture"
   },
   {
    "s": "Vacuuming",
    "t": "No trash, clothes, shoes, papers, or random items left behind"
   }
  ],
  "standard": "If something is on the floor, pick it up. If something has a home, put it there.",
  "createdAt": 1791231920252,
  "id": "c-bedroom-jahari"
 },
 {
  "title": "Kazlyn's Bedroom",
  "short": "Bedroom",
  "value": 1,
  "days": {
   "3": "m-kazlyn",
   "0": "m-kazlyn"
  },
  "items": [
   {
    "s": "Pick up & organize",
    "t": "Make your bed completely"
   },
   {
    "s": "Pick up & organize",
    "t": "Pick up EVERYTHING from the floor"
   },
   {
    "s": "Pick up & organize",
    "t": "Pick up every piece of trash, even tiny pieces of paper"
   },
   {
    "s": "Pick up & organize",
    "t": "Pick up all shoes and put them where they belong"
   },
   {
    "s": "Pick up & organize",
    "t": "Hang up clothes that need to be hung"
   },
   {
    "s": "Pick up & organize",
    "t": "Put dirty clothes where dirty clothes belong"
   },
   {
    "s": "Pick up & organize",
    "t": "Put clean clothes away"
   },
   {
    "s": "Pick up & organize",
    "t": "Put everything in its proper drawer or storage space"
   },
   {
    "s": "Pick up & organize",
    "t": "Organize all drawers: every drawer has a purpose"
   },
   {
    "s": "Pick up & organize",
    "t": "No broken pencils, papers, toys, or random items in clothing drawers"
   },
   {
    "s": "Pick up & organize",
    "t": "Put nightgowns with the other matching clothing"
   },
   {
    "s": "Pick up & organize",
    "t": "Make sure everything has a home"
   },
   {
    "s": "Surfaces",
    "t": "Pick everything up from the dresser"
   },
   {
    "s": "Surfaces",
    "t": "Pick everything up from the desk"
   },
   {
    "s": "Surfaces",
    "t": "Pick everything up from the nightstand and side tables"
   },
   {
    "s": "Surfaces",
    "t": "Put everything where it belongs"
   },
   {
    "s": "Surfaces",
    "t": "Wipe down the dresser"
   },
   {
    "s": "Surfaces",
    "t": "Wipe down the desk"
   },
   {
    "s": "Surfaces",
    "t": "Wipe down nightstands and side tables"
   },
   {
    "s": "Surfaces",
    "t": "Check around and under furniture for trash"
   },
   {
    "s": "Vacuuming",
    "t": "Before vacuuming, the only thing on the carpet should be the carpet"
   },
   {
    "s": "Vacuuming",
    "t": "Vacuum the entire floor"
   },
   {
    "s": "Vacuuming",
    "t": "Vacuum the corners and around furniture"
   },
   {
    "s": "Vacuuming",
    "t": "No trash, clothes, shoes, papers, or random items left behind"
   }
  ],
  "standard": "If something is on the floor, pick it up. If something has a home, put it there.",
  "createdAt": 1791231920252,
  "id": "c-bedroom-kazlyn"
 },
 {
  "title": "Ma'kayla's Bedroom",
  "short": "Bedroom",
  "value": 1,
  "days": {
   "3": "m-makayla",
   "0": "m-makayla"
  },
  "items": [
   {
    "s": "Pick up & organize",
    "t": "Make your bed completely"
   },
   {
    "s": "Pick up & organize",
    "t": "Pick up EVERYTHING from the floor"
   },
   {
    "s": "Pick up & organize",
    "t": "Pick up every piece of trash, even tiny pieces of paper"
   },
   {
    "s": "Pick up & organize",
    "t": "Pick up all shoes and put them where they belong"
   },
   {
    "s": "Pick up & organize",
    "t": "Hang up clothes that need to be hung"
   },
   {
    "s": "Pick up & organize",
    "t": "Put dirty clothes where dirty clothes belong"
   },
   {
    "s": "Pick up & organize",
    "t": "Put clean clothes away"
   },
   {
    "s": "Pick up & organize",
    "t": "Put everything in its proper drawer or storage space"
   },
   {
    "s": "Pick up & organize",
    "t": "Organize all drawers: every drawer has a purpose"
   },
   {
    "s": "Pick up & organize",
    "t": "No broken pencils, papers, toys, or random items in clothing drawers"
   },
   {
    "s": "Pick up & organize",
    "t": "Put nightgowns with the other matching clothing"
   },
   {
    "s": "Pick up & organize",
    "t": "Make sure everything has a home"
   },
   {
    "s": "Surfaces",
    "t": "Pick everything up from the dresser"
   },
   {
    "s": "Surfaces",
    "t": "Pick everything up from the desk"
   },
   {
    "s": "Surfaces",
    "t": "Pick everything up from the nightstand and side tables"
   },
   {
    "s": "Surfaces",
    "t": "Put everything where it belongs"
   },
   {
    "s": "Surfaces",
    "t": "Wipe down the dresser"
   },
   {
    "s": "Surfaces",
    "t": "Wipe down the desk"
   },
   {
    "s": "Surfaces",
    "t": "Wipe down nightstands and side tables"
   },
   {
    "s": "Surfaces",
    "t": "Check around and under furniture for trash"
   },
   {
    "s": "Vacuuming",
    "t": "Before vacuuming, the only thing on the carpet should be the carpet"
   },
   {
    "s": "Vacuuming",
    "t": "Vacuum the entire floor"
   },
   {
    "s": "Vacuuming",
    "t": "Vacuum the corners and around furniture"
   },
   {
    "s": "Vacuuming",
    "t": "No trash, clothes, shoes, papers, or random items left behind"
   }
  ],
  "standard": "If something is on the floor, pick it up. If something has a home, put it there.",
  "createdAt": 1791231920252,
  "id": "c-bedroom-makayla"
 },
 {
  "title": "Kitchen: Pick Up, Dishes & Counters",
  "short": "Dishes",
  "value": 1,
  "days": {
   "1": "m-jahari",
   "2": "m-makayla",
   "3": "m-kazlyn",
   "4": "m-jahari",
   "5": "m-makayla",
   "6": "m-kazlyn",
   "0": "m-jahari"
  },
  "items": [
   {
    "s": "Pick up everything",
    "t": "Pick up every single piece of trash, big or small"
   },
   {
    "s": "Pick up everything",
    "t": "Check underneath the table"
   },
   {
    "s": "Pick up everything",
    "t": "Check around the trash can"
   },
   {
    "s": "Pick up everything",
    "t": "Check corners and cracks"
   },
   {
    "s": "Pick up everything",
    "t": "Check under and around the cabinets"
   },
   {
    "s": "Pick up everything",
    "t": "Pick up by hand anything the broom can't get"
   },
   {
    "s": "Pick up everything",
    "t": "No crumbs, paper, wrappers, food, or trash left on the floor"
   },
   {
    "s": "Dishes",
    "t": "Wash ALL dishes"
   },
   {
    "s": "Dishes",
    "t": "Clean plates, cups, utensils, pots, and pans"
   },
   {
    "s": "Dishes",
    "t": "Put clean dishes away where they belong"
   },
   {
    "s": "Dishes",
    "t": "No dishes left in or around the sink"
   },
   {
    "s": "Dishes",
    "t": "Make sure the sink is clean and free of food and debris"
   },
   {
    "s": "Counters & surfaces",
    "t": "Wipe down ALL kitchen counters with cleaner"
   },
   {
    "s": "Counters & surfaces",
    "t": "Clean up crumbs, spills, grease, and food"
   },
   {
    "s": "Counters & surfaces",
    "t": "Wipe around the appliances"
   },
   {
    "s": "Counters & surfaces",
    "t": "Make sure the counters are completely clear and clean"
   },
   {
    "s": "Counters & surfaces",
    "t": "Put everything back where it belongs"
   }
  ],
  "standard": "Every dish washed and put away, counters clear, nothing on the floor.",
  "createdAt": 1791231920252,
  "id": "c-kitchen-cleanup"
 },
 {
  "title": "Kitchen: Stove, Microwave & Sweep",
  "short": "Stove & sweep",
  "value": 1,
  "days": {
   "1": "m-kazlyn",
   "2": "m-jahari",
   "3": "m-makayla",
   "4": "m-kazlyn",
   "5": "m-jahari",
   "6": "m-makayla",
   "0": "m-kazlyn"
  },
  "items": [
   {
    "s": "Stove (clean before sweeping)",
    "t": "Wipe down the entire stove"
   },
   {
    "s": "Stove (clean before sweeping)",
    "t": "Clean food, grease, spills, and crumbs"
   },
   {
    "s": "Stove (clean before sweeping)",
    "t": "Clean around the burners"
   },
   {
    "s": "Stove (clean before sweeping)",
    "t": "Nothing left on the stove that doesn't belong there"
   },
   {
    "s": "Microwave",
    "t": "Clean the inside"
   },
   {
    "s": "Microwave",
    "t": "Wipe the inside walls"
   },
   {
    "s": "Microwave",
    "t": "Wipe the inside ceiling"
   },
   {
    "s": "Microwave",
    "t": "Wipe the bottom"
   },
   {
    "s": "Microwave",
    "t": "Clean the turntable"
   },
   {
    "s": "Microwave",
    "t": "Remove all food, grease, spills, and crumbs"
   },
   {
    "s": "Microwave",
    "t": "Clean the door"
   },
   {
    "s": "Microwave",
    "t": "Clean the handle"
   },
   {
    "s": "Microwave",
    "t": "Wipe down the outside"
   },
   {
    "s": "Microwave",
    "t": "No food, trash, grease, or crumbs left inside"
   },
   {
    "s": "Cabinets",
    "t": "Keep cabinets neat and organized"
   },
   {
    "s": "Cabinets",
    "t": "Put dishes, food, and kitchen items where they belong"
   },
   {
    "s": "Cabinets",
    "t": "Don't shove things in cabinets just to make the counter look clean"
   },
   {
    "s": "Cabinets",
    "t": "Make sure items are organized properly"
   },
   {
    "s": "Sweeping",
    "t": "Sweep the ENTIRE kitchen floor"
   },
   {
    "s": "Sweeping",
    "t": "Sweep underneath the table"
   },
   {
    "s": "Sweeping",
    "t": "Sweep around the trash can"
   },
   {
    "s": "Sweeping",
    "t": "Sweep along the cabinets"
   },
   {
    "s": "Sweeping",
    "t": "Sweep all corners"
   },
   {
    "s": "Sweeping",
    "t": "Sweep cracks and spots where dirt collects"
   },
   {
    "s": "Sweeping",
    "t": "Look over the floor after sweeping"
   },
   {
    "s": "Sweeping",
    "t": "Pick up by hand anything the broom missed"
   },
   {
    "s": "Sweeping",
    "t": "Make sure there's NO trash left anywhere on the floor"
   }
  ],
  "standard": "Don't just sweep the middle. Corners, under the table, around the trash can, along the cabinets, everywhere.",
  "createdAt": 1791231920252,
  "id": "c-kitchen-deep"
 }
];
