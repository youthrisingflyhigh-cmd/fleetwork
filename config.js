/* =============================================================================
   FLEETWORK — SHARED CONFIG
   This file is the single source of truth for both index.html and roster.html.
   Edit the values below; every page that includes this file updates with them.
============================================================================= */
const TEAM = {
  tagline: "The premier men's league team in the South Bay — we play together, play hard defense, and do the little things that win games.",

  // Just the season label — the actual leagues/divisions Fleetwork plays in
  // live below in `divisions`, since that can be more than one at a time.
  season: {
    label: "Fall '26"
  },

  // Every division Fleetwork currently competes in. Add or remove entries as
  // registrations change. Only divisions with real schedule info get a table —
  // leave windowStart/windowEnd/playoffs/weeks/opponents off (or empty) until
  // a league publishes them, and the site will show "schedule TBD" instead.
  // Every division Fleetwork currently competes in — each with its own roster.
  // Only divisions with real schedule info get a schedule table — leave
  // windowStart/windowEnd/playoffs/weeks off until a league publishes them.
  divisions: [
    {
      name: "Menlo Division A",
      roster: [
        { num: "—", name: "Nick Snyder", ht: `5'11"` },
        { num: "—", name: "Popp", ht: `5'11"` },
        { num: "—", name: "Masa", ht: `6'5"` },
        { num: "—", name: "Jan Van der Kooij", ht: `6'7"` },
        { num: "—", name: "Terence Pellum", ht: `6'7"` },
        { num: "—", name: "Matt Mcandrews", ht: `6'0"` },
        { num: "—", name: "Alex Manu", ht: `6'0"` },
        { num: "—", name: "JC", ht: `6'1"` },
        { num: "—", name: "Destry", ht: `6'2"` },
        { num: "23", name: "Sage", ht: `6'5"` },
        { num: "—", name: "Sway", ht: `6'5"` },
        { num: "8", name: "Rizzo Dumlao", ht: `5'8"` }
      ]
    },
    {
      name: "Majestic D1 Division",
      roster: [
        { num: "22", name: "Nick Snyder", ht: `5'11"` },
        { num: "24", name: "Popp", ht: `5'11"` },
        { num: "15", name: "Andre Hayes", ht: `6'4"` },
        { num: "23", name: "Sage", ht: `6'5"` },
        { num: "—", name: "Ansley", ht: `6'3"` },
        { num: "—", name: "Matt Mcandrews", ht: `6'0"` },
        { num: "—", name: "JC", ht: `6'1"` },
        { num: "—", name: "Destry", ht: `6'2"` },
        { num: "—", name: "City", ht: "—" },
        { num: "—", name: "Pat", ht: `6'5"` },
        { num: "—", name: "Josh D", ht: `6'3"` },
        { num: "—", name: "Big Josh", ht: `6'7"` },
        { num: "8", name: "Rizzo Dumlao", ht: `5'8"` }
      ]
    },
    {
      name: "Southbay Hoops 35+ Division",
      windowStart: "Sep 23",
      windowEnd: "Nov 18",
      playoffs: "Nov 25 & Dec 2",
      // One row per regular-season week. Fill in Date / Opponent / Tip-off / Venue as confirmed.
      weeks: [
        { week: 1, date: "TBD", opponent: "TBD", time: "TBD", venue: "TBD" },
        { week: 2, date: "TBD", opponent: "TBD", time: "TBD", venue: "TBD" },
        { week: 3, date: "TBD", opponent: "TBD", time: "TBD", venue: "TBD" },
        { week: 4, date: "TBD", opponent: "TBD", time: "TBD", venue: "TBD" },
        { week: 5, date: "TBD", opponent: "TBD", time: "TBD", venue: "TBD" },
        { week: 6, date: "TBD", opponent: "TBD", time: "TBD", venue: "TBD" },
        { week: 7, date: "TBD", opponent: "TBD", time: "TBD", venue: "TBD" },
        { week: 8, date: "TBD", opponent: "TBD", time: "TBD", venue: "TBD" }
      ],
      roster: [
        { num: "38", name: "Zack", ht: `6'2"` },
        { num: "77", name: "Jesse", ht: `6'2"` },
        { num: "21", name: "JC", ht: `6'1"` },
        { num: "2", name: "Ed", ht: `5'7"` },
        { num: "8", name: "Rizzo Dumlao", ht: `5'8"` },
        { num: "10", name: "Tuan", ht: `5'10"` },
        { num: "9", name: "Janssen", ht: `5'11"` },
        { num: "24", name: "Ray", ht: `5'10"` },
        { num: "23", name: "Daniel", ht: `5'7"` }
      ]
    }
  ],

  openRuns: {
    intro: "Before the season tips off, and on open weeks during it, we run an open gym — no tryout, no pressure, just get on the floor with the squad.",
    when: "TBD — usually a Wednesday, confirmed a week out. Check this page or our socials.",
    where: "Venue TBD — we'll post the gym once it's booked.",
    bring: ["Indoor court shoes", "Something to sweat in", "Water", "A few bucks if there's a gym fee"]
  },

  // Coaching staff / front office — shown on roster.html.
  staff: [
    { role: "Head Coach", name: "Add name" },
    { role: "Assistant Coach", name: "Add name" },
    { role: "Team Manager", name: "Add name" }
  ],

  stats: {
    record: "0–0",
    ppg: "—",
    oppPpg: "—",
    streak: "—"
  },

  // Add real links (YouTube/IG clip URLs) as highlight clips come in.
  highlights: [
    { caption: "Add a highlight link", url: "#" },
    { caption: "Add a highlight link", url: "#" },
    { caption: "Add a highlight link", url: "#" }
  ],

  // Instagram carousel: paste specific POST urls here (not the profile URL) to have them
  // render live via Instagram's own embed — e.g. "https://www.instagram.com/p/XXXXXXXXXXX/".
  // Instagram doesn't let a static site auto-pull a whole profile feed without their API
  // and a server to hold the access token, so this is the closest no-backend equivalent:
  // real, live, official embeds — you just add the post link when you publish one.
  instagramPosts: [],
  instagramProfile: "https://instagram.com/fleetworkbasketball",

  socials: {
    instagram: "https://instagram.com/fleetworkbasketball",
    tiktok: "",
    youtube: ""
  },

  contactEmail: "" // e.g. "fleetwork@example.com"
};
