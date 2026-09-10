import { Chess } from 'chess.js';
import fs from 'fs';
import { buildBlackLine } from './builder-utils.js';

export const kidRaw = [
  // =========================================================================
  // SUBMODULE 1: Classical System & Kingside Avalanche (...e5, ...f5) - 13 Lines
  // =========================================================================
  {
    id: 'kid-classical-anchor-mar-del-plata',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – Mar del Plata Mainline & 12...f4 Kingside Avalanche',
    shortName: 'Mar del Plata Mainline Anchor',
    category: 'Anchor Mainline',
    eco: 'E99 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. Nd3 f5 11. Bd2 Nf6 12. f3 f4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. Nd3 f5 11. Bd2 Nf6 12. f3 f4',
    fullAnnotation: 'The legendary Mar del Plata variation: the ultimate kingside attacking system. Black locks the center with 8...Ne7 and 12...f4!, preparing an unstoppable tidal wave of pawns (...g5, ...h5, ...g4) targeting White\'s king.',
    annotations: {
      1: "1... Nf6 — Control e4 and prepare kingside fianchetto.",
      3: "2... g6 — King's Indian setup.",
      5: "3... Bg7 — The dragon bishop strikes along the long diagonal.",
      7: "4... d6 — Solidify e5.",
      9: "5... O-O — Tuck king safely away.",
      11: "6... e5! — The thematic KID central strike.",
      13: "7... Nc6 — Challenge d4 directly.",
      15: "8... Ne7 — Reroute knight toward the kingside.",
      17: "9... Nd7 — Unblock the f-pawn.",
      19: "10... f5! — Unleash the kingside counter-attack.",
      21: "11... Nf6 — Reinforce e4 pressure.",
      23: "12... f4! — Tactical Motif: Thematic Wedge! Closes the kingside and signals the pawn storm."
    }
  },
  {
    id: 'kid-classical-anchor-gligoric-7be3',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical Gligoric – 7. Be3 Ng4 & The 12...g5 Pawn March',
    shortName: 'Classical Gligoric Anchor',
    category: 'Anchor Mainline',
    eco: 'E92 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. Be3 Ng4 8. Bg5 f6 9. Bh4 Nc6 10. d5 Ne7 11. Nd2 Nh6 12. f3 g5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. Be3 Ng4 8. Bg5 f6 9. Bh4 Nc6 10. d5 Ne7 11. Nd2 Nh6 12. f3 g5',
    fullAnnotation: 'Svetozar Gligoric\'s flexible system: Black harasses White\'s bishop with 7...Ng4! and 8...f6, rolling forward with 11...Nh6 and 12...g5 to seize decisive kingside space.',
    annotations: {
      13: "7... Ng4! — Harass White's dark-squared bishop with tempo.",
      15: "8... f6 — Dislodge the bishop.",
      21: "11... Nh6 — Reroute knight to f7.",
      23: "12... g5! — Tactical Motif: Space Expansion driving White's bishop backwards."
    }
  },
  {
    id: 'kid-classical-anchor-petrosian-7d5',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical Petrosian – 7. d5 a5 & The 12...Nh7 Queenside Restraint',
    shortName: 'Classical Petrosian Anchor',
    category: 'Anchor Mainline',
    eco: 'E93 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5 a5 8. Bg5 h6 9. Bh4 Na6 10. Nd2 Qe8 11. O-O Bd7 12. b3 Nh7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. d5 a5 8. Bg5 h6 9. Bh4 Na6 10. Nd2 Qe8 11. O-O Bd7 12. b3 Nh7',
    fullAnnotation: 'Tigran Petrosian\'s prophylaxis: White closes the center with 7. d5. Black clamps the queenside with 7...a5!, prepares ...f5 with 10...Qe8 and 12...Nh7, maintaining harmonious counterplay.',
    annotations: {
      13: "7... a5! — Prophylactic clamp stopping White's b4 expansion.",
      17: "9... Na6 — Develop knight toward c5 outpost.",
      21: "11... Bd7 — Connect rooks.",
      23: "12... Nh7 — Clear the f-file for the upcoming ...f5 break."
    }
  },
  {
    id: 'kid-classical-punish-kingside-storm',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – 9. b4 Nh5 / 12...f4 Unstoppable Mating Wave',
    shortName: 'Classical 12...f4 Mating Wave',
    category: 'Tactical Punishment',
    eco: 'E97 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4 Nh5 10. g3 f5 11. Ng5 Nf6 12. Bf3 f4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4 Nh5 10. g3 f5 11. Ng5 Nf6 12. Bf3 f4',
    fullAnnotation: 'White attempts queenside counterplay with 9. b4. Black ignores it and charges forward with 9...Nh5!, 10...f5, and 12...f4!, suffocating White\'s kingside defenders.',
    annotations: {
      17: "9... Nh5! — Eyes f4 outpost and frees the f-pawn.",
      19: "10... f5! — Thematic central breakthrough.",
      23: "12... f4! — Tactical Motif: Pawn Wedge! Threatens ...fxg3 followed by ...Bh3 mate nets."
    }
  },
  {
    id: 'kid-classical-punish-premature-bg5',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – Premature 9. Bg5 h6 / 12...Nf4 Monster Outpost',
    shortName: 'Classical 9. Bg5 Inaccuracy Refuted',
    category: 'Tactical Punishment',
    eco: 'E97 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Bg5 h6 10. Bh4 g5 11. Bg3 Nh5 12. Nd2 Nf4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Bg5 h6 10. Bh4 g5 11. Bg3 Nh5 12. Nd2 Nf4',
    fullAnnotation: 'White plays 9. Bg5 prematurely in the Classical. Black drives the bishop into a passive pocket with 9...h6 and 10...g5!, and implants the devastating 12...Nf4! monster knight dominating White\'s kingside.',
    annotations: {
      17: "9... h6 — Question White's bishop.",
      19: "10... g5! — Tactical Motif: Driving the bishop away.",
      21: "11... Nh5 — Eyeing the f4 hole.",
      23: "12... Nf4! — Monster knight outpost on f4."
    }
  },
  {
    id: 'kid-classical-punish-exd4-strike',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – Exchange 7...exd4 8. Nxd4 Re8 / 12...dxe4 Central Sweep',
    shortName: 'Classical 7...exd4 Central Sweep',
    category: 'Tactical Punishment',
    eco: 'E91 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O exd4 8. Nxd4 Re8 9. f3 c6 10. Kh1 d5 11. cxd5 cxd5 12. Bg5 dxe4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O exd4 8. Nxd4 Re8 9. f3 c6 10. Kh1 d5 11. cxd5 cxd5 12. Bg5 dxe4',
    fullAnnotation: 'Black liquidates White\'s center with 7...exd4 and 10...d5!, winning back the center on e4 and opening the e-file with overwhelming piece activity.',
    annotations: {
      13: "7... exd4 — Liquidate White's central anchor.",
      15: "8... Re8 — Pile pressure on e4.",
      19: "10... d5! — Tactical Motif: Central Rupture! Blasting open White's center.",
      23: "12... dxe4 — Equalize material and command the open files."
    }
  },
  {
    id: 'kid-classical-punish-dxe5-exchange',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – Dull 7. dxe5 dxe5 / 12...cxd5 Superior Queenless Endgame',
    shortName: 'Classical 7. dxe5 Endgame Refuted',
    category: 'Tactical Punishment',
    eco: 'E92 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. dxe5 dxe5 8. Qxd8 Rxd8 9. Bg5 Re8 10. Nd5 Nxd5 11. cxd5 c6 12. Bc4 cxd5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. dxe5 dxe5 8. Qxd8 Rxd8 9. Bg5 Re8 10. Nd5 Nxd5 11. cxd5 c6 12. Bc4 cxd5',
    fullAnnotation: 'White trades queens for a quick draw with 7. dxe5. Black neutralizes White\'s threats with 9...Re8, liquidates d5 with 11...c6, and commands the open files with superior king safety.',
    annotations: {
      15: "8... Rxd8 — Command the open d-file.",
      17: "9... Re8 — Guard c7 and step out of pin.",
      21: "11... c6! — Undermine White's advanced d5 pawn.",
      23: "12... cxd5 — Complete equality with active endgame chances."
    }
  },
  {
    id: 'kid-classical-punish-qh4-infiltration',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – 10...f5 / 12...Bf6 Dark Square Domination',
    shortName: 'Classical 12...Bf6 Dark Square Domination',
    category: 'Tactical Punishment',
    eco: 'E97 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. f3 f5 11. g4 f4 12. h4 Bf6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. f3 f5 11. g4 f4 12. h4 Bf6',
    fullAnnotation: 'White tries to wall off the kingside with 11. g4 and 12. h4. Black immediately skewers the h4 pawn with 12...Bf6!, targeting White\'s light and dark-square weaknesses.',
    annotations: {
      19: "10... f5 — Classical KID counter-blow.",
      21: "11... f4 — Lock down the kingside wedge.",
      23: "12... Bf6! — Tactical Motif: Skewer attacking the overextended h4 pawn."
    }
  },
  {
    id: 'kid-classical-punish-c5-overextension',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – Flawed 10. c5?! / 12...h6 Kingside Rebound',
    shortName: 'Classical 10. c5?! Overreach Punished',
    category: 'Tactical Punishment',
    eco: 'E97 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4 Nh5 10. c5 Nf4 11. Bxf4 exf4 12. Rc1 h6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. b4 Nh5 10. c5 Nf4 11. Bxf4 exf4 12. Rc1 h6',
    fullAnnotation: 'White rushes on the queenside with 10. c5?!. Black installs the monster 10...Nf4 knight, trades it for White\'s bishop to obtain the two bishops, and prepares the ...g5 storm with 12...h6.',
    annotations: {
      19: "10... Nf4! — Monster knight outpost on f4.",
      21: "11... exf4 — Win the bishop pair and open the long diagonal.",
      23: "12... h6 — Prepare ...g5 with decisive attacking chances."
    }
  },
  {
    id: 'kid-classical-punish-early-dxe5-blunder',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – 8. dxe5?! Inaccuracy / 12...Be6 Outpost Domination',
    shortName: 'Classical 8. dxe5 Inaccuracy Punished',
    category: 'Tactical Punishment',
    eco: 'E92 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. dxe5 Nxe5 9. Nxe5 dxe5 10. Bg5 c6 11. Qxd8 Rxd8 12. Rad1 Be6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. dxe5 Nxe5 9. Nxe5 dxe5 10. Bg5 c6 11. Qxd8 Rxd8 12. Rad1 Be6',
    fullAnnotation: 'White tries to simplify passively with 8. dxe5?!. Black centralizes with 8...Nxe5, neutralizes the d-file, and develops the bishop to e6 with total equality and superior central pawn structure.',
    annotations: {
      15: "8... Nxe5 — Active centralized knight.",
      21: "11... Rxd8 — Command the open d-file.",
      23: "12... Be6 — Dominate the central light squares."
    }
  },
  {
    id: 'kid-classical-punish-rolling-wave',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – 9. Nd2 a5 / 12...Kh8 Prophylactic King Safety',
    shortName: 'Classical 9. Nd2 a5 Anchor Line',
    category: 'Tactical Punishment',
    eco: 'E97 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Nd2 a5 10. a3 Nd7 11. Rb1 f5 12. b4 Kh8',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Nd2 a5 10. a3 Nd7 11. Rb1 f5 12. b4 Kh8',
    fullAnnotation: 'Black restrains White\'s queenside with 9...a5! and plays the grandmaster prophylactic move 12...Kh8!, stepping off the g1-a7 diagonal before executing the kingside breakthrough.',
    annotations: {
      17: "9... a5! — Halt White's b4 push.",
      21: "11... f5! — Thematic KID strike.",
      23: "12... Kh8! — Prophylaxis! Prepares ...Ng8 and ...Bh6 free of diagonal pins."
    }
  },
  {
    id: 'kid-classical-punish-dubious-a4',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – Passive 9. a4 a5 / 12...Nf6 Central Control',
    shortName: 'Classical 9. a4 a5 Refuted',
    category: 'Tactical Punishment',
    eco: 'E97 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. a4 a5 10. b3 Nd7 11. Ba3 f5 12. Ng5 Nf6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. a4 a5 10. b3 Nd7 11. Ba3 f5 12. Ng5 Nf6',
    fullAnnotation: 'White plays the disjointed 9. a4 and 10. b3. Black clamps the flank with 9...a5, counter-strikes with 11...f5, and protects e6 smoothly with 12...Nf6, commanding the center.',
    annotations: {
      17: "9... a5 — Prophylactic wing clamp.",
      21: "11... f5! — Central counter-strike.",
      23: "12... Nf6 — Repel White's Ng5 jump and control e4."
    }
  },
  {
    id: 'kid-classical-punish-bg5-h6-nh5',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-classical-avalanche',
    name: 'Classical KID – 9. Bg5 h6 10. Bh4 g5 / 12...Nf4 Mating Net',
    shortName: 'Classical 10...g5! Flank Rip',
    category: 'Tactical Punishment',
    eco: 'E97 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Bg5 h6 10. Bh4 g5 11. Bg3 Nh5 12. Nd2 Nf4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Bg5 h6 10. Bh4 g5 11. Bg3 Nh5 12. Nd2 Nf4',
    fullAnnotation: 'White pins with 9. Bg5 prematurely. Black kicks with 9...h6 and 10...g5!, trapping the bishop on g3 and planting the unmovable 12...Nf4 monster knight in White\'s camp.',
    annotations: {
      17: "9... h6 — Question the bishop.",
      19: "10... g5! — Tactical Motif: King-Walk Rip forcing the bishop into a dead pocket on g3.",
      21: "11... Nh5 — Eye the f4 outpost.",
      23: "12... Nf4! — Dominate White's kingside with an unassailable knight."
    }
  },

  // =========================================================================
  // SUBMODULE 2: Sämisch Variation Blunders (5. f3) - 13 Lines
  // =========================================================================
  {
    id: 'kid-samisch-anchor-panno-mainline',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch Panno – 6. Be3 Nc6 7. Nge2 a6 / 11...dxc5 Queenside Breakthrough',
    shortName: 'Sämisch Panno Anchor',
    category: 'Anchor Mainline',
    eco: 'E81 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 a6 8. Qd2 Rb8 9. Rc1 Bd7 10. Nd1 b5 11. c5 dxc5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 a6 8. Qd2 Rb8 9. Rc1 Bd7 10. Nd1 b5 11. c5 dxc5',
    fullAnnotation: 'Oscar Panno\'s legendary Sämisch antidote: Black plays ...a6 and ...Rb8, preparing ...b5 to detonate White\'s queenside shelter and shred White\'s center with 11...dxc5.',
    annotations: {
      9: "5... O-O — Complete castling before opening the queenside.",
      13: "7... a6 — Prepare the explosive ...b5 push.",
      15: "8... Rb8 — Place rook on the future open b-file.",
      19: "10... b5! — Thematic Sämisch queenside explosion.",
      21: "11... dxc5 — Decimate White's central wedge with active counterplay."
    }
  },
  {
    id: 'kid-samisch-anchor-c5-gambit',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch Gambit – 6. Be3 c5 7. Nge2 Nc6 / 11...b4 Queenside Bind',
    shortName: 'Sämisch 6...c5 Anchor',
    category: 'Anchor Mainline',
    eco: 'E81 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. Nge2 Nc6 8. Qd2 Qa5 9. O-O-O a6 10. Kb1 b5 11. Nd5 b4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. Nge2 Nc6 8. Qd2 Qa5 9. O-O-O a6 10. Kb1 b5 11. Nd5 b4',
    fullAnnotation: 'The sharp 6...c5 gambit: Black sacrifices the pawn or offers queen checks on a5, pushing 11...b4! to cramp White\'s castled king and create decisive mating threats.',
    annotations: {
      11: "6... c5! — Challenge d4 immediately.",
      15: "8... Qa5 — Pin the c3 knight and pressure a2.",
      19: "10... b5! — Launch the queenside pawn storm.",
      21: "11... b4! — Tactical Motif: Queenside Clamp shutting down White's counter-attack."
    }
  },
  {
    id: 'kid-samisch-punish-gambiteer-dxc5',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch – Greedy 7. dxc5?! dxc5 / 12...Rb8 Open b-File Domination',
    shortName: 'Sämisch 7. dxc5?! Greed Refuted',
    category: 'Tactical Punishment',
    eco: 'E81 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. dxc5 dxc5 8. Qxd8 Rxd8 9. Bxc5 Nc6 10. Nd5 Nd7 11. Ba3 e6 12. Nc7 Rb8',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. dxc5 dxc5 8. Qxd8 Rxd8 9. Bxc5 Nc6 10. Nd5 Nd7 11. Ba3 e6 12. Nc7 Rb8',
    fullAnnotation: 'White grabs the c5 pawn greedily. Black activates all minor pieces, kicks the bishop with 10...Nd7!, and traps White\'s overextended knight on c7 with 11...e6 and 12...Rb8.',
    annotations: {
      12: "Inaccuracy: 7. dxc5?! surrenders the center for a pawn that cannot be held.",
      15: "8... Rxd8 — Seize the open d-file with tempo.",
      19: "10... Nd7! — Fork bishop and trap White's knight.",
      23: "12... Rb8 — The c7 knight is completely stranded; Black is winning."
    }
  },
  {
    id: 'kid-samisch-punish-bg5-inaccuracy',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch – 6. Bg5 c5 7. d5 e6 / 12...Qa5 Pin Destruction',
    shortName: 'Sämisch 6. Bg5 Refuted',
    category: 'Tactical Punishment',
    eco: 'E80 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Bg5 c5 7. d5 e6 8. Qd2 exd5 9. cxd5 a6 10. a4 Re8 11. Nge2 Nbd7 12. Ng3 Qa5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Bg5 c5 7. d5 e6 8. Qd2 exd5 9. cxd5 a6 10. a4 Re8 11. Nge2 Nbd7 12. Ng3 Qa5',
    fullAnnotation: 'White pins with 6. Bg5 in the Sämisch. Black breaks with 6...c5 and 7...e6, activates the rook on e8, and pins the a1 rook with 12...Qa5!, preparing ...b5 to rip open the queenside.',
    annotations: {
      11: "6... c5! — Benoni-style strike against White's center.",
      15: "8... exd5 — Open the e-file.",
      19: "10... Re8 — Pin on the e-file.",
      23: "12... Qa5! — Tactical Motif: Absolute Pin on the a4 pawn preparing ...b5."
    }
  },
  {
    id: 'kid-samisch-punish-opposite-castling-blast',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch – 9. O-O-O a6 / 12...b4 Mating Breakthrough',
    shortName: 'Sämisch 12...b4! Mating Breakthrough',
    category: 'Tactical Punishment',
    eco: 'E81 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. Nge2 Nc6 8. Qd2 Qa5 9. O-O-O a6 10. Kb1 b5 11. cxb5 axb5 12. dxc5 b4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. Nge2 Nc6 8. Qd2 Qa5 9. O-O-O a6 10. Kb1 b5 11. cxb5 axb5 12. dxc5 b4',
    fullAnnotation: 'In opposite castling warfare, White snatches on c5. Black unleashes 12...b4!, booting the c3 knight and opening the a-file for ...Qa2# mating nets.',
    annotations: {
      19: "10... b5! — The storm begins.",
      21: "11... axb5 — Open the a-file against White's king.",
      23: "12... b4! — Tactical Motif: Clearance / Decoy! Removing the c3 defender allows mate on a2."
    }
  },
  {
    id: 'kid-samisch-punish-e5-f5-f4-crush',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch – 6...e5 7. d5 Nh5 / 12...Nd7 Dark Square Dominance',
    shortName: 'Sämisch 9...f4 Trap Refutation',
    category: 'Tactical Punishment',
    eco: 'E87 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5 Nh5 8. Qd2 f5 9. O-O-O f4 10. Bf2 Bf6 11. Nge2 Bh4 12. Bg1 Nd7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. d5 Nh5 8. Qd2 f5 9. O-O-O f4 10. Bf2 Bf6 11. Nge2 Bh4 12. Bg1 Nd7',
    fullAnnotation: 'Black locks the kingside with 9...f4!, forces White\'s bishop to retreat with 11...Bh4, and establishes total control over the dark squares with 12...Nd7.',
    annotations: {
      13: "7... Nh5 — Prepare the kingside pawn roll.",
      17: "9... f4! — Wedge pawn locking down White's kingside.",
      21: "11... Bh4! — Trade or bury White's dark-squared bishop.",
      23: "12... Nd7 — Command the c5 and e5 squares."
    }
  },
  {
    id: 'kid-samisch-punish-reckless-g4',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch – Overextended 7. g4?! / 12...Rfc8 Center Blast',
    shortName: 'Sämisch 7. g4?! Overreach Refuted',
    category: 'Tactical Punishment',
    eco: 'E80 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. g4 cxd4 8. Bxd4 Nc6 9. Be3 Be6 10. Qd2 Ne5 11. b3 Qa5 12. Rc1 Rfc8',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. g4 cxd4 8. Bxd4 Nc6 9. Be3 Be6 10. Qd2 Ne5 11. b3 Qa5 12. Rc1 Rfc8',
    fullAnnotation: 'White launches a suicidal 7. g4?! flank expansion. Black liquidates the center with 7...cxd4, plants the knight on e5 attacking c4, and doubles rooks on the c-file with 12...Rfc8 for a crushing queenside breakthrough.',
    annotations: {
      12: "Mistake: 7. g4?! weakens the light squares and delays development.",
      15: "8... Nc6 — Develop knight with tempo on d4.",
      19: "10... Ne5! — Target the backward c4 pawn.",
      23: "12... Rfc8 — Overwhelming c-file pressure."
    }
  },
  {
    id: 'kid-samisch-punish-exd5-blunder',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch – Dubious 9. exd5?! / 12...b5 Flank Storm',
    shortName: 'Sämisch 9. exd5?! Blunder Punished',
    category: 'Tactical Punishment',
    eco: 'E81 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. d5 e6 8. Qd2 exd5 9. exd5 Re8 10. O-O-O a6 11. Bh6 Bh8 12. g4 b5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. d5 e6 8. Qd2 exd5 9. exd5 Re8 10. O-O-O a6 11. Bh6 Bh8 12. g4 b5',
    fullAnnotation: 'White opens the e-file with 9. exd5?!. Black pins the e3 bishop with 9...Re8, tucks the sniper bishop onto h8, and rips open the queenside with 12...b5! crashing through White\'s king.',
    annotations: {
      17: "9... Re8! — Pin White's e3 bishop.",
      21: "11... Bh8! — Preserve the dragon bishop.",
      23: "12... b5! — Tactical Motif: Wing Attack! White's castled king is defenseless."
    }
  },
  {
    id: 'kid-samisch-punish-c6-break',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch – 7...c6 8. Qd2 Nbd7 / 12...Nh7 Solid Rebound',
    shortName: 'Sämisch 7...c6 Setup',
    category: 'Tactical Punishment',
    eco: 'E87 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. Nge2 c6 8. Qd2 Nbd7 9. d5 cxd5 10. cxd5 a6 11. g4 h5 12. h3 Nh7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 e5 7. Nge2 c6 8. Qd2 Nbd7 9. d5 cxd5 10. cxd5 a6 11. g4 h5 12. h3 Nh7',
    fullAnnotation: 'Black meets White\'s kingside expansion with 11...h5! and routes the knight via 12...Nh7 to g5, stopping White\'s attack in its tracks while dominating the center.',
    annotations: {
      13: "7... c6 — Solidify d5.",
      21: "11... h5! — Clamp White's pawn thrust.",
      23: "12... Nh7 — Reposition knight to exploit the weakened g5 square."
    }
  },
  {
    id: 'kid-samisch-punish-bd3-passivity',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch – Passive 6. Bd3?! c5 / 12...Bd7 Queenside March',
    shortName: 'Sämisch 6. Bd3?! Passive Refuted',
    category: 'Tactical Punishment',
    eco: 'E80 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Bd3 c5 7. d5 e6 8. Nge2 exd5 9. cxd5 Nbd7 10. O-O Ne5 11. Bc2 a6 12. a4 Bd7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Bd3 c5 7. d5 e6 8. Nge2 exd5 9. cxd5 Nbd7 10. O-O Ne5 11. Bc2 a6 12. a4 Bd7',
    fullAnnotation: 'White develops the bishop passively to d3. Black plants a monster knight on e5 with 10...Ne5!, pushes ...a6, and prepares ...b5 with 12...Bd7 holding a superior positional grip.',
    annotations: {
      11: "6... c5! — Immediate Benoni strike.",
      19: "10... Ne5! — Dominate the central outpost.",
      23: "12... Bd7 — Prepare the unstoppable ...b5 queenside breakthrough."
    }
  },
  {
    id: 'kid-samisch-punish-nxe4-tactical-strike',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch – 8. dxc5 Qa5 / 9...Nxe4! Sacrificial Blast',
    shortName: 'Sämisch 9...Nxe4! Central Blast',
    category: 'Tactical Punishment',
    eco: 'E81 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. Nge2 Nc6 8. dxc5 Qa5 9. cxd6 Nxe4 10. fxe4 Bxc3+ 11. bxc3 exd6 12. Qxd6 Be6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. Nge2 Nc6 8. dxc5 Qa5 9. cxd6 Nxe4 10. fxe4 Bxc3+ 11. bxc3 exd6 12. Qxd6 Be6',
    fullAnnotation: 'A stunning tactical thunderbolt! When White snatches 8. dxc5, Black unloads 9...Nxe4!!, destroying White\'s king cover, ruining the c3 structure, and developing a decisive initiative with 12...Be6.',
    annotations: {
      15: "8... Qa5 — Pin the c3 knight.",
      17: "9... Nxe4!! — Tactical Motif: Sacrificial Thunderbolt ripping open White's center!",
      19: "10... Bxc3+ — Check with tempo.",
      23: "12... Be6 — Coordinate all pieces against White's stranded king."
    }
  },
  {
    id: 'kid-samisch-punish-h4-flank-overreach',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch – Reckless 7. h4?! / 12...Ne5 Center Domination',
    shortName: 'Sämisch 7. h4?! Refuted',
    category: 'Tactical Punishment',
    eco: 'E80 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. h4 cxd4 8. Bxd4 Nc6 9. Be3 Be6 10. Qd2 Rc8 11. Nd5 Bxd5 12. cxd5 Ne5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 c5 7. h4 cxd4 8. Bxd4 Nc6 9. Be3 Be6 10. Qd2 Rc8 11. Nd5 Bxd5 12. cxd5 Ne5',
    fullAnnotation: 'White pushes 7. h4?! prematurely. Black dismantles White\'s center with 7...cxd4, seizes the c-file with 10...Rc8, and establishes the impenetrable 12...Ne5 knight outpost with decisive advantage.',
    annotations: {
      12: "Mistake: 7. h4?! neglects king safety.",
      19: "10... Rc8 — Seize the open c-file.",
      23: "12... Ne5! — Tactical Motif: Monster Outpost targeting c4 and d3."
    }
  },
  {
    id: 'kid-samisch-punish-panno-b5-assault',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-samisch-blunders',
    name: 'Sämisch Panno – 8. a3 a6 / 12...e6 Central Lock',
    shortName: 'Sämisch Panno 10...b5 Assault',
    category: 'Tactical Punishment',
    eco: 'E81 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 Rb8 8. a3 a6 9. b4 b5 10. cxb5 axb5 11. Rc1 Bd7 12. Qd2 e6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f3 O-O 6. Be3 Nc6 7. Nge2 Rb8 8. a3 a6 9. b4 b5 10. cxb5 axb5 11. Rc1 Bd7 12. Qd2 e6',
    fullAnnotation: 'White tries to lock the queenside with 8. a3 and 9. b4. Black counter-attacks with 9...b5!, dominates the b-file, and locks the center with 12...e6 holding superior piece coordination.',
    annotations: {
      13: "7... Rb8 — Place rook on the b-file.",
      17: "9... b5! — Thematic Queenside Strike.",
      23: "12... e6 — Cement the center with total positional stability."
    }
  },

  // =========================================================================
  // SUBMODULE 3: Averbakh & Four Pawns Overextension - 13 Lines
  // =========================================================================
  {
    id: 'kid-averbakh-anchor-mainline',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Averbakh Variation – 5. Be2 O-O 6. Bg5 c5 / 12...Nh5 Equality',
    shortName: 'Averbakh Mainline Anchor',
    category: 'Anchor Mainline',
    eco: 'E73 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5 h6 8. Bf4 e6 9. Qd2 exd5 10. exd5 Re8 11. Nf3 g5 12. Bg3 Nh5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5 h6 8. Bf4 e6 9. Qd2 exd5 10. exd5 Re8 11. Nf3 g5 12. Bg3 Nh5',
    fullAnnotation: 'Yuri Averbakh\'s positional pin: White prevents ...e5 with 6. Bg5. Black counters with the sharp 6...c5 and 8...e6, kicks the bishop with 11...g5, and targets the bishop with 12...Nh5! achieving complete equality.',
    annotations: {
      11: "6... c5! — The modern antidote breaking White's pin.",
      15: "8... e6 — Strike at d5.",
      21: "11... g5! — Dislodge White's bishop.",
      23: "12... Nh5 — Eliminate White's dark-squared bishop with active counterplay."
    }
  },
  {
    id: 'kid-four-pawns-anchor-mainline',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Four Pawns Attack – 5. f4 O-O 6. Nf3 c5 / 12...Qb6 Counter-Attack',
    shortName: 'Four Pawns Attack Anchor',
    category: 'Anchor Mainline',
    eco: 'E76 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. cxd5 Re8 10. e5 dxe5 11. fxe5 Ng4 12. Bg5 Qb6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. cxd5 Re8 10. e5 dxe5 11. fxe5 Ng4 12. Bg5 Qb6',
    fullAnnotation: 'The sharpest mainline against White\'s four-pawn steamroller: Black breaks open the center with 6...c5 and 8...exd5, hammers e5 with 9...Re8 and 11...Ng4, and targets b2 and d4 with 12...Qb6!.',
    annotations: {
      9: "5. f4 — White's four pawns march forward.",
      11: "6... c5! — Immediate central counter-punch.",
      17: "9... Re8 — Pin on the e-file.",
      23: "12... Qb6! — Tactical Motif: Double Attack hitting b2 and pinning White's center."
    }
  },
  {
    id: 'kid-four-pawns-anchor-b5-counter',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Four Pawns Attack – 7...b5 Benko Gambit / 12...Bxb5 Liquidation',
    shortName: 'Four Pawns 7...b5 Counter-Gambit',
    category: 'Anchor Mainline',
    eco: 'E77 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 b5 8. cxb5 a6 9. a4 Qa5 10. Bd2 axb5 11. Bxb5 Ba6 12. O-O Bxb5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 b5 8. cxb5 a6 9. a4 Qa5 10. Bd2 axb5 11. Bxb5 Ba6 12. O-O Bxb5',
    fullAnnotation: 'Black detonates White\'s broad pawn center with the hyper-aggressive 7...b5! Benko-style sacrifice, opening the queenside files and trading dark-squared bishops with 12...Bxb5.',
    annotations: {
      13: "7... b5! — Tactical Motif: Flank Gambit undermining White's central chain.",
      17: "9... Qa5 — Double attack pinning the c3 knight.",
      23: "12... Bxb5 — Eliminate White's active bishop; Black controls the queenside."
    }
  },
  {
    id: 'kid-four-pawns-punish-qa5-fork',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Four Pawns – Dubious 7. dxc5?! Qa5! / 12...Qb6+ Royal Fork',
    shortName: 'Four Pawns 7. dxc5?! Refuted',
    category: 'Tactical Punishment',
    eco: 'E76 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. dxc5 Qa5 8. Bd3 Qxc5 9. Qe2 Nc6 10. Be3 Qa5 11. O-O Ng4 12. Bd2 Qb6+',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. dxc5 Qa5 8. Bd3 Qxc5 9. Qe2 Nc6 10. Be3 Qa5 11. O-O Ng4 12. Bd2 Qb6+',
    fullAnnotation: 'White surrenders the center with 7. dxc5?!. Black checks with 7...Qa5!, recovers the pawn with tempo, and drops the 12...Qb6+! royal fork picking off b2 and shattering White\'s position.',
    annotations: {
      12: "Mistake: 7. dxc5?! surrenders the center and walks into queen checks.",
      13: "7... Qa5! — Pin e4 and threaten ...Nxe4.",
      21: "11... Ng4! — Threaten ...Bd4+ and ...Nf2 fork.",
      23: "12... Qb6+! — Tactical Motif: Royal Fork hitting king and the hanging b2 pawn."
    }
  },
  {
    id: 'kid-averbakh-punish-dxc5-blunder',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Averbakh – 7. dxc5?! Qa5 / 12...Bxe2 Bishop Pair Conquest',
    shortName: 'Averbakh 7. dxc5?! Punished',
    category: 'Tactical Punishment',
    eco: 'E73 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. dxc5 Qa5 8. Bd2 Qxc5 9. Nf3 Nc6 10. O-O Bg4 11. Be3 Qa5 12. Nd4 Bxe2',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. dxc5 Qa5 8. Bd2 Qxc5 9. Nf3 Nc6 10. O-O Bg4 11. Be3 Qa5 12. Nd4 Bxe2',
    fullAnnotation: 'White gives up the center with 7. dxc5?!. Black pins on the a5-e1 diagonal, pins with 10...Bg4, and trades bishops with 12...Bxe2, enjoying effortless equality and superior piece coordination.',
    annotations: {
      12: "Inaccuracy: 7. dxc5?! surrenders central space.",
      13: "7... Qa5 — Active queen development with pin.",
      23: "12... Bxe2 — Eliminate White's key defending piece."
    }
  },
  {
    id: 'kid-averbakh-punish-bh4-g5-trap',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Averbakh – 8. Bh4 g5 9. Bg3 / 12...Re8 E-File Domination',
    shortName: 'Averbakh 8. Bh4?! Trap Refuted',
    category: 'Tactical Punishment',
    eco: 'E73 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5 h6 8. Bh4 g5 9. Bg3 e6 10. h4 exd5 11. exd5 Re8 12. hxg5 hxg5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5 h6 8. Bh4 g5 9. Bg3 e6 10. h4 exd5 11. exd5 Re8 12. hxg5 hxg5',
    fullAnnotation: 'White retreats 8. Bh4?!. Black drives the bishop away with 8...g5!, opens the center with 9...e6 and 10...exd5, and commands the open e-file with 11...Re8 with decisive piece activity.',
    annotations: {
      14: "Mistake: 8. Bh4?! allows Black to rip the kingside open.",
      15: "8... g5! — Drive the bishop away.",
      19: "10... exd5 — Shatter White's center.",
      21: "11... Re8! — Pin White's e2 bishop.",
      23: "12... hxg5 — Keep the extra g-pawn and dominate the e-file."
    }
  },
  {
    id: 'kid-four-pawns-punish-dxe6-passivity',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Four Pawns – Passive 8. dxe6?! Bxe6 / 12...Bxf3 Bishop Trade',
    shortName: 'Four Pawns 8. dxe6?! Passive Refuted',
    category: 'Tactical Punishment',
    eco: 'E76 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. dxe6 Bxe6 9. Be2 Nc6 10. O-O Re8 11. Bd3 Bg4 12. h3 Bxf3',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. dxe6 Bxe6 9. Be2 Nc6 10. O-O Re8 11. Bd3 Bg4 12. h3 Bxf3',
    fullAnnotation: 'White surrenders the d5 wedge with 8. dxe6?!. Black develops freely with 8...Bxe6, pins with 11...Bg4, and trades on f3 to control the key d4 outpost with the c6 knight.',
    annotations: {
      14: "Inaccuracy: 8. dxe6?! relieves all central pressure.",
      15: "8... Bxe6 — Active bishop development.",
      21: "11... Bg4 — Pin White's f3 knight.",
      23: "12... Bxf3 — Secure complete control over the d4 hole."
    }
  },
  {
    id: 'kid-four-pawns-punish-center-rupture',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Four Pawns – 9. e5 dxe5 10. fxe5 Ng4 / 12...Nxe5 Central Sweep',
    shortName: 'Four Pawns 12...Nxe5 Central Sweep',
    category: 'Tactical Punishment',
    eco: 'E76 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. e5 dxe5 10. fxe5 Ng4 11. Bg5 Qa5 12. cxd5 Nxe5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. e5 dxe5 10. fxe5 Ng4 11. Bg5 Qa5 12. cxd5 Nxe5',
    fullAnnotation: 'White overextends with 9. e5. Black liquidates with 9...dxe5, pins with 11...Qa5, and collects the overextended e5 pawn with 12...Nxe5, remaining a solid pawn up with dynamic piece activity.',
    annotations: {
      16: "Inaccuracy: 9. e5?! overextends White's center prematurely.",
      21: "11... Qa5! — Pin the c3 knight.",
      23: "12... Nxe5! — Tactical Motif: Regaining Material with overwhelming central advantage."
    }
  },
  {
    id: 'kid-averbakh-punish-e6-re8-break',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Averbakh – 8. Nf3 exd5 9. cxd5 Re8 / 12...Nbd7 Flank Bind',
    shortName: 'Averbakh 9...Re8 Flank Bind',
    category: 'Tactical Punishment',
    eco: 'E73 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5 e6 8. Nf3 exd5 9. cxd5 Re8 10. Nd2 h6 11. Bh4 a6 12. a4 Nbd7',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5 e6 8. Nf3 exd5 9. cxd5 Re8 10. Nd2 h6 11. Bh4 a6 12. a4 Nbd7',
    fullAnnotation: 'Black executes the modern Benoni structure against the Averbakh: 9...Re8 pins e4, 10...h6 dislodges the bishop, and 12...Nbd7 prepares the crushing ...c4 or ...Ne5 jumps.',
    annotations: {
      17: "9... Re8! — Direct pressure on White's e4 pawn.",
      19: "10... h6 — Question the bishop.",
      23: "12... Nbd7 — Thematic knight deployment controlling e5."
    }
  },
  {
    id: 'kid-averbakh-punish-early-qd2',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Averbakh – Premature 8. Qd2?! exd5 / 12...Qb6 Double Hit',
    shortName: 'Averbakh 8. Qd2?! Blunder Refuted',
    category: 'Tactical Punishment',
    eco: 'E73 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5 e6 8. Qd2 exd5 9. exd5 Re8 10. Nf3 Bg4 11. O-O Nbd7 12. Rfe1 Qb6',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 c5 7. d5 e6 8. Qd2 exd5 9. exd5 Re8 10. Nf3 Bg4 11. O-O Nbd7 12. Rfe1 Qb6',
    fullAnnotation: 'White plays the slow 8. Qd2?!. Black takes on d5, activates the rook on e8, pins with 10...Bg4, and targets b2 and d4 with 12...Qb6!, commanding the queenside.',
    annotations: {
      14: "Inaccuracy: 8. Qd2?! is passive and fails to control the e-file.",
      17: "9... Re8 — Pin on the e-file.",
      23: "12... Qb6! — Tactical Motif: Double Attack hitting b2 and d4."
    }
  },
  {
    id: 'kid-four-pawns-punish-na6-c5-break',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Four Pawns – 6...Na6 7. Bd3 c5 / 12...Nb4 Knight Dominance',
    shortName: 'Four Pawns 6...Na6 Outpost',
    category: 'Tactical Punishment',
    eco: 'E76 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 Na6 7. Bd3 c5 8. d5 e6 9. O-O exd5 10. cxd5 Bg4 11. h3 Bxf3 12. Qxf3 Nb4',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 Na6 7. Bd3 c5 8. d5 e6 9. O-O exd5 10. cxd5 Bg4 11. h3 Bxf3 12. Qxf3 Nb4',
    fullAnnotation: 'Black uses the flexible 6...Na6 system. After 10...Bg4 and 11...Bxf3, Black invades with 12...Nb4!, threatening White\'s key bishop and dominating the dark squares.',
    annotations: {
      11: "6... Na6 — The flexible knight development aiming for c7/b4.",
      21: "11... Bxf3 — Trade off to secure knight outposts.",
      23: "12... Nb4! — Tactical Motif: Knight Infiltration targeting the d3 bishop."
    }
  },
  {
    id: 'kid-averbakh-punish-nbd7-e5-break',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Averbakh – 6...Nbd7 7. Nf3 e5 / 12...f5 Kingside Avalanche',
    shortName: 'Averbakh 12...f5 Kingside Avalanche',
    category: 'Tactical Punishment',
    eco: 'E73 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 Nbd7 7. Nf3 e5 8. O-O h6 9. Be3 Ng4 10. Bc1 c6 11. d5 c5 12. Ne1 f5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O 6. Bg5 Nbd7 7. Nf3 e5 8. O-O h6 9. Be3 Ng4 10. Bc1 c6 11. d5 c5 12. Ne1 f5',
    fullAnnotation: 'Black meets 6. Bg5 with 6...Nbd7 and 7...e5, kicks White\'s bishop back with 8...h6 and 9...Ng4!, and detonates the kingside with 12...f5!, launching the signature King\'s Indian attack.',
    annotations: {
      13: "7... e5! — Thematic KID strike.",
      17: "9... Ng4! — Harass White's bishop.",
      23: "12... f5! — Tactical Motif: Pawn Avalanche smashing into White's kingside."
    }
  },
  {
    id: 'kid-four-pawns-punish-10nxe4-sac',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-averbakh-four-pawns',
    name: 'Four Pawns Attack – 10. e5 dxe5 / 13...Nxe5 Dynamic Dominance',
    shortName: 'Four Pawns 13...Nxe5 Dominance',
    category: 'Tactical Punishment',
    eco: 'E76 1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. cxd5 Re8 10. e5 dxe5 11. fxe5 Ng4 12. Bg5 Qa5 13. O-O Nxe5',
    pgn: '1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. Be2 exd5 9. cxd5 Re8 10. e5 dxe5 11. fxe5 Ng4 12. Bg5 Qa5 13. O-O Nxe5',
    fullAnnotation: 'When White pushes 10. e5 in the Four Pawns Attack, Black liquidates the center, pins with 12...Qa5, and collects the e5 pawn with 13...Nxe5!, dismantling White\'s overextended pawn phalanx with dynamic piece dominance.',
    annotations: {
      17: "9... Re8 — Pile pressure on e4.",
      19: "10... dxe5 — Liquidate the center.",
      23: "12... Qa5! — Pin on the c3 knight.",
      25: "13... Nxe5! — Tactical Motif: Central Decimation recovering material with initiative."
    }
  },

  // =========================================================================
  // SUBMODULE 4: Fianchetto & Sideline Refutations - 13 Lines
  // =========================================================================
  {
    id: 'kid-fianchetto-anchor-classical-na5',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Fianchetto KID – 6...Nc6 7. d5 Na5 / 12...e5 Central Fortress',
    shortName: 'Fianchetto KID 8...Na5 Anchor',
    category: 'Anchor Mainline',
    eco: 'E66 1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O Nc6 7. Nc3 a6 8. d5 Na5 9. Nd2 c5 10. Qc2 Rb8 11. b3 b5 12. Bb2 e5',
    pgn: '1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O Nc6 7. Nc3 a6 8. d5 Na5 9. Nd2 c5 10. Qc2 Rb8 11. b3 b5 12. Bb2 e5',
    fullAnnotation: 'The classical antidote to the Fianchetto System: Black maneuvers the knight to a5 to target c4, supports the queenside with ...b5, and locks the center with 12...e5! controlling the board.',
    annotations: {
      11: "6... Nc6 — Panno development.",
      15: "8... Na5 — Outpost targeting White's weak c4 pawn.",
      19: "10... Rb8 — Prepare the ...b5 break.",
      23: "12... e5! — Central fortress neutralizing White's g2 bishop."
    }
  },
  {
    id: 'kid-fianchetto-anchor-panno-b5',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Fianchetto Panno – 7...a6 8. h3 Rb8 / 12...b4 Queenside Wedge',
    shortName: 'Fianchetto Panno Anchor',
    category: 'Anchor Mainline',
    eco: 'E63 1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O Nc6 7. Nc3 a6 8. h3 Rb8 9. e4 b5 10. cxb5 axb5 11. d5 Na5 12. Nd4 b4',
    pgn: '1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O Nc6 7. Nc3 a6 8. h3 Rb8 9. e4 b5 10. cxb5 axb5 11. d5 Na5 12. Nd4 b4',
    fullAnnotation: 'In the Fianchetto Panno, Black launches 9...b5! and pushes 12...b4!, kicking White\'s knight away and securing the dominant c4 outpost for Black\'s a5 knight.',
    annotations: {
      13: "7... a6 — Prepare the ...b5 break.",
      17: "9... b5! — Thematic wing explosion.",
      23: "12... b4! — Tactical Motif: Decoy kicking White's c3 defender."
    }
  },
  {
    id: 'kid-fianchetto-punish-c5-e6-rupture',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Fianchetto – 6...c5 7. d5 d6 / 12...Nbd7 Benoni Superiority',
    shortName: 'Fianchetto 6...c5 Benoni Strike',
    category: 'Tactical Punishment',
    eco: 'E62 1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O c5 7. d5 e6 8. Nc3 exd5 9. cxd5 Re8 10. Nd2 a6 11. a4 Nbd7 12. h3 Rb8',
    pgn: '1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O c5 7. d5 e6 8. Nc3 exd5 9. cxd5 Re8 10. Nd2 a6 11. a4 Nbd7 12. h3 Rb8',
    fullAnnotation: 'Black strikes with 6...c5 turning the game into a favorable Benoni. The e-file pressure via 9...Re8 and the queenside pawn expansion 12...Rb8 give Black dynamic equality and initiative.',
    annotations: {
      11: "6... c5! — Benoni-style counter-attack.",
      17: "9... Re8 — Pin on the e-file.",
      23: "12... Rb8 — Prepare ...b5 with active counterplay."
    }
  },
  {
    id: 'kid-fianchetto-punish-e4-c6-break',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Fianchetto – 8. e4 c6 9. Re1 exd4 / 12...Ne5 Knight Fork',
    shortName: 'Fianchetto 8. e4?! c6 Punished',
    category: 'Tactical Punishment',
    eco: 'E68 1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O Nbd7 7. Nc3 e5 8. e4 c6 9. Re1 exd4 10. Nxd4 Re8 11. h3 Qb6 12. Nb3 Ne5',
    pgn: '1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O Nbd7 7. Nc3 e5 8. e4 c6 9. Re1 exd4 10. Nxd4 Re8 11. h3 Qb6 12. Nb3 Ne5',
    fullAnnotation: 'White plays the classical 8. e4 in the Fianchetto. Black breaks with 8...c6 and 9...exd4, puts queen pressure on d4 with 11...Qb6, and targets c4 with the active 12...Ne5! knight jump.',
    annotations: {
      15: "8... c6 — The solid Gallagher setup.",
      21: "11... Qb6! — Pressure on d4 and b2.",
      23: "12... Ne5! — Tactical Motif: Double Attack hitting c4 and d3."
    }
  },
  {
    id: 'kid-fianchetto-punish-b3-dxc4-blast',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Fianchetto – 10. b3 b5 / 12...bxc4 Long Diagonal Decimation',
    shortName: 'Fianchetto 12...bxc4 Long Diagonal Fire',
    category: 'Tactical Punishment',
    eco: 'E66 1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O Nc6 7. Nc3 a6 8. d5 Na5 9. Nd2 c5 10. Qc2 Rb8 11. b3 b5 12. Bb2 bxc4',
    pgn: '1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O Nc6 7. Nc3 a6 8. d5 Na5 9. Nd2 c5 10. Qc2 Rb8 11. b3 b5 12. Bb2 bxc4',
    fullAnnotation: 'Black tears open the queenside against the Fianchetto with 11...b5 and 12...bxc4!, unleashing the g7 dragon bishop against White\'s b2 bishop and rocketing into an advantageous position.',
    annotations: {
      19: "10... Rb8 — Rook aligns on the b-file.",
      21: "11... b5! — Thematic wing break.",
      23: "12... bxc4! — Tactical Motif: Long Diagonal Ignition! Ripping open White's queenside."
    }
  },
  {
    id: 'kid-sidelines-punish-torre-attack',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Torre Attack – 3. Bg5 Bg7 4. Nbd2 d5 / 12...c6 Granite Center',
    shortName: 'Torre Attack 4...d5 Refuted',
    category: 'Tactical Punishment',
    eco: 'A48 1. d4 Nf6 2. Nf3 g6 3. Bg5 Bg7 4. Nbd2 d5 5. e3 O-O 6. c3 Nbd7 7. Be2 Re8 8. O-O e5 9. dxe5 Nxe5 10. Nxe5 Rxe5 11. Nf3 Re8 12. Qb3 c6',
    pgn: '1. d4 Nf6 2. Nf3 g6 3. Bg5 Bg7 4. Nbd2 d5 5. e3 O-O 6. c3 Nbd7 7. Be2 Re8 8. O-O e5 9. dxe5 Nxe5 10. Nxe5 Rxe5 11. Nf3 Re8 12. Qb3 c6',
    fullAnnotation: 'Against the Torre Attack, Black shuts down White\'s kingside plans with 4...d5!, strikes centrally with 8...e5!, and solidifies the center with 12...c6 with complete control.',
    annotations: {
      7: "4... d5! — Stake central territory and blunt White's bishop.",
      15: "8... e5! — Central breakthrough.",
      19: "10... Rxe5 — Active rook on the e-file.",
      23: "12... c6 — Iron granite center; Black is completely equal with superior piece activity."
    }
  },
  {
    id: 'kid-sidelines-punish-london-system',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'London System vs KID – 2. Bf4 Bg7 3. e3 d6 / 12...Bc6 Domination',
    shortName: 'London System vs KID Refuted',
    category: 'Tactical Punishment',
    eco: 'A48 1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. h3 c5 6. c3 b6 7. Be2 Bb7 8. O-O d6 9. Nbd2 Nbd7 10. a4 a6 11. Bh2 Qc7 12. Re1 Bc6',
    pgn: '1. d4 Nf6 2. Bf4 g6 3. e3 Bg7 4. Nf3 O-O 5. h3 c5 6. c3 b6 7. Be2 Bb7 8. O-O d6 9. Nbd2 Nbd7 10. a4 a6 11. Bh2 Qc7 12. Re1 Bc6',
    fullAnnotation: 'Dismantling the London System: Black fianchettoes both bishops with ...Bg7 and ...Bb7, controls the center with ...c5 and ...Qc7, and establishes 12...Bc6 preparing ...b5 with a decisive queenside expansion.',
    annotations: {
      9: "5... c5! — Attack White's d4 pyramid.",
      13: "7... Bb7 — Double fianchetto neutralizes White's bishop.",
      21: "11... Qc7 — Harmonious queen placement.",
      23: "12... Bc6 — Prepare the crushing ...b5 queenside storm."
    }
  },
  {
    id: 'kid-sidelines-punish-barry-attack',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Barry Attack – 3. Nc3 d5 4. Bf4 Bg7 / 12...Qxc3+ Ruined Structure',
    shortName: 'Barry Attack 12...Qxc3+ Refuted',
    category: 'Tactical Punishment',
    eco: 'D00 1. d4 Nf6 2. Nf3 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. h4 c5 7. dxc5 Qa5 8. Be2 Ne4 9. Be5 Bxe5 10. Nxe5 Nxc3 11. Qd2 Qxc5 12. Qxc3 Qxc3+',
    pgn: '1. d4 Nf6 2. Nf3 g6 3. Nc3 d5 4. Bf4 Bg7 5. e3 O-O 6. h4 c5 7. dxc5 Qa5 8. Be2 Ne4 9. Be5 Bxe5 10. Nxe5 Nxc3 11. Qd2 Qxc5 12. Qxc3 Qxc3+',
    fullAnnotation: 'White attempts the aggressive Barry Attack with 6. h4. Black counters with 6...c5! and 7...Qa5, wins the exchange on c3 with 10...Nxc3, and ruins White\'s structure into isolated doubled c-pawns with 12...Qxc3+.',
    annotations: {
      11: "6... c5! — Blast open White's center before White can attack.",
      15: "8... Ne4! — Tactical Motif: Fork / Pin on the c3 knight.",
      19: "10... Nxc3 — Ruin White's pawn structure.",
      23: "12... Qxc3+! — Forcequeen exchange leaving White with shattered doubled c-pawns in a lost endgame."
    }
  },
  {
    id: 'kid-fianchetto-punish-d5-na6-nc5',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Fianchetto – 6. d5?! Na6 7. O-O Nc5 / 12...Qe7 Piece Harmony',
    shortName: 'Fianchetto 6. d5?! Passive Refuted',
    category: 'Tactical Punishment',
    eco: 'E62 1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. d5 Na6 7. O-O Nc5 8. Nc3 a5 9. Nd4 Bd7 10. e4 e5 11. dxe6 fxe6 12. Be3 Qe7',
    pgn: '1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. d5 Na6 7. O-O Nc5 8. Nc3 a5 9. Nd4 Bd7 10. e4 e5 11. dxe6 fxe6 12. Be3 Qe7',
    fullAnnotation: 'White pushes 6. d5?! prematurely. Black routes the knight to the premier c5 outpost, secures it with 8...a5, breaks with 10...e5, and achieves full piece harmony with 12...Qe7.',
    annotations: {
      11: "6... Na6 — Target the c5 outpost.",
      13: "7... Nc5! — Monster knight placement.",
      15: "8... a5! — Prevent White from kicking the knight.",
      23: "12... Qe7 — Connect rooks and dominate the e-file."
    }
  },
  {
    id: 'kid-fianchetto-punish-dxe5-qc2-a5',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Fianchetto – 8. dxe5 dxe5 9. Qc2 c6 / 12...a5 Flank Lockdown',
    shortName: 'Fianchetto 8. dxe5 Squeeze',
    category: 'Tactical Punishment',
    eco: 'E67 1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O Nbd7 7. Nc3 e5 8. dxe5 dxe5 9. Qc2 c6 10. Rd1 Qe7 11. b3 Re8 12. a4 a5',
    pgn: '1. d4 Nf6 2. c4 g6 3. g3 Bg7 4. Bg2 O-O 5. Nf3 d6 6. O-O Nbd7 7. Nc3 e5 8. dxe5 dxe5 9. Qc2 c6 10. Rd1 Qe7 11. b3 Re8 12. a4 a5',
    fullAnnotation: 'White liquidates 8. dxe5. Black establishes the solid Gallagher setup with ...c6, coordinates the queen and rook on the e-file, and freezes White\'s queenside with 12...a5!, retaining the better bishop and open lines.',
    annotations: {
      15: "8... dxe5 — Recapture maintaining central equality.",
      19: "10... Qe7 — Unpin the d7 knight.",
      23: "12... a5! — Flank clamp denying White's b4 push."
    }
  },
  {
    id: 'kid-sidelines-punish-colle-system',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Colle System vs KID – 3. e3 Bg7 4. Bd3 O-O / 12...Nh5 Infiltration',
    shortName: 'Colle System vs KID Refuted',
    category: 'Tactical Punishment',
    eco: 'A48 1. d4 Nf6 2. Nf3 g6 3. e3 Bg7 4. Bd3 O-O 5. Nbd2 d6 6. O-O c5 7. c3 Nc6 8. Re1 e5 9. dxe5 dxe5 10. Bc2 Qe7 11. e4 Rd8 12. Qe2 Nh5',
    pgn: '1. d4 Nf6 2. Nf3 g6 3. e3 Bg7 4. Bd3 O-O 5. Nbd2 d6 6. O-O c5 7. c3 Nc6 8. Re1 e5 9. dxe5 dxe5 10. Bc2 Qe7 11. e4 Rd8 12. Qe2 Nh5',
    fullAnnotation: 'White plays the toothless Colle System. Black strikes with ...c5 and ...e5, pins on the d-file with 11...Rd8, and invades with 12...Nh5! eyeing the fatal f4 outpost.',
    annotations: {
      11: "6... c5! — Attack the d4 base.",
      15: "8... e5! — Blow open the center.",
      21: "11... Rd8 — Pin the d2 knight against White's queen.",
      23: "12... Nh5! — Tactical Motif: Knight Infiltration eyeing f4."
    }
  },
  {
    id: 'kid-sidelines-punish-unsound-h4',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Flank March – 3. h4?! / 12...Bxf3 Central Decimation',
    shortName: 'Flank 3. h4?! Refuted',
    category: 'Tactical Punishment',
    eco: 'E60 1. d4 Nf6 2. c4 g6 3. h4 Bg7 4. Nc3 d5 5. cxd5 Nxd5 6. e4 Nxc3 7. bxc3 c5 8. Be3 Qa5 9. Qd2 Nc6 10. Nf3 Bg4 11. Be2 Rd8 12. Rd1 Bxf3',
    pgn: '1. d4 Nf6 2. c4 g6 3. h4 Bg7 4. Nc3 d5 5. cxd5 Nxd5 6. e4 Nxc3 7. bxc3 c5 8. Be3 Qa5 9. Qd2 Nc6 10. Nf3 Bg4 11. Be2 Rd8 12. Rd1 Bxf3',
    fullAnnotation: 'White attempts a foolish 3. h4?! flank march. Black immediately blasts open the center with 4...d5! and 7...c5!, pins the c3 pawn with 8...Qa5, and demolishes d4 with 11...Rd8 and 12...Bxf3, winning the pinned center.',
    annotations: {
      6: "Blunder: 3. h4?! completely neglects central control.",
      7: "4... d5! — Tactical Motif: Counter-Strike in the center when attacked on the flank!",
      15: "8... Qa5 — Pin c3 against White's king.",
      21: "11... Rd8 — Pile unstoppable pressure on the d4 pawn.",
      23: "12... Bxf3! — Remove the defender of d4; White's center collapses."
    }
  },
  {
    id: 'kid-sidelines-punish-trompowsky',
    courseId: 'kings-indian-defense',
    subCourseId: 'kid-fianchetto-sidelines',
    name: 'Trompowsky Attack – 2. Bg5 Ne4! / 12...Bg7 Dark-Square Domination',
    shortName: 'Trompowsky 2. Bg5 Refuted',
    category: 'Tactical Punishment',
    eco: 'A45 1. d4 Nf6 2. Bg5 Ne4 3. Bf4 d5 4. e3 c5 5. Bd3 Nc6 6. Bxe4 dxe4 7. d5 e5 8. Bg3 Ne7 9. Nc3 Nf5 10. Bxe5 Qe7 11. Bf4 g5 12. Bg3 Bg7',
    pgn: '1. d4 Nf6 2. Bg5 Ne4 3. Bf4 d5 4. e3 c5 5. Bd3 Nc6 6. Bxe4 dxe4 7. d5 e5 8. Bg3 Ne7 9. Nc3 Nf5 10. Bxe5 Qe7 11. Bf4 g5 12. Bg3 Bg7',
    fullAnnotation: 'White plays the tricky Trompowsky with 2. Bg5. Black counter-attacks immediately with 2...Ne4!, strikes the center with 4...c5 and 7...e5!, traps the bishop with 11...g5!, and claims the board with 12...Bg7 holding complete dominance.',
    annotations: {
      3: "2... Ne4! — Active knight outpost hitting the pinned bishop.",
      7: "4... c5! — Immediate central strike.",
      13: "7... e5! — Central counter-strike.",
      21: "11... g5! — Tactical Motif: Spatial Encirclement trapping White's bishop.",
      23: "12... Bg7 — Monster bishop commanding the dark squares."
    }
  }
];

console.log('Total King\'s Indian Defense lines to compile:', kidRaw.length);

const processed = kidRaw.map(buildBlackLine);

const fileContent = `/* ============================================================
   AUTONOMOUSLY CURATED PRACTICAL REPERTOIRE LINES
   Course: kings-indian-defense (${processed.length} Master Lines - 81% Punishments)
   Tactical Blunder Punishments & Positional Master Refutations
   ============================================================ */

export const kingsIndianDefenseLines = ${JSON.stringify(processed, null, 2)};
`;

fs.writeFileSync('src/data/lines/kings-indian-defense.js', fileContent, 'utf-8');
console.log(`Successfully written src/data/lines/kings-indian-defense.js (${processed.length} lines)`);
