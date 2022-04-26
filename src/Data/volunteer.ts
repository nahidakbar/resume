const VolunteerDataData = [
  {
    start: "2018-07",
    finish: "2019-06",
    position: "Area 33 Director",
    company: "Toastmasters International District 70",
    description:
      "Toastmasters international is world's largest public speaking and leadership development organisation where its members learn practical communication and leadership skills via practising those skills in toastmasters projects. This includes practising leadership roles at various levels of Toastmasters International which is set up as a hierarchical organisation.",
    achievements: [
      "I lead the officers of five Toastmasters clubs through performance planning (Distinguished Club Program), monitored their progress and reported back to Toastmasters International",
      "I organised and ran two medium sized events including the 2018-2019 Area 33 International Speech Contest",
      "I was the MC for the 2019 Division Level Humorous Speech Competition in front of over 100 people.",
      "I mentored two new toastmasters in through first three projects of their toastmasters journey"
    ],
    images: [require("./images/tm-1.jpg"), require("./images/tm-2.jpg")],
    soft: [
      "Event Organisation",
      "Leadership",
      "Management",
      "Reporting",
      "Public Speaking"
    ]
  },
  {
    start: "2005-01",
    finish: "2007-12",
    position: "Hacker",
    company: "Open Kaillera Project",
    description:
      "This was an open source project to replace a free to use closed-source middleware library project. The project allowed emulators (similar to virtual machines) of retro arcade gaming platforms to be played over network. This was done by sending input over the network and staying synchronised through dead-reckoning.",
    achievements: [
      "I reverse engineered the original binary network protocol used by Kaillera through wire tapping.",
      "I produced an open source version of the library which was an in-place replacement of the original library.",
      "I added features that was not available in the original library (e.g. game play recording and playback).",
      "I developed a new high performance P2P protocol to replace an existing server/client protocol that reduced input latency to half.",
      "I reverse engineered and developed a forward modelling and state roll-back game play mode that allowed the players to experience zero latency despite the game running over network."
    ],
    images: [require("./images/okai-1.jpg"), require("./images/okai-2.png")],
    technology: [
      "Reverse Engineering",
      "Peer to Peer",
      "Low latency",
      "Real time",
      "C++",
      "Assembly"
    ]
  }
];

export default VolunteerDataData;
