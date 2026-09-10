import { Chess } from 'chess.js';
import fs from 'fs';
import { buildBlackLine } from './builder-utils.js';

export const nimzoRaw = [
  // =========================================================================
  // SUBMODULE 1: Rubinstein & Classical (4. e3 / 4. Qc2) - 13 Lines
  // =========================================================================
  {
    id: 'nimzo-rubinstein-anchor-mainline',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Rubinstein Variation – 4. e3 O-O 5. Bd3 d5 / 12...Re8 Mainline',
    shortName: 'Rubinstein Variation Anchor',
    category: 'Anchor Mainline',
    eco: 'E48 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4 Qc7 11. Bd3 e5 12. Qc2 Re8',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. O-O Nc6 8. a3 Bxc3 9. bxc3 dxc4 10. Bxc4 Qc7 11. Bd3 e5 12. Qc2 Re8',
    fullAnnotation: 'Akiba Rubinstein\'s system against the Nimzo: Black castles safely, challenges the center with ...c5 and ...d5, gives up the bishop pair to ruin White\'s structure on c3, and strikes with 11...e5 and 12...Re8.',
    annotations: {
      5: "3... Bb4 — The Nimzo-Indian pin preventing White's e4.",
      7: "4... O-O — Prioritize king safety.",
      9: "5... d5 — Stake a claim in the center.",
      11: "6... c5 — Attack White's d4 pawn base.",
      15: "8... Bxc3 — Ruin White's queenside pawn structure with doubled c-pawns.",
      21: "11... e5! — Thematic central breakthrough threatening e4.",
      23: "12... Re8 — Pin on the e-file with active central equality."
    }
  },
  {
    id: 'nimzo-classical-anchor-mainline',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Classical Variation – 4. Qc2 O-O 5. a3 Bxc3+ / 12...Nxc3 Ending',
    shortName: 'Classical 4. Qc2 Anchor',
    category: 'Anchor Mainline',
    eco: 'E32 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. a3 Bxc3+ 6. Qxc3 b6 7. Bg5 Bb7 8. f3 h6 9. Bh4 d5 10. e3 Nbd7 11. cxd5 Nxd5 12. Bxd8 Nxc3',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. a3 Bxc3+ 6. Qxc3 b6 7. Bg5 Bb7 8. f3 h6 9. Bh4 d5 10. e3 Nbd7 11. cxd5 Nxd5 12. Bxd8 Nxc3',
    fullAnnotation: 'Alexander Alekhine and Garry Kasparov\'s preferred Classical 4. Qc2: Black trades on c3, fianchettoes with ...b6 and ...Bb7, and breaks the pin with 11...Nxd5! liquidating into an equal endgame with 12...Nxc3.',
    annotations: {
      7: "4. Qc2 — White avoids doubled c-pawns.",
      9: "5... Bxc3+ — Trade bishop for knight.",
      11: "6... b6 — Prepare fianchetto.",
      13: "7... Bb7 — Active long-diagonal placement.",
      21: "11... Nxd5! — Discovered attack breaking White's pin.",
      23: "12... Nxc3 — Complete liquidation into a flawless endgame."
    }
  },
  {
    id: 'nimzo-rubinstein-anchor-hubner-setup',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Rubinstein Hübner Variation – 4. e3 c5 / 12...Bh3 Dark Square Strangle',
    shortName: 'Hübner Variation Anchor',
    category: 'Anchor Mainline',
    eco: 'E41 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. Nf3 Bxc3+ 7. bxc3 d6 8. e4 e5 9. d5 Ne7 10. Nh4 h6 11. g3 g5 12. Ng2 Bh3',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. Nf3 Bxc3+ 7. bxc3 d6 8. e4 e5 9. d5 Ne7 10. Nh4 h6 11. g3 g5 12. Ng2 Bh3',
    fullAnnotation: 'Robert Hübner\'s dark-square strategy: Black doubles White\'s c-pawns, locks the center with ...d6 and ...e5, and infiltrates White\'s kingside with 11...g5 and 12...Bh3!, paralyzing White\'s piece coordination.',
    annotations: {
      11: "6... Bxc3+ — Voluntarily ruin White's pawn structure.",
      15: "8... e5! — Lock down the dark squares.",
      21: "11... g5! — Kick White's knight away.",
      23: "12... Bh3! — Tactical Motif: Dark Square Paralysis pinning White's kingside."
    }
  },
  {
    id: 'nimzo-classical-punish-dxc5-na6',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Classical – Dubious 6. dxc5?! Na6! / 12...Rxa1+ Rook Conquest',
    shortName: 'Classical 6. dxc5?! Punished',
    category: 'Tactical Punishment',
    eco: 'E39 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. Nf3 c5 6. dxc5 Na6 7. a3 Bxc3+ 8. Qxc3 Nxc5 9. b4 Nce4 10. Qc2 a5 11. Bb2 axb4 12. axb4 Rxa1+',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. Nf3 c5 6. dxc5 Na6 7. a3 Bxc3+ 8. Qxc3 Nxc5 9. b4 Nce4 10. Qc2 a5 11. Bb2 axb4 12. axb4 Rxa1+',
    fullAnnotation: 'White surrenders the center with 6. dxc5?!. Black routes the knight via 6...Na6 to c5, installs the monster 9...Nce4 knight, rips open the a-file with 10...a5, and trades rooks with 12...Rxa1+ seizing total queenside control.',
    annotations: {
      10: "Inaccuracy: 6. dxc5?! allows Black's knight to reach c5 with tempo.",
      11: "6... Na6! — Reroute knight toward the queenside outpost.",
      17: "9... Nce4! — Dominate the central outpost with tempo on White's queen.",
      21: "11... axb4 — Open the a-file.",
      23: "12... Rxa1+ — Control the open file with decisive initiative."
    }
  },
  {
    id: 'nimzo-rubinstein-punish-overextended-a3',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Rubinstein – Premature 7. a3?! / 12...Nc6 Monster Coordination',
    shortName: 'Rubinstein 7. a3?! Punished',
    category: 'Tactical Punishment',
    eco: 'E48 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. a3 Bxc3+ 8. bxc3 dxc4 9. Bxc4 e5 10. Nxe5 cxd4 11. exd4 Qc7 12. Qb3 Nc6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Bd3 d5 6. Nf3 c5 7. a3 Bxc3+ 8. bxc3 dxc4 9. Bxc4 e5 10. Nxe5 cxd4 11. exd4 Qc7 12. Qb3 Nc6',
    fullAnnotation: 'White loses time with 7. a3?!. Black counter-attacks in the center with 9...e5!, targets the pinned bishop on c4 with 11...Qc7, and brings 12...Nc6! into the fray with unstoppable tactical pressure.',
    annotations: {
      12: "Inaccuracy: 7. a3?! forces Black into the trade they already wanted.",
      17: "9... e5! — Central explosion.",
      21: "11... Qc7! — Pin the c4 bishop against White's queen.",
      23: "12... Nc6 — Piling pressure on White's overextended center."
    }
  },
  {
    id: 'nimzo-classical-punish-premature-e4',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Classical – Reckless 5. e4?! d5! / 12...Nxe5 Free Central Pawn',
    shortName: 'Classical 5. e4?! Blunder Refuted',
    category: 'Tactical Punishment',
    eco: 'E32 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. e4 d5 6. e5 Ne4 7. Bd2 Nxd2 8. Qxd2 dxc4 9. Bxc4 c5 10. Nf3 Nc6 11. O-O-O cxd4 12. Nxd4 Nxe5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. e4 d5 6. e5 Ne4 7. Bd2 Nxd2 8. Qxd2 dxc4 9. Bxc4 c5 10. Nf3 Nc6 11. O-O-O cxd4 12. Nxd4 Nxe5',
    fullAnnotation: 'White pushes 5. e4?! without completing development. Black strikes immediately with 5...d5!, plants 6...Ne4, liquidates the center with 11...cxd4, and collects the loose e5 pawn with 12...Nxe5! winning clean material.',
    annotations: {
      8: "Blunder: 5. e4?! is a severe overextension.",
      9: "5... d5! — Tactical Motif: Counter-Strike in the center!",
      11: "6... Ne4! — Exploit the pinned c3 knight.",
      23: "12... Nxe5! — Pocket the clean central pawn with complete dominance."
    }
  },
  {
    id: 'nimzo-classical-punish-cxd5-bf5',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Classical – 6. Bg5 c5 / 12...Bxc3+ Structural Destruction',
    shortName: 'Classical 10...Bf5! Queen Skewer',
    category: 'Tactical Punishment',
    eco: 'E34 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. cxd5 exd5 6. Bg5 c5 7. e3 Nc6 8. Nf3 h6 9. Bxf6 Qxf6 10. dxc5 Bf5 11. Bd3 Bxd3 12. Qxd3 Bxc3+',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. cxd5 exd5 6. Bg5 c5 7. e3 Nc6 8. Nf3 h6 9. Bxf6 Qxf6 10. dxc5 Bf5 11. Bd3 Bxd3 12. Qxd3 Bxc3+',
    fullAnnotation: 'Black counters White\'s Bg5 pin with 8...h6 and 9...Qxf6, skewers White\'s queen with 10...Bf5!, and ruins White\'s queenside with 12...Bxc3+ leaving White with isolated doubled c-pawns in a lost ending.',
    annotations: {
      17: "9... Qxf6 — Active recapture threatening ...Qxb2.",
      19: "10... Bf5! — Tactical Motif: Queen Skewer with tempo.",
      23: "12... Bxc3+! — Shatter White's queenside pawn structure permanently."
    }
  },
  {
    id: 'nimzo-rubinstein-punish-ba6-trade',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Rubinstein – 5. Nge2 Ba6 / 12...Ne8 Kingside Fortress',
    shortName: 'Rubinstein 5...Ba6! Setup',
    category: 'Tactical Punishment',
    eco: 'E46 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 b6 5. Nge2 Ba6 6. a3 Be7 7. Nf4 d5 8. cxd5 Bxf1 9. Kxf1 exd5 10. g4 c6 11. h4 O-O 12. g5 Ne8',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 b6 5. Nge2 Ba6 6. a3 Be7 7. Nf4 d5 8. cxd5 Bxf1 9. Kxf1 exd5 10. g4 c6 11. h4 O-O 12. g5 Ne8',
    fullAnnotation: 'Black develops the light-squared bishop aggressively to a6, trades it off to displace White\'s king on f1 with 8...Bxf1, and absorbs White\'s flank push comfortably with 12...Ne8, retaining an iron center.',
    annotations: {
      9: "5... Ba6! — Target White's undefended c4 pawn immediately.",
      15: "8... Bxf1! — Deprive White of castling rights.",
      23: "12... Ne8 — Solid retreat; White's kingside attack is completely spent."
    }
  },
  {
    id: 'nimzo-classical-punish-bg5-h6-ne4',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Classical – 5. Bg5 h6 / 12...Nce4 Central Dominance',
    shortName: 'Classical 12...Nce4 Outpost',
    category: 'Tactical Punishment',
    eco: 'E32 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. Bg5 h6 6. Bh4 c5 7. dxc5 Na6 8. e3 Nxc5 9. Nf3 b6 10. Be2 Bb7 11. O-O Bxc3 12. Qxc3 Nce4',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. Bg5 h6 6. Bh4 c5 7. dxc5 Na6 8. e3 Nxc5 9. Nf3 b6 10. Be2 Bb7 11. O-O Bxc3 12. Qxc3 Nce4',
    fullAnnotation: 'Black neutralizes 5. Bg5 with 5...h6, develops the bishop to b7, trades on c3, and plants the unmovable 12...Nce4! knight on the board, hitting White\'s queen and securing full control.',
    annotations: {
      9: "5... h6 — Question the bishop.",
      15: "8... Nxc5 — Recapture with central knight presence.",
      21: "11... Bxc3 — Remove the knight.",
      23: "12... Nce4! — Tactical Motif: Monster Outpost hitting White's queen."
    }
  },
  {
    id: 'nimzo-rubinstein-punish-hubner-bf5',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Rubinstein Hübner – 8...e5 9. Nd2 / 12...Bf5 Dark Square Blockade',
    shortName: 'Hübner 12...Bf5 Blockade',
    category: 'Tactical Punishment',
    eco: 'E41 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. Nf3 Bxc3+ 7. bxc3 d6 8. O-O e5 9. Nd2 O-O 10. d5 Ne7 11. f4 exf4 12. exf4 Bf5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. Nf3 Bxc3+ 7. bxc3 d6 8. O-O e5 9. Nd2 O-O 10. d5 Ne7 11. f4 exf4 12. exf4 Bf5',
    fullAnnotation: 'In the Hübner variation, White attempts 11. f4. Black liquidates with 11...exf4 and installs the perfect 12...Bf5! bishop blockade, exchanging White\'s only good bishop and locking down the dark squares.',
    annotations: {
      15: "8... e5 — Thematic dark-square clamp.",
      21: "11... exf4 — Open diagonal for the light-squared bishop.",
      23: "12... Bf5! — Tactical Motif: Ideal Blockade trading White's key attacking bishop."
    }
  },
  {
    id: 'nimzo-classical-punish-4nc6-nxf2',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Classical – 4...Nc6 5. Nf3 d6 / 12...Qxd3! Free Bishop Conquest',
    shortName: 'Classical 12...Qxd3! Bishop Win',
    category: 'Tactical Punishment',
    eco: 'E33 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 Nc6 5. Nf3 d6 6. a3 Bxc3+ 7. Qxc3 a5 8. e3 O-O 9. Bd3 e5 10. dxe5 dxe5 11. Nxe5 Nxe5 12. Qxe5 Qxd3',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 Nc6 5. Nf3 d6 6. a3 Bxc3+ 7. Qxc3 a5 8. e3 O-O 9. Bd3 e5 10. dxe5 dxe5 11. Nxe5 Nxe5 12. Qxe5 Qxd3',
    fullAnnotation: 'White falls into a classic tactical pitfall! After 9. Bd3 e5 10. dxe5 dxe5, White gets greedy with 11. Nxe5?!. Black liquidates with 11...Nxe5 and snaps off the undefended bishop with 12...Qxd3!, remaining a clean piece ahead.',
    annotations: {
      17: "9... e5! — Central pawn strike threatening e4.",
      20: "Blunder: 11. Nxe5? forgets that the d3 bishop is completely loose!",
      21: "11... Nxe5! — Deflect White's queen away.",
      23: "12... Qxd3! — Tactical Motif: Snapping the Loose Piece! Black wins a full bishop."
    }
  },
  {
    id: 'nimzo-rubinstein-punish-nge2-d4-blast',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Rubinstein – 5. Nge2 d5 6. a3 Be7 / 12...Bxd4 Central Pin',
    shortName: 'Rubinstein 12...Bxd4 Central Pin',
    category: 'Tactical Punishment',
    eco: 'E46 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Nge2 d5 6. a3 Be7 7. cxd5 exd5 8. Ng3 c5 9. dxc5 Bxc5 10. b4 Bb6 11. Bb2 d4 12. exd4 Bxd4',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. Nge2 d5 6. a3 Be7 7. cxd5 exd5 8. Ng3 c5 9. dxc5 Bxc5 10. b4 Bb6 11. Bb2 d4 12. exd4 Bxd4',
    fullAnnotation: 'White maneuvers the knight passively with 5. Nge2 and 8. Ng3. Black strikes in the center with 8...c5! and 11...d4!, capturing on d4 with the bishop and pinning White\'s pieces on the open central files.',
    annotations: {
      15: "8... c5! — Blast open White's center.",
      21: "11... d4! — Tactical Breakthrough!",
      23: "12... Bxd4 — Monster bishop on d4 dominating White's uncoordinated army."
    }
  },
  {
    id: 'nimzo-classical-punish-f4-break',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-rubinstein-classical',
    name: 'Classical – 7...b6 8. Bf4 Bb7 / 12...f4 Kingside Avalanche',
    shortName: 'Classical 12...f4 Kingside Strike',
    category: 'Tactical Punishment',
    eco: 'E38 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5 5. dxc5 O-O 6. a3 Bxc5 7. Nf3 b6 8. Bf4 Bb7 9. Rd1 Nc6 10. e3 Nh5 11. Bg3 f5 12. Be2 f4',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5 5. dxc5 O-O 6. a3 Bxc5 7. Nf3 b6 8. Bf4 Bb7 9. Rd1 Nc6 10. e3 Nh5 11. Bg3 f5 12. Be2 f4',
    fullAnnotation: 'Black counter-attacks on the flank against White\'s 8. Bf4 setup. With 10...Nh5 and the explosive 12...f4!, Black cracks open White\'s kingside and traps the dark-squared bishop.',
    annotations: {
      11: "6... Bxc5 — Recapture with active piece development.",
      19: "10... Nh5! — Target White's dark-squared bishop.",
      23: "12... f4! — Tactical Motif: Breakthrough! Tearing open White's kingside shelter."
    }
  },

  // =========================================================================
  // SUBMODULE 2: Sämisch Attack Blunders (4. a3 Bxc3+ 5. bxc3) - 13 Lines
  // =========================================================================
  {
    id: 'nimzo-samisch-anchor-classical-b6',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch Variation – 5...c5 6. e3 b6 7. Bd3 Bb7 / 12...Na5 Blockade',
    shortName: 'Sämisch 12...Na5 Blockade Anchor',
    category: 'Anchor Mainline',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 b6 7. Bd3 Bb7 8. f3 Nc6 9. Ne2 O-O 10. e4 Ne8 11. Be3 d6 12. O-O Na5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 b6 7. Bd3 Bb7 8. f3 Nc6 9. Ne2 O-O 10. e4 Ne8 11. Be3 d6 12. O-O Na5',
    fullAnnotation: 'The classic strategic blueprint against the Sämisch: Black trades on c3, targets the doubled c4 pawn with ...b6, ...Ba6, and 12...Na5, establishing an immovable blockade on the weak c4 square.',
    annotations: {
      7: "4. a3 — White forces the trade immediately.",
      9: "5... c5 — Thematic strike at White's c4 pawn.",
      13: "7... Bb7 — Active bishop on the long diagonal.",
      19: "10... Ne8 — Unblock the f-pawn and prepare ...f5.",
      23: "12... Na5! — Tactical Motif: Permanent Blockade on the crippled c4 pawn."
    }
  },
  {
    id: 'nimzo-samisch-anchor-capablanca-setup',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch Capablanca – 6...Nc6 7. Bd3 O-O 8. Ne2 b6 / 12...exf5 Domination',
    shortName: 'Sämisch Capablanca Anchor',
    category: 'Anchor Mainline',
    eco: 'E25 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 Nc6 7. Bd3 O-O 8. Ne2 b6 9. e4 Ne8 10. O-O Ba6 11. f4 f5 12. exf5 exf5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 Nc6 7. Bd3 O-O 8. Ne2 b6 9. e4 Ne8 10. O-O Ba6 11. f4 f5 12. exf5 exf5',
    fullAnnotation: 'José Raúl Capablanca\'s immortal method: Black pins White\'s c4 pawn with 10...Ba6, counters White\'s f4 advance with 11...f5!, and secures the superior pawn structure with 12...exf5.',
    annotations: {
      11: "6... Nc6 — Develop knight to pressure d4 and c4.",
      19: "10... Ba6! — Double attack on the backward c4 pawn.",
      21: "11... f5! — Block White's central steamroller.",
      23: "12... exf5 — Complete structural superiority; White's c4 pawn is doomed."
    }
  },
  {
    id: 'nimzo-samisch-punish-f3-d5-rupture',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – 6. f3 d5 7. e3 O-O / 12...Nc6 Piece Trade',
    shortName: 'Sämisch 6. f3 d5 Refuted',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. f3 d5 7. e3 O-O 8. cxd5 exd5 9. Bd3 b6 10. Ne2 Ba6 11. O-O Bxd3 12. Qxd3 Nc6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. f3 d5 7. e3 O-O 8. cxd5 exd5 9. Bd3 b6 10. Ne2 Ba6 11. O-O Bxd3 12. Qxd3 Nc6',
    fullAnnotation: 'White plays 6. f3 to support e4. Black counters with 6...d5!, trades off White\'s strong light-squared bishop with 10...Ba6 and 11...Bxd3, and develops 12...Nc6 with complete strategic dominance.',
    annotations: {
      11: "6... d5! — Strike in the center before White can play e4.",
      15: "8... exd5 — Recapture opening the e-file.",
      19: "10... Ba6! — Trade off White's proud bishop on d3.",
      23: "12... Nc6 — Black has a winning endgame structure."
    }
  },
  {
    id: 'nimzo-samisch-punish-qf3-blunder',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – Dubious 7. Qf3?! / 12...Nc6 Central Command',
    shortName: 'Sämisch 7. Qf3?! Blunder Punished',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 b6 6. e3 Ba6 7. Qf3 d5 8. cxd5 Bxf1 9. Kxf1 exd5 10. Ne2 O-O 11. c4 c6 12. cxd5 cxd5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 b6 6. e3 Ba6 7. Qf3 d5 8. cxd5 Bxf1 9. Kxf1 exd5 10. Ne2 O-O 11. c4 c6 12. cxd5 cxd5',
    fullAnnotation: 'White plays the premature 7. Qf3?! seeking cheap threats. Black parries easily with 7...d5!, eliminates White\'s bishop with 8...Bxf1! stripping White of castling rights, and secures central dominance with 11...c6 and 12...cxd5.',
    annotations: {
      12: "Mistake: 7. Qf3?! is a toothless queen excursion.",
      13: "7... d5! — Solid central block with tempo.",
      15: "8... Bxf1! — Tactical Motif: Decoy / Elimination of Guard forcing 9. Kxf1 and losing castling rights.",
      23: "12... cxd5 — Black commands the board with superior king safety."
    }
  },
  {
    id: 'nimzo-samisch-punish-b5-counter-gambit',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – 7. d5 b5! Counter-Gambit / 12...h6 King Safety',
    shortName: 'Sämisch 7...b5! Counter-Gambit',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. f3 O-O 7. d5 b5 8. e4 d6 9. Bg5 exd5 10. cxd5 Re8 11. Bxb5 Nbd7 12. Ne2 h6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. f3 O-O 7. d5 b5 8. e4 d6 9. Bg5 exd5 10. cxd5 Re8 11. Bxb5 Nbd7 12. Ne2 h6',
    fullAnnotation: 'Black shatters White\'s center with the ferocious 7...b5! pawn sacrifice, delivers pressure with 10...Re8, and kicks the bishop with 12...h6! with an overwhelming attack.',
    annotations: {
      13: "7... b5! — Tactical Motif: Counter-Gambit blasting open lines.",
      19: "10... Re8 — Pressure on the e-file.",
      23: "12... h6! — Dislodge White's only active piece with decisive initiative."
    }
  },
  {
    id: 'nimzo-samisch-punish-e4-nc6-clamp',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – 8. Ne2 e5 9. e4 Nc6 / 12...f6 Kingside Freeze',
    shortName: 'Sämisch 9...Nc6 Clamp',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 O-O 7. Bd3 d6 8. Ne2 e5 9. e4 Nc6 10. d5 Ne7 11. Bg5 Nd7 12. O-O f6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 O-O 7. Bd3 d6 8. Ne2 e5 9. e4 Nc6 10. d5 Ne7 11. Bg5 Nd7 12. O-O f6',
    fullAnnotation: 'White attempts a kingside pawn storm with e4 and f4. Black locks the center with 8...e5 and 9...Nc6, kicks White\'s bishop with 12...f6, and prepares ...g5 and ...Ng6 commanding the dark squares.',
    annotations: {
      15: "8... e5 — Thematic central clamp.",
      17: "9... Nc6 — Pressure d4.",
      23: "12... f6 — Repel White's bishop and prepare kingside expansion."
    }
  },
  {
    id: 'nimzo-samisch-punish-c4-blockade-rc8',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – 9...Ba6 10. e4 Ne8 / 12...Rc8 C-File Battery',
    shortName: 'Sämisch 12...Rc8 Battery',
    category: 'Tactical Punishment',
    eco: 'E25 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 Nc6 7. Bd3 b6 8. Ne2 Ba6 9. O-O O-O 10. e4 Ne8 11. Be3 Na5 12. Qa4 Rc8',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 Nc6 7. Bd3 b6 8. Ne2 Ba6 9. O-O O-O 10. e4 Ne8 11. Be3 Na5 12. Qa4 Rc8',
    fullAnnotation: 'The textbook siege of the c4 pawn: Black mobilizes 8...Ba6, 11...Na5, and 12...Rc8!, creating a triple attack on the c4 pawn that White cannot defend without catastrophic concessions.',
    annotations: {
      15: "8... Ba6 — Line up against c4.",
      21: "11... Na5! — Monster knight clamping c4.",
      23: "12... Rc8! — Tactical Motif: Triple Battery targeting the doomed c4 pawn."
    }
  },
  {
    id: 'nimzo-samisch-punish-bf5-lock',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – 8...Bf5 9. Ne2 O-O / 12...c4 Queenside Lockdown',
    shortName: 'Sämisch 12...c4 Lockdown',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. f3 d5 7. cxd5 exd5 8. e3 Bf5 9. Ne2 O-O 10. Ng3 Bg6 11. Be2 Re8 12. O-O c4',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. f3 d5 7. cxd5 exd5 8. e3 Bf5 9. Ne2 O-O 10. Ng3 Bg6 11. Be2 Re8 12. O-O c4',
    fullAnnotation: 'Black develops the bishop outside the pawn chain with 8...Bf5, tucks it into g6, and locks White\'s queenside into permanent paralysis with 12...c4!, preparing to pick off the backward c3 pawn.',
    annotations: {
      15: "8... Bf5 — Active diagonal deployment outside the pawn chain.",
      21: "11... Re8 — Pin on the e-file.",
      23: "12... c4! — Tactical Motif: Structural Clamping fixing White's weak pawns."
    }
  },
  {
    id: 'nimzo-samisch-punish-qh4-assault',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – 8...Ne4 9. Qc2 f5 / 12...Nxd2 Bishop Elimination',
    shortName: 'Sämisch 11...Qh4 Counter-Attack',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 b6 7. Bd3 Bb7 8. Nf3 Ne4 9. Qc2 f5 10. O-O O-O 11. Nd2 Qh4 12. f3 Nxd2',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 b6 7. Bd3 Bb7 8. Nf3 Ne4 9. Qc2 f5 10. O-O O-O 11. Nd2 Qh4 12. f3 Nxd2',
    fullAnnotation: 'Black launches a ferocious Dutch-style counter-attack with 8...Ne4, 9...f5, and 11...Qh4!, eliminating White\'s defending knight with 12...Nxd2 and dominating the kingside dark squares.',
    annotations: {
      15: "8... Ne4 — Outpost on e4.",
      17: "9... f5! — Dutch stonewall clamp.",
      21: "11... Qh4! — Tactical Infiltration targeting h2.",
      23: "12... Nxd2 — Eliminate White's defender."
    }
  },
  {
    id: 'nimzo-samisch-punish-re8-na5-blockade',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – 7...d5 8. cxd5 exd5 / 12...Na5 Permanent Outpost',
    shortName: 'Sämisch 12...Na5 Outpost',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 Nc6 7. Bd3 d5 8. cxd5 exd5 9. Ne2 O-O 10. O-O Re8 11. f3 b6 12. Ng3 Na5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 Nc6 7. Bd3 d5 8. cxd5 exd5 9. Ne2 O-O 10. O-O Re8 11. f3 b6 12. Ng3 Na5',
    fullAnnotation: 'Black solidifies the center with ...d5, exerts relentless pressure on the e-file with 10...Re8, and plants the knight on 12...Na5 eyeing the juicy c4 and b3 holes in White\'s camp.',
    annotations: {
      13: "7... d5 — Stake the center.",
      19: "10... Re8 — Pin on the e-file.",
      23: "12... Na5! — Tactical Motif: Outpost Infiltration targeting c4 and b3."
    }
  },
  {
    id: 'nimzo-samisch-punish-g4-h5-counter',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – Overextended 11. g4?! / 12...h5 Flank Rip',
    shortName: 'Sämisch 12...h5 Flank Rip',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. f3 O-O 7. e4 d6 8. Bd3 Nc6 9. Ne2 e5 10. d5 Ne7 11. g4 Ng6 12. h4 h5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. f3 O-O 7. e4 d6 8. Bd3 Nc6 9. Ne2 e5 10. d5 Ne7 11. g4 Ng6 12. h4 h5',
    fullAnnotation: 'White charges with 11. g4?! and 12. h4. Black immediately tears open White\'s kingside with 12...h5!, undermining the g4 pawn and exposing White\'s king to devastating counter-attacks.',
    annotations: {
      21: "11... Ng6 — Reposition knight to exploit dark-square holes.",
      23: "12... h5! — Tactical Motif: Flank Breakthrough ripping open White's kingside."
    }
  },
  {
    id: 'nimzo-samisch-punish-f5-fxg3-break',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – 8...Nh5 9. Ne2 f5 / 12...fxg3 Kingside Shred',
    shortName: 'Sämisch 12...fxg3 King Blast',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 b6 7. Bd3 Bb7 8. f3 Nh5 9. Ne2 f5 10. O-O O-O 11. e4 f4 12. g4 fxg3',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 b6 7. Bd3 Bb7 8. f3 Nh5 9. Ne2 f5 10. O-O O-O 11. e4 f4 12. g4 fxg3',
    fullAnnotation: 'Black unleashes the kingside wedge 11...f4! and captures en passant with 12...fxg3!, blasting open the f-file against White\'s king with a winning attacking lead.',
    annotations: {
      15: "8... Nh5! — Eyes Qh4+ and f4.",
      21: "11... f4! — Wedge pawn suffocating White's pieces.",
      23: "12... fxg3! — Tactical Motif: En Passant Demolition opening the f-file."
    }
  },
  {
    id: 'nimzo-samisch-punish-ba6-d5-trade',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-samisch-blunders',
    name: 'Sämisch – 9...Ba6 10. cxd5 Bxd3 / 12...Nc6 Endgame Mastery',
    shortName: 'Sämisch 10...Bxd3 Bishop Trade',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 O-O 7. Bd3 d5 8. Ne2 b6 9. O-O Ba6 10. cxd5 Bxd3 11. Qxd3 exd5 12. a4 Nc6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 c5 6. e3 O-O 7. Bd3 d5 8. Ne2 b6 9. O-O Ba6 10. cxd5 Bxd3 11. Qxd3 exd5 12. a4 Nc6',
    fullAnnotation: 'Black executes the thematic light-squared bishop trade with 10...Bxd3, recaptures with 11...exd5, and develops 12...Nc6 with an insurmountable positional endgame advantage against White\'s fractured pawns.',
    annotations: {
      17: "9... Ba6 — Pin the c4 pawn.",
      19: "10... Bxd3! — Eliminate White's key defender.",
      23: "12... Nc6 — Flawless piece coordination with total strategic control."
    }
  },

  // =========================================================================
  // SUBMODULE 3: Leningrad & 4. Bg5 Inaccuracies - 13 Lines
  // =========================================================================
  {
    id: 'nimzo-leningrad-anchor-mainline',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad Variation – 4. Bg5 c5 5. d5 d6 / 12...e4 Central Strike',
    shortName: 'Leningrad Variation Anchor',
    category: 'Anchor Mainline',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 d6 6. e3 Bxc3+ 7. bxc3 e5 8. Bd3 Nbd7 9. Ne2 h6 10. Bh4 Qe7 11. f3 g5 12. Bf2 e4',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 d6 6. e3 Bxc3+ 7. bxc3 e5 8. Bd3 Nbd7 9. Ne2 h6 10. Bh4 Qe7 11. f3 g5 12. Bf2 e4',
    fullAnnotation: 'The classical refutation of the Leningrad 4. Bg5: Black doubles White\'s c-pawns, drives White\'s bishop back with ...h6 and ...g5, and detonates the center with 12...e4!, ripping open White\'s king position.',
    annotations: {
      7: "4. Bg5 — The Leningrad pin.",
      9: "5... d6 — Solidify the e5 square.",
      11: "6... Bxc3+ — Ruin White's queenside structure.",
      21: "11... g5! — Kick White's bishop.",
      23: "12... e4! — Tactical Motif: Center Fork / Breakthrough destroying White's pawn chain."
    }
  },
  {
    id: 'nimzo-leningrad-anchor-kc7-setup',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 4...h6 5. Bh4 c5 / 12...Kc7 Artificial Castling',
    shortName: 'Leningrad 12...Kc7 King Walk',
    category: 'Anchor Mainline',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 h6 5. Bh4 c5 6. d5 d6 7. e3 Bxc3+ 8. bxc3 e5 9. Qc2 Nbd7 10. Bd3 Qe7 11. f3 Kd8 12. Ne2 Kc7',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 h6 5. Bh4 c5 6. d5 d6 7. e3 Bxc3+ 8. bxc3 e5 9. Qc2 Nbd7 10. Bd3 Qe7 11. f3 Kd8 12. Ne2 Kc7',
    fullAnnotation: 'Black executes the grandmaster king walk to c7! Behind the locked center and doubled c-pawns, Black\'s king on c7 is 100% safe, while White\'s king remains vulnerable in the center.',
    annotations: {
      7: "4... h6 — Question the bishop immediately.",
      13: "7... Bxc3+ — Double White's c-pawns.",
      21: "11... Kd8! — Begin the artificial castling walk.",
      23: "12... Kc7! — King sits in an impenetrable bunker on c7."
    }
  },
  {
    id: 'nimzo-leningrad-anchor-4nf3-qa5',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Nimzo 4. Nf3 c5 5. Bg5 cxd4 / 12...Nc6 Active Development',
    shortName: 'Nimzo 4. Nf3 5. Bg5 Anchor',
    category: 'Anchor Mainline',
    eco: 'E21 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. Bg5 cxd4 6. Nxd4 h6 7. Bh4 Bxc3+ 8. bxc3 Qa5 9. Qc2 Ne4 10. Rc1 Nc5 11. e3 O-O 12. Be2 Nc6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 c5 5. Bg5 cxd4 6. Nxd4 h6 7. Bh4 Bxc3+ 8. bxc3 Qa5 9. Qc2 Ne4 10. Rc1 Nc5 11. e3 O-O 12. Be2 Nc6',
    fullAnnotation: 'Black handles the 4. Nf3 & 5. Bg5 sideline by liquidating on d4, pinning on c3 with 8...Qa5!, and posting the knight on c5 with total equality and pressure on White\'s backward pawns.',
    annotations: {
      9: "5... cxd4 — Resolve central tension.",
      15: "8... Qa5! — Pin c3 with tempo.",
      17: "9... Ne4 — Jump into the hole on e4.",
      23: "12... Nc6 — Harmonious piece play with an advantage against White's pawn weaknesses."
    }
  },
  {
    id: 'nimzo-leningrad-punish-ne4-fork',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 6...h6 7. Bh4 g5 / 12...Bf5 Dark Square Conquest',
    shortName: 'Leningrad 8...Ne4! Central Blast',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 exd5 6. cxd5 h6 7. Bh4 g5 8. Bg3 Ne4 9. Qc2 Qe7 10. e3 Bxc3+ 11. bxc3 d6 12. Bd3 Bf5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 exd5 6. cxd5 h6 7. Bh4 g5 8. Bg3 Ne4 9. Qc2 Qe7 10. e3 Bxc3+ 11. bxc3 d6 12. Bd3 Bf5',
    fullAnnotation: 'Black punishes 4. Bg5 by kicking the bishop with 6...h6 and 7...g5!, invading with 8...Ne4!, and cementing the 12...Bf5 bishop outpost with complete domination over White\'s pinned army.',
    annotations: {
      13: "7... g5! — Drive the bishop into the g3 pocket.",
      15: "8... Ne4! — Tactical Motif: Fork attacking c3 and g3.",
      17: "9... Qe7 — Defend the knight and prepare ...d6.",
      23: "12... Bf5! — Iron pin on White's bishop."
    }
  },
  {
    id: 'nimzo-leningrad-punish-qa5-pin',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 5. e3 cxd4 6. exd4 Qa5 / 12...d6 Free Development',
    shortName: 'Leningrad 6...Qa5 Pin Refutation',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. e3 cxd4 6. exd4 Qa5 7. Bd2 Qb6 8. Nf3 Bxc3 9. Bxc3 Ne4 10. Qc2 Nxc3 11. Qxc3 O-O 12. Bd3 d6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. e3 cxd4 6. exd4 Qa5 7. Bd2 Qb6 8. Nf3 Bxc3 9. Bxc3 Ne4 10. Qc2 Nxc3 11. Qxc3 O-O 12. Bd3 d6',
    fullAnnotation: 'White plays 5. e3 passively. Black hits with 6...Qa5! pinning the bishop and knight, trades the bishops and knights favorably, and castles safely with 11...O-O holding a superior pawn structure.',
    annotations: {
      11: "6... Qa5! — Double attack on c3 and g5.",
      17: "9... Ne4 — Eliminate White's bishop pair.",
      23: "12... d6 — Solidify the center with total equality."
    }
  },
  {
    id: 'nimzo-leningrad-punish-bxf6-damage',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 6. Bxf6?! Bxc3+ / 12...O-O-O King Safety',
    shortName: 'Leningrad 6. Bxf6?! Ruined Structure',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 Qa5 6. Bxf6 Bxc3+ 7. bxc3 gxf6 8. Qd2 d6 9. e4 Nd7 10. f4 Nb6 11. Nf3 Bd7 12. Bd3 O-O-O',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 Qa5 6. Bxf6 Bxc3+ 7. bxc3 gxf6 8. Qd2 d6 9. e4 Nd7 10. f4 Nb6 11. Nf3 Bd7 12. Bd3 O-O-O',
    fullAnnotation: 'White parts with the bishop on f6. Black ruins White\'s structure with 6...Bxc3+!, castles queenside with 12...O-O-O, and uses the open g-file to launch an unstoppable attack against White\'s king.',
    annotations: {
      11: "6... Bxc3+! — Force doubled isolated pawns.",
      13: "7... gxf6 — Open the g-file for the rook.",
      23: "12... O-O-O — Perfect king safety; Black commands the open files."
    }
  },
  {
    id: 'nimzo-leningrad-punish-bxf6-queen-recapture',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 7. Bxf6?! Bxc3+ 8. bxc3 Qxf6 / 12...Nd7 Equality',
    shortName: 'Leningrad 8...Qxf6 Domination',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 d6 6. e3 h6 7. Bxf6 Bxc3+ 8. bxc3 Qxf6 9. Qd2 O-O 10. Nf3 e5 11. Be2 Nd7 12. O-O Qe7',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 d6 6. e3 h6 7. Bxf6 Bxc3+ 8. bxc3 Qxf6 9. Qd2 O-O 10. Nf3 e5 11. Be2 Nd7 12. O-O Qe7',
    fullAnnotation: 'White surrenders the bishop pair with 7. Bxf6?!. Black ruins White\'s c-pawns with 7...Bxc3+!, recaptures with the queen, and clamps the center with 10...e5! leaving White with ruined pawn structure and zero counterplay.',
    annotations: {
      13: "7... Bxc3+! — Shatter White's queenside.",
      15: "8... Qxf6 — Queen recaptures commanding the long diagonal.",
      21: "11... e5! — Lock the center and secure the d7-c5 knight path."
    }
  },
  {
    id: 'nimzo-leningrad-punish-qc3-check-win',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 5. e3 Qa5 6. Bxf6 Bxc3+ / 12...b6 Queenside Sweep',
    shortName: 'Leningrad 7...Qxc3+! Decimation',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. e3 Qa5 6. Bxf6 Bxc3+ 7. bxc3 Qxc3+ 8. Ke2 gxf6 9. Rc1 Qa3 10. Qd2 cxd4 11. exd4 Nc6 12. Nf3 b6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. e3 Qa5 6. Bxf6 Bxc3+ 7. bxc3 Qxc3+ 8. Ke2 gxf6 9. Rc1 Qa3 10. Qd2 cxd4 11. exd4 Nc6 12. Nf3 b6',
    fullAnnotation: 'White is decimated tactically! After 6. Bxf6, Black drops 6...Bxc3+ and 7...Qxc3+!, winning the c4 pawn with check, dragging White\'s king to e2, and destroying White\'s position completely.',
    annotations: {
      11: "6... Bxc3+! — Zwischenzug destruction!",
      13: "7... Qxc3+! — Tactical Motif: Double Attack hitting king and c4 with check.",
      15: "8... gxf6 — Extra material and open lines.",
      23: "12... b6 — Prepare ...Ba6 to hunt down White's stranded king."
    }
  },
  {
    id: 'nimzo-leningrad-punish-b5-counter-break',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 5. d5 b5! Counter-Strike / 12...d6 Central Clamp',
    shortName: 'Leningrad 5...b5! Counter-Strike',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 b5 6. e4 h6 7. Bxf6 Qxf6 8. Nf3 Bxc3+ 9. bxc3 Qxc3+ 10. Nd2 bxc4 11. Bxc4 O-O 12. O-O d6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 b5 6. e4 h6 7. Bxf6 Qxf6 8. Nf3 Bxc3+ 9. bxc3 Qxc3+ 10. Nd2 bxc4 11. Bxc4 O-O 12. O-O d6',
    fullAnnotation: 'Black counter-gambits with 5...b5!, wins the c3 pawn with 9...Qxc3+, and converts into a healthy pawn-up middlegame with 11...O-O and 12...d6.',
    annotations: {
      9: "5... b5! — Thematic wing gambit.",
      17: "9... Qxc3+! — Snatch c3 with check.",
      23: "12... d6 — Black is a clean pawn up with safe king."
    }
  },
  {
    id: 'nimzo-leningrad-punish-ne4-qd4-trap',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 5. dxc5 h6 6. Bh4 g5 7. Bg3 Ne4 / 12...b6 Superior Ending',
    shortName: 'Leningrad 7...Ne4 Trap Refuted',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. dxc5 h6 6. Bh4 g5 7. Bg3 Ne4 8. Qd4 Qf6 9. Qxf6 Nxf6 10. Bd6 Na6 11. f3 Nxc5 12. e4 b6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. dxc5 h6 6. Bh4 g5 7. Bg3 Ne4 8. Qd4 Qf6 9. Qxf6 Nxf6 10. Bd6 Na6 11. f3 Nxc5 12. e4 b6',
    fullAnnotation: 'White tries to trap Black with 8. Qd4. Black simplifies into a queenless middlegame with 8...Qf6!, rounds up White\'s overextended c5 pawn with 10...Na6, and enjoys an active, unassailable position.',
    annotations: {
      13: "7... Ne4! — Double attack on c3 and g3.",
      15: "8... Qf6! — Force queen liquidation.",
      19: "10... Na6 — Target the weak c5 pawn.",
      23: "12... b6 — Free the c8 bishop and consolidate superiority."
    }
  },
  {
    id: 'nimzo-leningrad-punish-qa5-bxf6-queen-trade',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 6...Bxc3+ 7. bxc3 Qa5 / 12...d6 Free Endgame',
    shortName: 'Leningrad 11...Qxd2+ Trade',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 d6 6. e3 Bxc3+ 7. bxc3 Qa5 8. Bxf6 Qxc3+ 9. Ke2 gxf6 10. Rc1 Qa5 11. Qd2 Qxd2+ 12. Kxd2 Ke7',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 d6 6. e3 Bxc3+ 7. bxc3 Qa5 8. Bxf6 Qxc3+ 9. Ke2 gxf6 10. Rc1 Qa5 11. Qd2 Qxd2+ 12. Kxd2 Ke7',
    fullAnnotation: 'Black drops the 8...Qxc3+ check, trades queens with 11...Qxd2+, and enters an endgame where White\'s king is displaced and the queenside pawn structure is completely shattered.',
    annotations: {
      15: "8... Qxc3+! — Check with tempo picking off c3.",
      21: "11... Qxd2+ — Force queen trade into winning ending.",
      23: "12... Ke7 — Activate king for the endgame with complete structural dominance."
    }
  },
  {
    id: 'nimzo-leningrad-punish-e5-bd2-bxc3',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 5...e5 6. e4 h6 / 12...g5 Dark Square Fortress',
    shortName: 'Leningrad 10...Nh5 Outpost',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 e5 6. e4 h6 7. Bd2 Bxc3 8. Bxc3 d6 9. Bd3 Nbd7 10. Ne2 Nh5 11. O-O O-O 12. Bd2 g5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 e5 6. e4 h6 7. Bd2 Bxc3 8. Bxc3 d6 9. Bd3 Nbd7 10. Ne2 Nh5 11. O-O O-O 12. Bd2 g5',
    fullAnnotation: 'Black locks the center with 5...e5, kicks the bishop with 6...h6, establishes the 10...Nh5 outpost, and clamps the kingside with 12...g5!, denying White any attacking moves.',
    annotations: {
      9: "5... e5 — Lock the center.",
      19: "10... Nh5! — Target the f4 outpost.",
      23: "12... g5! — Tactical Motif: Dark Square Fortress shutting down White's kingside."
    }
  },
  {
    id: 'nimzo-leningrad-punish-ne4-xg3-hxg3',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-leningrad-bg5',
    name: 'Leningrad – 6...g5 7. Bg3 Ne4 / 12...Bxc3 Long Diagonal Shred',
    shortName: 'Leningrad 8...Nxg3 Bishop Pair',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. e3 h6 6. Bh4 g5 7. Bg3 Ne4 8. Qc2 Nxg3 9. hxg3 cxd4 10. exd4 Nc6 11. Nf3 d5 12. O-O-O Bxc3',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. e3 h6 6. Bh4 g5 7. Bg3 Ne4 8. Qc2 Nxg3 9. hxg3 cxd4 10. exd4 Nc6 11. Nf3 d5 12. O-O-O Bxc3',
    fullAnnotation: 'Black wins White\'s bishop pair with 8...Nxg3, liquidates with 9...cxd4, and piles pressure on d4 with 10...Nc6 and 11...d5!, capturing 12...Bxc3 with clear tactical superiority.',
    annotations: {
      15: "8... Nxg3! — Pocket the bishop pair.",
      19: "10... Nc6 — Attack the isolated d4 pawn.",
      23: "12... Bxc3 — Remove White's defender with complete control."
    }
  },

  // =========================================================================
  // SUBMODULE 4: Early Check/Fork Oversights - 13 Lines
  // =========================================================================
  {
    id: 'nimzo-check-anchor-4nf3-b6',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Nimzo 4. Nf3 – 4...b6 5. e3 Bb7 / 12...d6 Dutch-Style Fortress',
    shortName: 'Nimzo 4. Nf3 b6 Anchor',
    category: 'Anchor Mainline',
    eco: 'E21 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 b6 5. e3 Bb7 6. Bd3 Ne4 7. Qc2 Bxc3+ 8. bxc3 f5 9. O-O O-O 10. Nd2 Qh4 11. f3 Nxd2 12. Bxd2 d6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Nf3 b6 5. e3 Bb7 6. Bd3 Ne4 7. Qc2 Bxc3+ 8. bxc3 f5 9. O-O O-O 10. Nd2 Qh4 11. f3 Nxd2 12. Bxd2 d6',
    fullAnnotation: 'The classical Hybrid Nimzo / Queen\'s Indian setup: Black places the bishop on b7, plants the knight on e4 supported by ...f5, and launches the queen with 10...Qh4! commanding the kingside attack.',
    annotations: {
      7: "4... b6 — Prepare fianchetto.",
      11: "6... Ne4! — Establish the e4 outpost.",
      15: "8... f5! — Thematic Dutch-Nimzo clamp.",
      19: "10... Qh4! — Tactical Infiltration targeting h2.",
      23: "12... d6 — Solidify the center with total authority."
    }
  },
  {
    id: 'nimzo-check-anchor-4bd2-d5',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Nimzo 4. Bd2 – 4...O-O 5. e3 d5 / 12...Re8 Central Harmonization',
    shortName: 'Nimzo 4. Bd2 Anchor',
    category: 'Anchor Mainline',
    eco: 'E20 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bd2 O-O 5. e3 d5 6. Nf3 b6 7. cxd5 exd5 8. Bd3 Bb7 9. O-O Nbd7 10. Rc1 a6 11. a3 Bd6 12. b4 Re8',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bd2 O-O 5. e3 d5 6. Nf3 b6 7. cxd5 exd5 8. Bd3 Bb7 9. O-O Nbd7 10. Rc1 a6 11. a3 Bd6 12. b4 Re8',
    fullAnnotation: 'White avoids doubled pawns with 4. Bd2. Black responds classically with ...d5, ...b6, and ...Bb7, retreating the bishop to d6 and dominating the e-file with 12...Re8 with effortless equality.',
    annotations: {
      7: "4. Bd2 — Passive bishop move breaking pin.",
      9: "5... d5 — Classical central presence.",
      21: "11... Bd6 — Tucking bishop into active attacking diagonal.",
      23: "12... Re8 — Dominate the e-file with total equality."
    }
  },
  {
    id: 'nimzo-check-punish-qb3-c5-break',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Nimzo 4. Qb3?! – 4...c5 5. dxc5 Nc6 / 12...b6 Superior Piece Harmony',
    shortName: 'Nimzo 4. Qb3?! Refuted',
    category: 'Tactical Punishment',
    eco: 'E22 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 c5 5. dxc5 Nc6 6. Nf3 Ne4 7. Bd2 Nxc5 8. Qc2 f5 9. e3 O-O 10. Be2 Bxc3 11. Bxc3 Ne4 12. O-O b6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 c5 5. dxc5 Nc6 6. Nf3 Ne4 7. Bd2 Nxc5 8. Qc2 f5 9. e3 O-O 10. Be2 Bxc3 11. Bxc3 Ne4 12. O-O b6',
    fullAnnotation: 'White plays the premature 4. Qb3?!. Black counter-punches with 4...c5!, hops into e4 with tempo, kicks the queen with 7...Nxc5!, and achieves complete piece harmony with 11...Ne4 and 12...b6.',
    annotations: {
      7: "Inaccuracy: 4. Qb3?! misplaces the queen early.",
      11: "6... Ne4! — Pin the c3 knight.",
      13: "7... Nxc5! — Kick White's queen with tempo.",
      21: "11... Ne4 — Outpost on e4.",
      23: "12... b6 — Black has total positional control."
    }
  },
  {
    id: 'nimzo-check-punish-f3-d5-center-break',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Nimzo 4. f3?! – 4...d5 5. a3 Bxc3+ / 12...Bxd3 Bishop Trade',
    shortName: 'Nimzo 4. f3?! Blunder Refuted',
    category: 'Tactical Punishment',
    eco: 'E20 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5 exd5 8. e3 O-O 9. Bd3 b6 10. Ne2 Ba6 11. O-O Re8 12. Ng3 Bxd3',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. f3 d5 5. a3 Bxc3+ 6. bxc3 c5 7. cxd5 exd5 8. e3 O-O 9. Bd3 b6 10. Ne2 Ba6 11. O-O Re8 12. Ng3 Bxd3',
    fullAnnotation: 'White attempts 4. f3 to force e4. Black shuts it down with 4...d5!, trades on c3, neutralizes White\'s bishop with 10...Ba6!, and captures 12...Bxd3 leaving White with crippled pawns and no attack.',
    annotations: {
      7: "Inaccuracy: 4. f3?! weakens the light squares.",
      9: "4... d5! — Deny White e4 permanently.",
      19: "10... Ba6! — Trade off White's only good bishop.",
      23: "12... Bxd3 — Eliminate White's proud bishop."
    }
  },
  {
    id: 'nimzo-check-punish-g3-c5-fianchetto',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Romanishin 4. g3 – 4...c5 5. Nf3 cxd4 / 12...Nc6 Dynamic Play',
    shortName: 'Romanishin 4. g3 Refuted',
    category: 'Tactical Punishment',
    eco: 'E20 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. g3 c5 5. Nf3 cxd4 6. Nxd4 O-O 7. Bg2 d5 8. cxd5 Nxd5 9. Bd2 Nxc3 10. bxc3 Be7 11. O-O e5 12. Nf3 Nc6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. g3 c5 5. Nf3 cxd4 6. Nxd4 O-O 7. Bg2 d5 8. cxd5 Nxd5 9. Bd2 Nxc3 10. bxc3 Be7 11. O-O e5 12. Nf3 Nc6',
    fullAnnotation: 'Against the Romanishin 4. g3, Black breaks the center with 4...c5 and 7...d5!, simplifies with 8...Nxd5 and 9...Nxc3, and expands centrally with 11...e5! commanding the board.',
    annotations: {
      9: "5... cxd4 — Symmetrical liquidation.",
      13: "7... d5! — Stake central territory.",
      21: "11... e5! — Kick White's d4 knight.",
      23: "12... Nc6 — Harmonious central coordination."
    }
  },
  {
    id: 'nimzo-check-punish-g3-bxc3-queen-trade',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Romanishin – 8...Nxd5 9. Bd2 Nxc3 / 12...e5 Central Command',
    shortName: 'Romanishin 12...e5 Central Expansion',
    category: 'Tactical Punishment',
    eco: 'E20 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. g3 c5 5. Nf3 cxd4 6. Nxd4 O-O 7. Bg2 d5 8. cxd5 Nxd5 9. Bd2 Nxc3 10. Bxc3 Bxc3+ 11. bxc3 Qe7 12. O-O e5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. g3 c5 5. Nf3 cxd4 6. Nxd4 O-O 7. Bg2 d5 8. cxd5 Nxd5 9. Bd2 Nxc3 10. Bxc3 Bxc3+ 11. bxc3 Qe7 12. O-O e5',
    fullAnnotation: 'Black ruins White\'s structure with 10...Bxc3+!, supports the center with 11...Qe7, and strikes with 12...e5!, seizing a commanding spatial advantage.',
    annotations: {
      17: "9... Nxc3 — Force liquidation.",
      19: "10... Bxc3+! — Ruin White's c-pawns.",
      23: "12... e5! — Boot White's knight and control the center."
    }
  },
  {
    id: 'nimzo-check-punish-bd2-b6-re8',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Nimzo 4. Bd2 – 6...b6 7. Rc1 Bb7 / 12...Nc6 Knight Outpost',
    shortName: 'Nimzo 4. Bd2 12...Nc6 Outpost',
    category: 'Tactical Punishment',
    eco: 'E20 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bd2 O-O 5. e3 d5 6. Nf3 b6 7. Rc1 Bb7 8. cxd5 exd5 9. Bd3 Re8 10. O-O Bf8 11. Ne5 c5 12. f4 Nc6',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bd2 O-O 5. e3 d5 6. Nf3 b6 7. Rc1 Bb7 8. cxd5 exd5 9. Bd3 Re8 10. O-O Bf8 11. Ne5 c5 12. f4 Nc6',
    fullAnnotation: 'Black demonstrates classical mastery against 4. Bd2: bishop retreats safely to f8, center is reinforced with 11...c5, and 12...Nc6 puts unstoppable pressure on White\'s d4 center.',
    annotations: {
      17: "9... Re8 — Command the open e-file.",
      19: "10... Bf8! — Tucking bishop away to preserve light-square defense.",
      21: "11... c5! — Challenge White's center.",
      23: "12... Nc6 — Coordinate all pieces with decisive equality."
    }
  },
  {
    id: 'nimzo-check-punish-qc2-d5-cxd4',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Classical – 5. e3 c5 6. Nf3 cxd4 / 12...Nbd7 Flawless Equality',
    shortName: 'Classical 5. e3 Symmetrical Break',
    category: 'Tactical Punishment',
    eco: 'E34 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. e3 c5 6. Nf3 cxd4 7. exd4 d5 8. a3 Bxc3+ 9. Qxc3 dxc4 10. Bxc4 b6 11. O-O Bb7 12. Bg5 Nbd7',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 O-O 5. e3 c5 6. Nf3 cxd4 7. exd4 d5 8. a3 Bxc3+ 9. Qxc3 dxc4 10. Bxc4 b6 11. O-O Bb7 12. Bg5 Nbd7',
    fullAnnotation: 'Black neutralizes White\'s Classical setup with 6...cxd4 and 7...d5, exchanges on c3, and fianchettoes the bishop on b7, developing 12...Nbd7 with harmonious equality.',
    annotations: {
      11: "6... cxd4 — Open the center.",
      15: "8... Bxc3+ — Trade off bishop for knight.",
      19: "10... b6 — Prepare ...Bb7.",
      23: "12... Nbd7 — Perfect piece coordination."
    }
  },
  {
    id: 'nimzo-check-punish-qb3-a4-clamp',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Nimzo 4. Qb3 – 5...a5 6. a3 a4 / 12...e5 Central Breakthrough',
    shortName: 'Nimzo 4. Qb3 6...a4! Queen Harassment',
    category: 'Tactical Punishment',
    eco: 'E22 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 Nc6 5. Nf3 a5 6. a3 a4 7. Qc2 Bxc3+ 8. Qxc3 Ne4 9. Qc2 f5 10. e3 O-O 11. Bd3 d6 12. O-O e5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qb3 Nc6 5. Nf3 a5 6. a3 a4 7. Qc2 Bxc3+ 8. Qxc3 Ne4 9. Qc2 f5 10. e3 O-O 11. Bd3 d6 12. O-O e5',
    fullAnnotation: 'Black punishes 4. Qb3 with the thematic wing counter-strike 5...a5! and 6...a4!, driving White\'s queen back, planting the 8...Ne4 knight, and breaking centrally with 12...e5!.',
    annotations: {
      9: "5... a5! — Prepare queen harassment.",
      11: "6... a4! — Tactical Motif: Tempo Harassment pushing White's queen away.",
      15: "8... Ne4 — Dominant knight outpost.",
      23: "12... e5! — Central breakthrough."
    }
  },
  {
    id: 'nimzo-check-punish-bg5-h6-g5-ne4',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Leningrad 4. Bg5 – 7...g5 8. Bg3 Ne4 / 12...Qe7 Queenside Control',
    shortName: 'Leningrad 10...Nxg3 Decimation',
    category: 'Tactical Punishment',
    eco: 'E30 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 h6 6. Bh4 d6 7. e3 g5 8. Bg3 Ne4 9. Qc2 Bxc3+ 10. bxc3 Nxg3 11. hxg3 e5 12. Bd3 Qe7',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 c5 5. d5 h6 6. Bh4 d6 7. e3 g5 8. Bg3 Ne4 9. Qc2 Bxc3+ 10. bxc3 Nxg3 11. hxg3 e5 12. Bd3 Qe7',
    fullAnnotation: 'Black demolishes White\'s Leningrad setup: 7...g5 pushes the bishop away, 8...Ne4 invades, and 10...Nxg3 snatches the bishop pair, cementing the center with 11...e5 and 12...Qe7.',
    annotations: {
      13: "7... g5! — Break the pin.",
      15: "8... Ne4! — Attack c3.",
      19: "10... Nxg3! — Snatch the bishop pair.",
      23: "12... Qe7 — Dominate the e5 square."
    }
  },
  {
    id: 'nimzo-check-punish-samisch-re8-na5',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Sämisch – 7...exd5 8. e3 Re8 / 12...Na5 Outpost Domination',
    shortName: 'Sämisch 12...Na5 Outpost Domination',
    category: 'Tactical Punishment',
    eco: 'E24 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 O-O 6. f3 d5 7. cxd5 exd5 8. e3 Re8 9. Bd3 c5 10. Ne2 Nc6 11. O-O b6 12. Ng3 Na5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. a3 Bxc3+ 5. bxc3 O-O 6. f3 d5 7. cxd5 exd5 8. e3 Re8 9. Bd3 c5 10. Ne2 Nc6 11. O-O b6 12. Ng3 Na5',
    fullAnnotation: 'Black crushes the Sämisch structure: controls the e-file with 8...Re8, undermines with 9...c5, and plants the 12...Na5 knight, leaving White\'s backward c3/c4 pawns utterly doomed.',
    annotations: {
      15: "8... Re8 — Pin on the e-file.",
      17: "9... c5 — Attack the base of White's center.",
      23: "12... Na5! — Tactical Outpost targeting c4 and b3."
    }
  },
  {
    id: 'nimzo-check-punish-hubner-nh4-g5',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Hübner Setup – 10. Nh4 g5 11. Qf3 / 12...Nh7 Trapped Knight',
    shortName: 'Hübner 12...Nh7 Refutation',
    category: 'Tactical Punishment',
    eco: 'E41 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. Nf3 Bxc3+ 7. bxc3 d6 8. O-O e5 9. e4 h6 10. d5 Ne7 11. Nh4 g5 12. Qf3 Nh7',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Bd3 Nc6 6. Nf3 Bxc3+ 7. bxc3 d6 8. O-O e5 9. e4 h6 10. d5 Ne7 11. Nh4 g5 12. Qf3 Nh7',
    fullAnnotation: 'White attempts a desperate piece raid with 11. Nh4 and 12. Qf3. Black coolly defends with 12...Nh7!, completely trapping White\'s knight on h4 and preparing ...gxh4 with a decisive piece win.',
    annotations: {
      19: "10... Ne7 — Reroute knight toward g6.",
      21: "11... g5! — Question White's knight.",
      23: "12... Nh7! — Tactical Motif: Trapped Piece! Defends f6 and leaves White's h4 knight trapped."
    }
  },
  {
    id: 'nimzo-check-punish-ba6-trade-defense',
    courseId: 'nimzo-indian-defense',
    subCourseId: 'nimzo-check-fork-oversights',
    name: 'Rubinstein – 5...Ba6 6. a3 Be7 / 12...c5 Queenside Control',
    shortName: 'Rubinstein 12...c5 Counter-Blow',
    category: 'Tactical Punishment',
    eco: 'E46 1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 b6 5. Ne2 Ba6 6. a3 Be7 7. Nf4 d5 8. cxd5 Bxf1 9. Kxf1 exd5 10. g4 c6 11. h4 O-O 12. Qf3 c5',
    pgn: '1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 b6 5. Ne2 Ba6 6. a3 Be7 7. Nf4 d5 8. cxd5 Bxf1 9. Kxf1 exd5 10. g4 c6 11. h4 O-O 12. Qf3 c5',
    fullAnnotation: 'Against White\'s 10. g4 flank rush, Black counters classically in the center with 12...c5!, undermining White\'s d4 pawn and seizing the initiative with open lines against White\'s king on f1.',
    annotations: {
      9: "5... Ba6 — Harass c4.",
      15: "8... Bxf1! — Displace White's king.",
      23: "12... c5! — Tactical Motif: Central Counter-Blow shattering White's center."
    }
  }
];

console.log('Total Nimzo-Indian Defense lines to compile:', nimzoRaw.length);

const processed = nimzoRaw.map(buildBlackLine);

const fileContent = `/* ============================================================
   AUTONOMOUSLY CURATED PRACTICAL REPERTOIRE LINES
   Course: nimzo-indian-defense (${processed.length} Master Lines - 81% Punishments)
   Tactical Blunder Punishments & Positional Master Refutations
   ============================================================ */

export const nimzoIndianDefenseLines = ${JSON.stringify(processed, null, 2)};
`;

fs.writeFileSync('src/data/lines/nimzo-indian-defense.js', fileContent, 'utf-8');
console.log(`Successfully written src/data/lines/nimzo-indian-defense.js (${processed.length} lines)`);
