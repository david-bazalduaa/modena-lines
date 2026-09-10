import { Chess } from 'chess.js';
import fs from 'fs';
import path from 'path';

function buildLine(raw) {
  const game = new Chess();
  const tokens = raw.pgn.split(/\s+/).filter(t => t !== '' && !/^\d+\.$/.test(t));
  const fens = [];

  for (let p = 0; p < tokens.length; p++) {
    const token = tokens[p];
    const res = game.move(token, { sloppy: true });
    if (!res) {
      throw new Error(`[${raw.id}] Illegal move '${token}' at ply ${p}`);
    }
    fens.push(game.fen());
  }

  const plyCount = tokens.length;
  if (plyCount < 16) {
    throw new Error(`[${raw.id}] Ply count too short: ${plyCount}`);
  }
  if (game.turn() !== 'b') {
    throw new Error(`[${raw.id}] Does not end on White's move: turn=${game.turn()}`);
  }

  // Preview FEN at move 4 (ply 8) or move 5 (ply 10)
  const previewPly = Math.min(8, plyCount - 1);
  const previewFEN = fens[previewPly - 1] || game.fen();

  // Validate or build annotations
  const annotations = {};
  for (let i = 0; i < plyCount; i++) {
    const isWhite = i % 2 === 0;
    const moveNum = Math.floor(i / 2) + 1;
    const notation = isWhite ? `${moveNum}. ${tokens[i]}` : `${moveNum}... ${tokens[i]}`;
    if (raw.annotations && raw.annotations[i]) {
      annotations[i] = raw.annotations[i];
    } else {
      annotations[i] = `${notation} — ${isWhite ? 'White develops with energetic initiative.' : 'Black responds in the center.'}`;
    }
  }

  return {
    id: raw.id,
    courseId: raw.courseId,
    subCourseId: raw.subCourseId,
    name: raw.name,
    shortName: raw.shortName,
    category: raw.category,
    side: 'white',
    eco: raw.eco || tokens.slice(0, 8).join(' '),
    pgn: raw.pgn,
    fullAnnotation: raw.fullAnnotation,
    previewFEN,
    annotations
  };
}

function buildBlackLine(raw) {
  const game = new Chess();
  const tokens = raw.pgn.split(/\s+/).filter(t => t !== '' && !/^\d+\.$/.test(t));
  const fens = [];

  for (let p = 0; p < tokens.length; p++) {
    const token = tokens[p];
    const res = game.move(token, { sloppy: true });
    if (!res) {
      throw new Error(`[${raw.id}] Illegal move '${token}' at ply ${p} in line: ${raw.pgn}`);
    }
    fens.push(game.fen());
  }

  const plyCount = tokens.length;
  if (plyCount < 16) {
    throw new Error(`[${raw.id}] Ply count too short: ${plyCount} (< 16)`);
  }
  if (game.turn() !== 'w') {
    throw new Error(`[${raw.id}] Does not end on Black's move: turn=${game.turn()} (expected 'w' after Black's move)`);
  }

  // Preview FEN at move 4 (ply 8) or ply 6
  const previewPly = Math.min(8, plyCount - 1);
  const previewFEN = fens[previewPly - 1] || game.fen();

  // Validate or build annotations
  const annotations = {};
  for (let i = 0; i < plyCount; i++) {
    const isWhite = i % 2 === 0;
    const moveNum = Math.floor(i / 2) + 1;
    const notation = isWhite ? `${moveNum}. ${tokens[i]}` : `${moveNum}... ${tokens[i]}`;
    if (raw.annotations && raw.annotations[i]) {
      annotations[i] = raw.annotations[i];
    } else {
      annotations[i] = `${notation} — ${isWhite ? 'White pushes forward aggressively.' : 'Black strikes back decisively with tactical counterplay.'}`;
    }
  }

  return {
    id: raw.id,
    courseId: raw.courseId,
    subCourseId: raw.subCourseId,
    name: raw.name,
    shortName: raw.shortName,
    category: raw.category,
    side: 'black',
    eco: raw.eco || tokens.slice(0, 8).join(' '),
    pgn: raw.pgn,
    fullAnnotation: raw.fullAnnotation,
    previewFEN,
    annotations
  };
}

export { buildLine, buildBlackLine };
