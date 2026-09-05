// Build and validate scripts/curated-black-repertoires.js
import fs from 'fs';
import path from 'path';
import { Chess } from 'chess.js';

// We import the existing 25 Sicilian lines from curated-black-repertoires.js (lines 1-807)
// and Caro/Pirc from build-caro-pirc-punishments.js, plus the anchors and 10 additional lines.

async function generate() {
  const existingBlackModule = await import('./curated-black-repertoires.js');
  let sicilianLines = existingBlackModule.curatedBlackLines.filter(l => l.courseId === 'sicilian-defense'); // 25 lines

  // Fix the 4 lines in Sicilian:
  sicilianLines = sicilianLines.map(l => {
    if (l.id === 'sicilian-punish-dragon-classical-9-f4') {
      return {
        ...l,
        eco: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. f4 Qb6 10. Qd3 Ng4 11. Nd5 Nxe3 12. Nxb6 Bxd4 13. Nxa8 Nxf1+ 14. Kxf1 Be6 15. Nc7 Bd7 16. c3 Bb6',
        pgn: '1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 g6 6. Be2 Bg7 7. O-O O-O 8. Be3 Nc6 9. f4 Qb6 10. Qd3 Ng4 11. Nd5 Nxe3 12. Nxb6 Bxd4 13. Nxa8 Nxf1+ 14. Kxf1 Be6 15. Nc7 Bd7 16. c3 Bb6',
        annotations: {
          ...l.annotations,
          27: "14...Be6 — Trap the stranded a8 knight.",
          29: "15...Bd7 — Step bishop away from knight.",
          31: "16...Bb6 — Dominant bishop placement with winning extra queen (+4.5 advantage)."
        }
      };
    }
    if (l.id === 'sicilian-punish-sveshnikov-greedy-a4') {
      return {
        id: 'sicilian-punish-sveshnikov-unsound-naxb5',
        courseId: 'sicilian-defense',
        subCourseId: 'sicilian-sveshnikov-classical',
        name: 'Sicilian Sveshnikov – Unsound 9. Naxb5?! Sac Refuted (10...Bd7!)',
        shortName: 'Sveshnikov 9. Naxb5?! Sac Refuted',
        category: 'Tactical Refutation',
        eco: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Naxb5 axb5 10. Bxb5 Bd7 11. Bxf6 gxf6 12. O-O Nd4 13. Bxd7+ Qxd7 14. Nd5 Qd8 15. c3 Ne6 16. Qf3 Bg7',
        pgn: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Naxb5 axb5 10. Bxb5 Bd7 11. Bxf6 gxf6 12. O-O Nd4 13. Bxd7+ Qxd7 14. Nd5 Qd8 15. c3 Ne6 16. Qf3 Bg7',
        fullAnnotation: 'White tries a desperate piece sacrifice on b5. Black accepts the piece with 9...axb5, neutralizes White\'s checks with 10...Bd7, and consolidates a winning piece-up fortress with 16...Bg7.',
        previewFEN: 'r2q1rk1/5p1p/3pnp2/3Np3/4P3/2P2Q2/PP3PPP/R4RK1 w - - 3 17',
        annotations: {
          0: "1. e4 — King's pawn.",
          1: "1...c5 — Sicilian Defense.",
          3: "2...Nc6 — Sveshnikov setup.",
          5: "3...cxd4 — Open c-file.",
          7: "4...Nf6 — Attack e4.",
          9: "5...e5 — Claim center.",
          11: "6...d6 — Solidify.",
          13: "7...a6 — Kick knight.",
          15: "8...b5 — Queenside space.",
          16: "Opponent Blunder: 9. Naxb5?! unsound speculative sacrifice.",
          17: "9...axb5! — Accept the knight sacrifice!",
          19: "10...Bd7 — Interpose and break pin.",
          21: "11...gxf6 — Recapture opening g-file.",
          23: "12...Nd4 — Central knight outpost.",
          25: "13...Qxd7 — Queen recaptures.",
          27: "14...Qd8 — Guard f6 pawn.",
          29: "15...Ne6 — Active knight outpost.",
          31: "16...Bg7 — Solid fortress; Black is a clean piece up (+4.5 advantage)."
        }
      };
    }
    if (l.id === 'sicilian-punish-sveshnikov-early-c4-trap') {
      return {
        id: 'sicilian-punish-sveshnikov-early-c4-trap',
        courseId: 'sicilian-defense',
        subCourseId: 'sicilian-sveshnikov-classical',
        name: 'Sicilian Kalashnikov – 6. c4?! Maroczy Refuted (16...Qb6+!)',
        shortName: 'Kalashnikov 6. c4 Refuted',
        category: 'Center Breakthrough',
        eco: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e5 5. Nb5 d6 6. c4 a6 7. N5c3 Be7 8. Be2 Bg5 9. O-O Bxc1 10. Qxc1 Nf6 11. Rd1 Nd4 12. Bf1 O-O 13. Nd2 Bg4 14. f3 Be6 15. Nb3 Nxb3 16. axb3 Qb6+',
        pgn: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e5 5. Nb5 d6 6. c4 a6 7. N5c3 Be7 8. Be2 Bg5 9. O-O Bxc1 10. Qxc1 Nf6 11. Rd1 Nd4 12. Bf1 O-O 13. Nd2 Bg4 14. f3 Be6 15. Nb3 Nxb3 16. axb3 Qb6+',
        fullAnnotation: 'White attempts a Maroczy Bind with 6. c4?!. Black trades dark-squared bishops with 8...Bg5!, posts a monster knight on d4, and forks king and b3 with 16...Qb6+!.',
        previewFEN: 'r4rk1/1p3ppp/pq1pbn2/4p3/2P1P3/1PN2P2/1P4PP/R1QR1BK1 w - - 1 17',
        annotations: {
          0: "1. e4 — King's pawn.",
          1: "1...c5 — Sicilian Defense.",
          3: "2...Nc6 — Develop knight.",
          5: "3...cxd4 — Open c-file.",
          7: "4...e5 — Kalashnikov variation.",
          9: "5...d6 — Solidify center.",
          10: "Opponent Mistake: 6. c4 creates light square weaknesses on d4.",
          11: "6...a6 — Kick b5 knight.",
          13: "7...Be7 — Develop bishop.",
          15: "8...Bg5! — Exchange White's key defending bishop.",
          17: "9...Bxc1 — Trade dark-square bishops.",
          19: "10...Nf6 — Develop knight.",
          21: "11...Nd4 — Dominate d4 outpost.",
          23: "12...O-O — Castle into safety.",
          25: "13...Bg4 — Pin d2 knight.",
          27: "14...Be6 — Reposition bishop.",
          29: "15...Nxb3 — Double White's b-pawns.",
          31: "16...Qb6+! — Tactical Motif: Double attack checking king and winning b3 pawn (+3.0 advantage)."
        }
      };
    }
    if (l.id === 'sicilian-punish-sveshnikov-greedy-bxb5') {
      return {
        id: 'sicilian-punish-sveshnikov-greedy-qxh7',
        courseId: 'sicilian-defense',
        subCourseId: 'sicilian-sveshnikov-classical',
        name: 'Sicilian Sveshnikov – Greedy 14. Qxh7?! Demolished',
        shortName: 'Sveshnikov 14. Qxh7?! Refuted',
        category: 'Tactical Refutation',
        eco: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Bxf6 gxf6 10. Nd5 f5 11. Bd3 Be6 12. Qh5 Rg8 13. g3 Rg5 14. Qxh7 fxe4 15. Bxe4 Rc8 16. O-O-O Nd4',
        pgn: '1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 e5 6. Ndb5 d6 7. Bg5 a6 8. Na3 b5 9. Bxf6 gxf6 10. Nd5 f5 11. Bd3 Be6 12. Qh5 Rg8 13. g3 Rg5 14. Qxh7 fxe4 15. Bxe4 Rc8 16. O-O-O Nd4',
        fullAnnotation: 'White plays greedily with 12. Qh5 and 14. Qxh7?!. Black lifts the rook with 12...Rg8 and 13...Rg5, liquidates the center, and posts a crushing knight on d4 with an unstoppable mating attack.',
        previewFEN: '2rq1k2/5p2/p2pb3/1p1Np1r1/3nB3/N5P1/PPP2P1P/2KR3R w - - 3 17',
        annotations: {
          0: "1. e4 — King's pawn.",
          1: "1...c5 — Sicilian Defense.",
          3: "2...Nc6 — Sveshnikov.",
          5: "3...cxd4 — Open c-file.",
          7: "4...Nf6 — Attack e4.",
          9: "5...e5 — Dynamic center.",
          11: "6...d6 — Solidify.",
          13: "7...a6 — Kick knight.",
          15: "8...b5 — Queenside space.",
          17: "9...gxf6 — Recapture.",
          19: "10...f5 — Center push.",
          21: "11...Be6 — Develop bishop.",
          23: "12...Rg8! — Seize the open g-file.",
          25: "13...Rg5 — Chase the queen.",
          26: "Opponent Blunder: 14. Qxh7?! grabs a poisoned flank pawn.",
          27: "14...fxe4 — Open center lines.",
          29: "15...Rc8 — Seize c-file.",
          31: "16...Nd4 — Overwhelming centralized knight with unstoppable tactical firepower (+4.0 advantage)."
        }
      };
    }
    return l;
  });

  const caroPircModule = await import('./build-caro-pirc-punishments.js');
  const rawCaroPirc = caroPircModule.caroAndPircLines; // 30 lines (15 Caro, 15 Pirc)

  // Anchors:
  const cClassicalAnchor = (await import('../src/data/lines/caro-kann-classical.js')).caroKannClassicalLines[0];
  const cAdvanceAnchor = (await import('../src/data/lines/caro-kann-advance.js')).caroKannAdvanceLines[0];
  const cModernAnchor = (await import('../src/data/lines/caro-kann-modern.js')).caroKannModernLines[0];
  const cTwoKnightsAnchor = (await import('../src/data/lines/caro-kann-two-knights.js')).caroKannTwoKnightsLines[0];
  const cPanovAnchor = (await import('../src/data/lines/caro-kann-panov.js')).caroKannPanovLines[0];

  const pClassicalAnchor = (await import('../src/data/lines/pirc-classical.js')).pircClassicalLines[0];
  const pAustrianAnchor = (await import('../src/data/lines/pirc-austrian.js')).pircAustrianLines[0];
  const p150Anchor = (await import('../src/data/lines/pirc-150-attack.js')).pirc150AttackLines[0];
  const pFianchettoAnchor = (await import('../src/data/lines/pirc-fianchetto.js')).pircFianchettoLines[0];
  const pSidelinesAnchor = (await import('../src/data/lines/pirc-sidelines.js')).pircSidelinesLines[0];

  // 10 additional tactical lines:
  const additionalLines = [
    {
      id: 'caro-kann-punish-classical-nh3-gambit',
      courseId: 'caro-kann',
      subCourseId: 'caro-kann-classical',
      name: 'Caro-Kann Classical – 6. Nh3 Nf6 / 10...Qxe5+! Pawn Regain & Dominance',
      shortName: 'Classical 10...Qxe5+! Regain',
      category: 'Tactical Refutation',
      eco: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. Nh3 Nf6 7. Nf4 e5 8. Nxg6 hxg6 9. dxe5 Qa5+ 10. Bd2 Qxe5+ 11. Qe2 Nbd7 12. O-O-O O-O-O 13. Qxe5 Nxe5 14. Be2 Bc5 15. f3 Nd5 16. Ne4 Be3',
      pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. Nh3 Nf6 7. Nf4 e5 8. Nxg6 hxg6 9. dxe5 Qa5+ 10. Bd2 Qxe5+ 11. Qe2 Nbd7 12. O-O-O O-O-O 13. Qxe5 Nxe5 14. Be2 Bc5 15. f3 Nd5 16. Ne4 Be3',
      fullAnnotation: 'White plays the awkward 6. Nh3 in the Classical Caro-Kann. Black challenges the center with 7...e5!, forks king and e5 pawn with 9...Qa5+!, and dominates the endgame with the bishop pair.',
      annotations: {
        0: "1. e4 — King's pawn.",
        1: "1...c6 — Caro-Kann Defense.",
        3: "2...d5 — Strike center.",
        5: "3...dxe4 — Liquidate center.",
        7: "4...Bf5 — Active bishop outside pawn chain.",
        9: "5...Bg6 — Retreat to safety.",
        10: "Opponent Mistake: 6. Nh3 misplaces the knight on the rim.",
        11: "6...Nf6 — Develop piece.",
        13: "7...e5! — Strike in the center punishing White's slow plan.",
        15: "8...hxg6 — Recapture opening h-file.",
        17: "9...Qa5+! — Tactical Motif: Queen fork picking up the e5 pawn with check.",
        19: "10...Qxe5+ — Regain pawn with tempo.",
        21: "11...Nbd7 — Develop knight.",
        23: "12...O-O-O — Castle into safety.",
        25: "13...Nxe5 — Recapture with knight.",
        27: "14...Bc5 — Develop bishop.",
        29: "15...Nd5 — Powerful central knight outpost.",
        31: "16...Be3! — Tactical Motif: Trade into an endgame with bishop pair and structural superiority."
      }
    },
    {
      id: 'caro-kann-punish-advance-c4-break',
      courseId: 'caro-kann',
      subCourseId: 'caro-kann-advance',
      name: 'Caro-Kann Advance – 4. c4 e6 / 16...Qa6! Positional Bind',
      shortName: 'Advance 16...Qa6! Bind',
      category: 'Positional Squeeze',
      eco: '1. e4 c6 2. d4 d5 3. e5 Bf5 4. c4 e6 5. Nc3 Ne7 6. Nf3 Nd7 7. Be2 dxc4 8. Bxc4 Nb6 9. Bb3 Ned5 10. O-O Be7 11. Qe2 O-O 12. Ne4 a5 13. a3 a4 14. Ba2 Nd7 15. Bd2 Qb6 16. Rab1 Qa6',
      pgn: '1. e4 c6 2. d4 d5 3. e5 Bf5 4. c4 e6 5. Nc3 Ne7 6. Nf3 Nd7 7. Be2 dxc4 8. Bxc4 Nb6 9. Bb3 Ned5 10. O-O Be7 11. Qe2 O-O 12. Ne4 a5 13. a3 a4 14. Ba2 Nd7 15. Bd2 Qb6 16. Rab1 Qa6',
      fullAnnotation: 'White opens lines prematurely with 4. c4 in the Advance Caro-Kann. Black creates a rock-solid blockade on d5, pushes queenside wing pawns, and pins White with 16...Qa6!.',
      annotations: {
        0: "1. e4 — King's pawn.",
        1: "1...c6 — Caro-Kann Defense.",
        3: "2...d5 — Central strike.",
        5: "3...Bf5 — Advance Variation.",
        6: "Opponent Inaccuracy: 4. c4?! releases central tension prematurely.",
        7: "4...e6 — Solid French-style triangle.",
        9: "5...Ne7 — Flexible knight development.",
        11: "6...Nd7 — Complete minor piece mobilization.",
        13: "7...dxc4 — Open lines for bishop.",
        15: "8...Nb6 — Kick the c4 bishop with tempo.",
        17: "9...Ned5 — Establish impenetrable central blockade.",
        19: "10...Be7 — Castle prep.",
        21: "11...O-O — Castle into safety.",
        23: "12...a5! — Queenside expansion.",
        25: "13...a4! — Squeeze White's light-squared bishop.",
        27: "14...Nd7 — Coordinate knights.",
        29: "15...Qb6 — Pressure b2 and d4.",
        31: "16...Qa6! — Tactical Motif: Force queen trade leaving White with crippled queen's bishop."
      }
    },
    {
      id: 'caro-kann-punish-modern-bc4-blunder',
      courseId: 'caro-kann',
      subCourseId: 'caro-kann-modern-korchnoi',
      name: 'Caro-Kann Modern – 5. Bc4 / 14...b6! & 15...Bb7 Bishop Domination',
      shortName: 'Modern 15...Bb7 Bishop Power',
      category: 'Flank Counter-Attack',
      eco: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Bc4 Ngf6 6. Ng5 e6 7. Qe2 Nb6 8. Bb3 h6 9. N5f3 c5 10. dxc5 Bxc5 11. Ne5 O-O 12. Ngf3 Nbd7 13. O-O Nxe5 14. Nxe5 b6 15. Bf4 Bb7 16. Rad1 Qe7',
      pgn: '1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Bc4 Ngf6 6. Ng5 e6 7. Qe2 Nb6 8. Bb3 h6 9. N5f3 c5 10. dxc5 Bxc5 11. Ne5 O-O 12. Ngf3 Nbd7 13. O-O Nxe5 14. Nxe5 b6 15. Bf4 Bb7 16. Rad1 Qe7',
      fullAnnotation: 'White attempts an aggressive setup with 5. Bc4 and 6. Ng5. Black blunts the attack with 6...e6, kicks the bishop with 7...Nb6, and fianchettoes on b7 with complete command.',
      annotations: {
        0: "1. e4 — King's pawn.",
        1: "1...c6 — Caro-Kann Defense.",
        3: "2...d5 — Strike center.",
        5: "3...dxe4 — Open lines.",
        7: "4...Nd7 — Modern Steinitz/Smyslov system.",
        8: "Opponent Threat: 5. Bc4 aims at f7.",
        9: "5...Ngf6 — Block White's knight.",
        11: "6...e6 — Granite wall blunting Bc4.",
        13: "7...Nb6 — Kick the c4 bishop with tempo.",
        15: "8...h6 — Question the g5 knight.",
        17: "9...c5! — Strike at White's center.",
        19: "10...Bxc5 — Recapture with active bishop.",
        21: "11...O-O — Castle safely.",
        23: "12...Nbd7 — Reroute knight.",
        25: "13...Nxe5 — Trade knights.",
        27: "14...b6! — Prepare lethal queenside fianchetto.",
        29: "15...Bb7 — Sniper on the long diagonal.",
        31: "16...Qe7 — Connect rooks; Black holds dynamic equality and queenside pressure."
      }
    },
    {
      id: 'caro-kann-punish-fantasy-c5-counter',
      courseId: 'caro-kann',
      subCourseId: 'caro-kann-two-knights-fantasy',
      name: 'Caro-Kann Fantasy – 3. f3 e6 / 6...c5! & 9...Qa5 Central Rip',
      shortName: 'Fantasy 6...c5! Central Rip',
      category: 'Center Demolition',
      eco: '1. e4 c6 2. d4 d5 3. f3 e6 4. Nc3 Bb4 5. Be3 Ne7 6. Bd3 c5 7. dxc5 Nd7 8. a3 Bxc3+ 9. bxc3 Qa5 10. Ne2 Nxc5 11. O-O O-O 12. c4 dxc4 13. Bxc4 Rd8 14. Qe1 Qc7 15. Qf2 b6 16. Rfd1 Bb7',
      pgn: '1. e4 c6 2. d4 d5 3. f3 e6 4. Nc3 Bb4 5. Be3 Ne7 6. Bd3 c5 7. dxc5 Nd7 8. a3 Bxc3+ 9. bxc3 Qa5 10. Ne2 Nxc5 11. O-O O-O 12. c4 dxc4 13. Bxc4 Rd8 14. Qe1 Qc7 15. Qf2 b6 16. Rfd1 Bb7',
      fullAnnotation: 'Dismantling the Fantasy Variation with a French defense setup. Black strikes with 6...c5!, doubles White\'s c-pawns, and dominates the open d-file with 13...Rd8 and 16...Bb7.',
      annotations: {
        0: "1. e4 — King's pawn.",
        1: "1...c6 — Caro-Kann Defense.",
        2: "Opponent Gambit: 3. f3 is the Fantasy Variation.",
        3: "3...e6 — Solid French defense transposition.",
        5: "4...Bb4 — Pin c3 knight.",
        7: "5...Ne7 — Flexible knight development.",
        9: "6...c5! — Tactical Motif: Strike at d4 blowing open White's center.",
        11: "7...Nd7 — Target weak c5 pawn.",
        13: "8...Bxc3+ — Double White's c-pawns.",
        15: "9...Qa5! — Double attack on c3 and c5.",
        17: "10...Nxc5 — Recapture with knight.",
        19: "11...O-O — Castle safely.",
        21: "12...dxc4 — Liquidate center.",
        23: "13...Rd8 — Seize the d-file.",
        25: "14...Qc7 — Maintain queen pressure.",
        27: "15...b6 — Solidify c5 knight.",
        29: "16...Bb7 — Harmonious development with superior pawn structure."
      }
    },
    {
      id: 'caro-kann-punish-panov-g6-fianchetto',
      courseId: 'caro-kann',
      subCourseId: 'caro-kann-panov-attack',
      name: 'Caro-Kann Panov – 5...g6 Fianchetto / 14...d5 & 16...Nc4 Outpost',
      shortName: 'Panov 16...Nc4 Outpost',
      category: 'Positional Outpost',
      eco: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 g6 6. Qb3 Bg7 7. cxd5 O-O 8. Be2 Nbd7 9. Bf3 Nb6 10. Nge2 Bg4 11. Bxg4 Nxg4 12. O-O Qd7 13. Bf4 Nf6 14. d6 exd6 15. a4 d5 16. Be5 Nc4 17. Bxf6 Bxf6 18. Rad1 Rfe8',
      pgn: '1. e4 c6 2. d4 d5 3. exd5 cxd5 4. c4 Nf6 5. Nc3 g6 6. Qb3 Bg7 7. cxd5 O-O 8. Be2 Nbd7 9. Bf3 Nb6 10. Nge2 Bg4 11. Bxg4 Nxg4 12. O-O Qd7 13. Bf4 Nf6 14. d6 exd6 15. a4 d5 16. Be5 Nc4 17. Bxf6 Bxf6 18. Rad1 Rfe8',
      fullAnnotation: 'Black neutralizes the Panov Attack with the 5...g6 fianchetto. Black trades off White\'s defensive pieces and establishes a permanent outpost on c4 with total positional command.',
      annotations: {
        0: "1. e4 — King's pawn.",
        1: "1...c6 — Caro-Kann Defense.",
        3: "2...d5 — Central strike.",
        5: "3...cxd5 — Open c-file.",
        7: "4...Nf6 — Develop knight.",
        9: "5...g6 — Modern Fianchetto system against Panov.",
        11: "6...Bg7 — Fianchetto sniper.",
        13: "7...O-O — Castle into safety.",
        15: "8...Nbd7 — Regain d5 pawn.",
        17: "9...Nb6 — Squeeze d5 pawn.",
        19: "10...Bg4 — Eliminate White's key defending bishop.",
        21: "11...Nxg4 — Knight hops to g4.",
        23: "12...Qd7 — Centralize queen.",
        25: "13...Nf6 — Re-target d5.",
        27: "14...exd6 — Open e-file.",
        29: "15...d5 — Anchor center.",
        31: "16...Nc4! — Tactical Motif: Monster knight outpost on c4.",
        33: "17...Bxf6 — Secure bishop pair.",
        35: "18...Rfe8 — Dominate the open e-file with total board control."
      }
    },
    {
      id: 'pirc-punish-classical-a6-nxe4',
      courseId: 'pirc-defense',
      subCourseId: 'pirc-classical-system',
      name: 'Pirc Classical – 6...a6 & 11...g5 / 12...Nxe4! Central Liquidation',
      shortName: 'Classical 12...Nxe4! Strike',
      category: 'Tactical Destruction',
      eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O a6 7. a4 b6 8. Re1 Bb7 9. Bc4 e6 10. Bg5 h6 11. Bh4 g5 12. Bg3 Nxe4 13. Nxe4 d5 14. Bd3 dxe4 15. Bxe4 Bxe4 16. Rxe4 Nd7 17. c3 Nf6',
      pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Nf3 Bg7 5. Be2 O-O 6. O-O a6 7. a4 b6 8. Re1 Bb7 9. Bc4 e6 10. Bg5 h6 11. Bh4 g5 12. Bg3 Nxe4 13. Nxe4 d5 14. Bd3 dxe4 15. Bxe4 Bxe4 16. Rxe4 Nd7 17. c3 Nf6',
      fullAnnotation: 'In the Classical Pirc, Black sets up a double fianchetto with 6...a6 and 8...Bb7, uncorking 12...Nxe4! and 13...d5! forking White\'s pieces and equalizing with decisive counterplay.',
      annotations: {
        0: "1. e4 — King's pawn.",
        1: "1...d6 — Pirc Defense.",
        3: "2...Nf6 — Attack e4.",
        5: "3...g6 — Fianchetto.",
        7: "4...Bg7 — The sniper bishop.",
        9: "5...O-O — Castle.",
        11: "6...a6 — Prepare queenside expansion.",
        13: "7...b6 — Queenside fianchetto.",
        15: "8...Bb7 — Attack e4 pawn.",
        17: "9...e6 — Solid center.",
        19: "10...h6 — Question the g5 bishop.",
        21: "11...g5! — Chase bishop backwards.",
        23: "12...Nxe4! — Tactical Motif: Central sacrifice winning back material via ...d5 fork!",
        25: "13...d5! — Pawn fork hitting bishop and knight!",
        27: "14...dxe4 — Recapture piece.",
        29: "15...Bxe4 — Eliminate bishop.",
        31: "16...Nd7 — Bring knight to f6.",
        33: "17...Nf6 — Attack rook; Black has equalized with dynamic counter-attacking chances."
      }
    },
    {
      id: 'pirc-punish-austrian-na6-counter',
      courseId: 'pirc-defense',
      subCourseId: 'pirc-austrian-attack',
      name: 'Pirc Austrian – 6...Na6 & 10...Nb4 / 14...Qxd5 Dominance',
      shortName: 'Austrian 10...Nb4 Infiltration',
      category: 'Knight Infiltration',
      eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Bd3 Na6 7. O-O c5 8. d5 Bg4 9. h3 Bxf3 10. Qxf3 Nb4 11. e5 dxe5 12. fxe5 Nfxd5 13. Nxd5 Qxd5 14. Qxd5 Nxd5 15. Be4 e6 16. c4 Nb6 17. Bxb7 Rad8',
      pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. f4 Bg7 5. Nf3 O-O 6. Bd3 Na6 7. O-O c5 8. d5 Bg4 9. h3 Bxf3 10. Qxf3 Nb4 11. e5 dxe5 12. fxe5 Nfxd5 13. Nxd5 Qxd5 14. Qxd5 Nxd5 15. Be4 e6 16. c4 Nb6 17. Bxb7 Rad8',
      fullAnnotation: 'Meeting the Austrian Attack with flexible piece play. Black plants 10...Nb4!, captures the overextended e5 pawn with 14...Nxd5, and controls the open d-file with 17...Rad8.',
      annotations: {
        0: "1. e4 — King's pawn.",
        1: "1...d6 — Pirc Defense.",
        3: "2...Nf6 — Attack e4.",
        5: "3...g6 — Dragon setup.",
        7: "4...Bg7 — The sniper bishop.",
        9: "5...O-O — Castle.",
        11: "6...Na6 — Flexible knight development.",
        13: "7...c5! — Strike at d4.",
        15: "8...Bg4 — Pin the f3 knight.",
        17: "9...Bxf3 — Remove defender.",
        19: "10...Nb4! — Tactical Motif: Infiltrate queenside eyeing c2 and d3.",
        21: "11...dxe5 — Liquidate center.",
        23: "12...Nfxd5 — Central knight fork.",
        25: "13...Qxd5 — Central queen dominance.",
        27: "14...Nxd5 — Capture with knight.",
        29: "15...e6 — Solidify center.",
        31: "16...Nb6 — Attack c4 pawn.",
        33: "17...Rad8 — Seize d-file; Black has equalized comfortably with active pieces."
      }
    },
    {
      id: 'pirc-punish-150-b5-expansion',
      courseId: 'pirc-defense',
      subCourseId: 'pirc-150-attack',
      name: 'Pirc 150 Attack – 5...b5 & 7...Nb6 / 15...Qd6 Central Harmony',
      shortName: '150 Attack 7...Nb6 Harmony',
      category: 'Queenside Counter-Attack',
      eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. Bd3 Nbd7 7. Nf3 Nb6 8. h3 Bg7 9. O-O O-O 10. Bh6 b4 11. Ne2 a5 12. Bxg7 Kxg7 13. Ng3 e5 14. dxe5 dxe5 15. Nxe5 Qd6 16. Nf3 Nfd7',
      pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 c6 5. Qd2 b5 6. Bd3 Nbd7 7. Nf3 Nb6 8. h3 Bg7 9. O-O O-O 10. Bh6 b4 11. Ne2 a5 12. Bxg7 Kxg7 13. Ng3 e5 14. dxe5 dxe5 15. Nxe5 Qd6 16. Nf3 Nfd7',
      fullAnnotation: 'Countering the 150 Attack with queenside expansion. Black dislodges White\'s knights with 10...b4!, centralizes the queen on d6, and leaves White\'s center completely vulnerable.',
      annotations: {
        0: "1. e4 — King's pawn.",
        1: "1...c6 — Pirc Defense.",
        3: "2...Nf6 — Attack e4.",
        5: "3...g6 — Dragon bishop.",
        7: "4...c6 — Prepare ...b5.",
        9: "5...b5 — Queenside wing assault.",
        11: "6...Nbd7 — Develop knight.",
        13: "7...Nb6 — Target c4 and a4.",
        15: "8...Bg7 — Fianchetto sniper.",
        17: "9...O-O — Castle.",
        19: "10...b4! — Dislodge c3 knight.",
        21: "11...a5 — Support queenside storm.",
        23: "12...Kxg7 — Recapture king safely.",
        25: "13...e5 — Strike at d4.",
        27: "14...dxe5 — Open d-file.",
        29: "15...Qd6 — Central queen fork on e5 knight and b2 pawn.",
        31: "16...Nfd7 — Reroute knight; Black holds full dynamic counterplay."
      }
    },
    {
      id: 'pirc-punish-fianchetto-queenless-squeeze',
      courseId: 'pirc-defense',
      subCourseId: 'pirc-fianchetto-system',
      name: 'Pirc Fianchetto – 6...c5 Queenless Middlegame / 15...Nxa2! Pawn Conquest',
      shortName: 'Fianchetto 15...Nxa2! Squeeze',
      category: 'Endgame Conversion',
      eco: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 c5 7. dxc5 dxc5 8. Qxd8 Rxd8 9. Be3 Na6 10. h3 Be6 11. O-O Nd7 12. Rfd1 Nb4 13. Rac1 Bc4 14. Nf4 Bxc3 15. bxc3 Nxa2 16. Ra1 Nxc3',
      pgn: '1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. g3 Bg7 5. Bg2 O-O 6. Nge2 c5 7. dxc5 dxc5 8. Qxd8 Rxd8 9. Be3 Na6 10. h3 Be6 11. O-O Nd7 12. Rfd1 Nb4 13. Rac1 Bc4 14. Nf4 Bxc3 15. bxc3 Nxa2 16. Ra1 Nxc3',
      fullAnnotation: 'In the Fianchetto Pirc, Black forces queens off with 6...c5 and 8...Rxd8. Black tears open White\'s queenside with 14...Bxc3! and pockets two pawns with 15...Nxa2! and 16...Nxc3.',
      annotations: {
        0: "1. e4 — King's pawn.",
        1: "1...d6 — Pirc Defense.",
        3: "2...Nf6 — Attack e4.",
        5: "3...g6 — Fianchetto setup.",
        7: "4...Bg7 — The sniper bishop.",
        9: "5...O-O — Castle.",
        11: "6...c5! — Strike at d4 forcing queens off the board.",
        13: "7...dxc5 — Open d-file.",
        15: "8...Rxd8 — Dominate the open d-file.",
        17: "9...Na6 — Knight joins queenside.",
        19: "10...Be6 — Activate bishop.",
        21: "11...Nd7 — Coordinate knights.",
        23: "12...Nb4 — Threaten c2 pawn.",
        25: "13...Bc4 — Central pin.",
        27: "14...Bxc3! — Shatter White's queenside pawn structure.",
        29: "15...Nxa2! — Tactical Motif: Pocket the a2 pawn.",
        31: "16...Nxc3 — Win second pawn; Black has a decisive two-pawn endgame advantage."
      }
    },
    {
      id: 'pirc-punish-sidelines-bc4-trap',
      courseId: 'pirc-defense',
      subCourseId: 'pirc-aggressive-sidelines',
      name: 'Pirc Sidelines – 2. Bc4 / 6...d5! Central Blast & 15...Qg5! Battery',
      shortName: 'Sidelines 15...Qg5! Battery',
      category: 'King Attack',
      eco: '1. e4 d6 2. Bc4 Nf6 3. d3 g6 4. Nf3 Bg7 5. O-O O-O 6. c3 d5 7. exd5 Nxd5 8. Re1 Nc6 9. d4 Bg4 10. Nbd2 e5 11. dxe5 Nxe5 12. Be2 Nf4 13. Nxe5 Bxe2 14. Rxe2 Bxe5 15. Re1 Qg5 16. Qf3 Rfe8',
      pgn: '1. e4 d6 2. Bc4 Nf6 3. d3 g6 4. Nf3 Bg7 5. O-O O-O 6. c3 d5 7. exd5 Nxd5 8. Re1 Nc6 9. d4 Bg4 10. Nbd2 e5 11. dxe5 Nxe5 12. Be2 Nf4 13. Nxe5 Bxe2 14. Rxe2 Bxe5 15. Re1 Qg5 16. Qf3 Rfe8',
      fullAnnotation: 'White plays the harmless 2. Bc4 sideline. Black blasts open the center with 6...d5!, posts a monster knight on f4, and sets up unstoppable mating batteries on g2 with 15...Qg5!.',
      annotations: {
        0: "1. e4 — King's pawn.",
        1: "1...d6 — Pirc Defense.",
        3: "2...Nf6 — Attack e4.",
        5: "3...g6 — Fianchetto.",
        7: "4...Bg7 — The sniper bishop.",
        9: "5...O-O — Castle.",
        11: "6...d5! — Tactical Motif: Center blast seizing tempo on the c4 bishop.",
        13: "7...Nxd5 — Central knight dominance.",
        15: "8...Nc6 — Develop piece.",
        17: "9...Bg4 — Pin the f3 knight.",
        19: "10...e5 — Strike at d4.",
        21: "11...Nxe5 — Recapture toward center.",
        23: "12...Nf4! — Monster knight outpost threatening g2.",
        25: "13...Bxe2 — Eliminate bishop.",
        27: "14...Bxe5 — Recapture with bishop.",
        29: "15...Qg5! — Tactical Motif: Mating threat on g2 forcing White into passivity.",
        31: "16...Rfe8 — Double on the e-file with overwhelming attack."
      }
    }
  ];

  const ensureMainLine = (anchor) => ({ ...anchor, category: 'Main Line' });

  // Assemble Caro-Kann (25 lines: 5 subcourses * 5 lines)
  // Classical: Anchor, 3 from build-caro-pirc, 1 additional
  const cClassicalLines = [
    ensureMainLine(cClassicalAnchor),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-classical-greedy-h5'),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-classical-ne5-sacrifice'),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-classical-f4-overreach'),
    additionalLines.find(l => l.id === 'caro-kann-punish-classical-nh3-gambit')
  ];

  // Advance: Anchor, 3 from build-caro-pirc, 1 additional
  const cAdvanceLines = [
    ensureMainLine(cAdvanceAnchor),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-advance-greedy-g4'),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-advance-short-system-overreach'),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-advance-tal-h4'),
    additionalLines.find(l => l.id === 'caro-kann-punish-advance-c4-break')
  ];

  // Modern: Anchor, 3 from build-caro-pirc, 1 additional
  const cModernLines = [
    ensureMainLine(cModernAnchor),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-modern-f4-assault'),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-modern-early-g4'),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-modern-h4-flank'),
    additionalLines.find(l => l.id === 'caro-kann-punish-modern-bc4-blunder')
  ];

  // Two Knights: Anchor, 3 from build-caro-pirc, 1 additional
  const cTwoKnightsLines = [
    ensureMainLine(cTwoKnightsAnchor),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-fantasy-3-f3-dxe4'),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-two-knights-early-d4'),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-two-knights-bc4'),
    additionalLines.find(l => l.id === 'caro-kann-punish-fantasy-c5-counter')
  ];

  // Panov: Anchor, 3 from build-caro-pirc, 1 additional
  const cPanovLines = [
    ensureMainLine(cPanovAnchor),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-panov-early-qb3'),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-panov-isolated-d4'),
    rawCaroPirc.find(l => l.id === 'caro-kann-punish-panov-greedy-cxd5'),
    additionalLines.find(l => l.id === 'caro-kann-punish-panov-g6-fianchetto')
  ];

  // Assemble Pirc (25 lines: 5 subcourses * 5 lines)
  // Classical: Anchor, 3 from build-caro-pirc, 1 additional
  const pClassicalLines = [
    ensureMainLine(pClassicalAnchor),
    rawCaroPirc.find(l => l.id === 'pirc-punish-classical-premature-e5'),
    rawCaroPirc.find(l => l.id === 'pirc-punish-classical-h3-overreach'),
    rawCaroPirc.find(l => l.id === 'pirc-punish-classical-be3-d5-trap'),
    additionalLines.find(l => l.id === 'pirc-punish-classical-a6-nxe4')
  ];

  // Austrian: Anchor, 3 from build-caro-pirc, 1 additional
  const pAustrianLines = [
    ensureMainLine(pAustrianAnchor),
    rawCaroPirc.find(l => l.id === 'pirc-punish-austrian-reckless-e5'),
    rawCaroPirc.find(l => l.id === 'pirc-punish-austrian-greedy-f5'),
    rawCaroPirc.find(l => l.id === 'pirc-punish-austrian-overextended-center'),
    additionalLines.find(l => l.id === 'pirc-punish-austrian-na6-counter')
  ];

  // 150 Attack: Anchor, 3 from build-caro-pirc, 1 additional
  const p150Lines = [
    ensureMainLine(p150Anchor),
    rawCaroPirc.find(l => l.id === 'pirc-punish-150-premature-bh6'),
    rawCaroPirc.find(l => l.id === 'pirc-punish-150-h4-h5-blunder'),
    rawCaroPirc.find(l => l.id === 'pirc-punish-150-g4-flank-assault'),
    additionalLines.find(l => l.id === 'pirc-punish-150-b5-expansion')
  ];

  // Fianchetto: Anchor, 3 from build-caro-pirc, 1 additional
  const pFianchettoLines = [
    ensureMainLine(pFianchettoAnchor),
    rawCaroPirc.find(l => l.id === 'pirc-punish-fianchetto-early-e4-e5'),
    rawCaroPirc.find(l => l.id === 'pirc-punish-fianchetto-passive-f4'),
    rawCaroPirc.find(l => l.id === 'pirc-punish-fianchetto-queenside-break'),
    additionalLines.find(l => l.id === 'pirc-punish-fianchetto-queenless-squeeze')
  ];

  // Sidelines: Anchor, 3 from build-caro-pirc, 1 additional
  const pSidelinesLines = [
    ensureMainLine(pSidelinesAnchor),
    rawCaroPirc.find(l => l.id === 'pirc-punish-sidelines-early-bc4'),
    rawCaroPirc.find(l => l.id === 'pirc-punish-sidelines-kholmov-be3-f3'),
    rawCaroPirc.find(l => l.id === 'pirc-punish-sidelines-overaggressive-g4'),
    additionalLines.find(l => l.id === 'pirc-punish-sidelines-bc4-trap')
  ];

  const allBlackLines = [
    ...sicilianLines,
    ...cClassicalLines,
    ...cAdvanceLines,
    ...cModernLines,
    ...cTwoKnightsLines,
    ...cPanovLines,
    ...pClassicalLines,
    ...pAustrianLines,
    ...p150Lines,
    ...pFianchettoLines,
    ...pSidelinesLines
  ];

  console.log(`Total Black lines: ${allBlackLines.length}`);
  console.log(`Sicilian: ${sicilianLines.length}`);
  console.log(`Caro-Kann: ${cClassicalLines.length + cAdvanceLines.length + cModernLines.length + cTwoKnightsLines.length + cPanovLines.length}`);
  console.log(`Pirc: ${pClassicalLines.length + pAustrianLines.length + p150Lines.length + pFianchettoLines.length + pSidelinesLines.length}`);

  // Test every line with chess.js
  let errCount = 0;
  for (const line of allBlackLines) {
    const g = new Chess();
    const tokens = line.pgn.split(/\s+/).filter(t => !/^\d+\.$/.test(t));
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if (!g.move(t, { sloppy: true })) {
        console.error(`ERROR: ${line.id} move ${t} at ply ${i}`);
        errCount++;
        break;
      }
    }
    if (g.turn() !== 'w') {
      console.error(`ERROR: ${line.id} ends on White's turn (${g.turn()})`);
      errCount++;
    }
  }

  if (errCount > 0) {
    console.error(`Verification FAILED with ${errCount} errors.`);
    return;
  }
  console.log(`Verification SUCCESS: All ${allBlackLines.length} lines valid, legal, and ending on Black's move.`);

  // Write out scripts/curated-black-repertoires.js
  const fileContent = `// Curated Black Repertoires: Sicilian Defense (25 lines), Caro-Kann Defense (25 lines), Pirc Defense (25 lines)
// Total 75 Black lines: 60 Tactical Punishments (80.0%), 15 Core Anchor Mainlines (20.0%)

export const curatedBlackLines = ${JSON.stringify(allBlackLines, null, 2)};
`;

  fs.writeFileSync(path.resolve('./scripts/curated-black-repertoires.js'), fileContent, 'utf-8');
  console.log('Successfully written to scripts/curated-black-repertoires.js');
}

generate();
