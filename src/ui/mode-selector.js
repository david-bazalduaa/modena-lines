/* ============================================================
   CHESSREPS TRAINING DECK MODES WIDGET & PROGRESSION RULES
   ============================================================ */

export function renderModeDeck(containerId, course, userProgress, onSelectMode) {
  const $container = $(`#${containerId}`);
  if (!$container.length) return;

  $container.empty();

  let learnedCount = 0;
  const totalCount = course ? course.lines.length : 0;

  if (course && course.lines) {
    course.lines.forEach(line => {
      const st = userProgress.getLineStat(line.id);
      if (st.completed) learnedCount++;
    });
  }

  const isDrillUnlocked = learnedCount >= 1;
  const isArenaUnlocked = totalCount > 0 && learnedCount === totalCount;

  const modes = [
    {
      id: 'learn',
      title: 'Learn',
      icon: '📖',
      desc: 'Discover new lines',
      cssClass: 'learn-mode',
      unlocked: true,
      badge: 'Active'
    },
    {
      id: 'practice',
      title: 'Practice',
      icon: '🎯',
      desc: 'Perfect learned lines',
      cssClass: 'practice-mode',
      unlocked: true,
      badge: `${learnedCount}/${totalCount}`
    },
    {
      id: 'drill',
      title: 'Drill',
      icon: '🔥',
      desc: 'Blind streak test',
      cssClass: 'drill-mode',
      unlocked: isDrillUnlocked,
      badge: isDrillUnlocked ? 'Unlocked' : '🔒 Learn 1 line'
    },
    {
      id: 'arena',
      title: 'Arena',
      icon: '⚔️',
      desc: 'Master survival',
      cssClass: 'arena-mode',
      unlocked: isArenaUnlocked,
      badge: isArenaUnlocked ? 'Unlocked' : '🔒 Need 100%'
    }
  ];

  let html = '<div class="training-deck-widget">';
  modes.forEach(mode => {
    const lockClass = mode.unlocked ? '' : 'locked-mode';
    html += `
      <div class="mode-deck-card ${mode.cssClass} ${lockClass}" data-mode-id="${mode.id}" data-unlocked="${mode.unlocked}">
        <span class="mode-icon">${mode.icon}</span>
        <span class="mode-title">${mode.title}</span>
        <span class="mode-desc">${mode.desc}</span>
        <span class="coach-badge" style="font-size: 0.62rem; margin-top: 0.2rem;">${mode.badge}</span>
      </div>
    `;
  });
  html += '</div>';

  $container.html(html);

  $container.find('.mode-deck-card').on('click', function () {
    const unlocked = $(this).data('unlocked');
    const modeId = $(this).data('mode-id');

    if (!unlocked) {
      if (modeId === 'drill') {
        alert('🔒 Drill Mode unlocks as soon as you complete at least 1 line in Learn Mode!');
      } else if (modeId === 'arena') {
        alert('🔒 Arena Mode unlocks when you complete 100% of all lines in this course!');
      }
      return;
    }

    $container.find('.mode-deck-card').removeClass('active');
    $(this).addClass('active');

    if (onSelectMode) {
      onSelectMode(modeId);
    }
  });
}
