/* ============================================================
   CHESSREPS TRAINING DECK MODES WIDGET & PROGRESSION RULES
   ============================================================ */

export function renderModeDeck(containerId, course, userProgress, onSelectMode, activeModeId = 'learn') {
  const $container = $(`#${containerId}`);
  if (!$container.length) return;

  $container.empty();

  let learnedCount = 0;
  const totalCount = course ? course.lines.length : 0;

  if (course && course.lines) {
    course.lines.forEach(line => {
      if (typeof userProgress.isLineCompleted === 'function' ? userProgress.isLineCompleted(line) : userProgress.getLineStat(line.id).completed) {
        learnedCount++;
      }
    });
  }

  const isDrillUnlocked = learnedCount >= 1;
  const isArenaUnlocked = totalCount > 0 && learnedCount === totalCount;

  const defaultBadges = {
    learn: 'Discovered',
    practice: `${learnedCount}/${totalCount}`,
    drill: isDrillUnlocked ? 'Unlocked' : 'Learn 1 line',
    arena: isArenaUnlocked ? 'Unlocked' : 'Need 100%'
  };

  const modes = [
    {
      id: 'learn',
      title: 'Learn',
      icon: 'L',
      desc: 'Discover new lines',
      cssClass: 'learn-mode',
      unlocked: true,
      defaultBadge: defaultBadges.learn
    },
    {
      id: 'practice',
      title: 'Practice',
      icon: 'P',
      desc: 'Perfect learned lines',
      cssClass: 'practice-mode',
      unlocked: true,
      defaultBadge: defaultBadges.practice
    },
    {
      id: 'drill',
      title: 'Drill',
      icon: 'D',
      desc: 'Blind streak test',
      cssClass: 'drill-mode',
      unlocked: isDrillUnlocked,
      defaultBadge: defaultBadges.drill
    },
    {
      id: 'arena',
      title: 'Arena',
      icon: 'A',
      desc: 'Master survival',
      cssClass: 'arena-mode',
      unlocked: isArenaUnlocked,
      defaultBadge: defaultBadges.arena
    }
  ];

  let html = '<div class="training-deck-widget">';
  modes.forEach(mode => {
    const lockClass = mode.unlocked ? '' : 'locked-mode';
    const isActive = mode.id === activeModeId;
    const activeClass = isActive ? 'active' : '';
    const badgeText = isActive ? 'Active' : mode.defaultBadge;

    html += `
      <div class="mode-deck-card ${mode.cssClass} ${lockClass} ${activeClass}" data-mode-id="${mode.id}" data-unlocked="${mode.unlocked}" data-default-badge="${mode.defaultBadge}">
        <span class="mode-icon">${mode.icon}</span>
        <span class="mode-title">${mode.title}</span>
        <span class="mode-desc">${mode.desc}</span>
        <span class="coach-badge" style="font-size: 0.62rem; margin-top: 0.2rem;">${badgeText}</span>
      </div>
    `;
  });
  html += '</div>';

  $container.html(html);

  $container.find('.mode-deck-card').off('click').on('click', function () {
    const unlocked = $(this).data('unlocked');
    const modeId = $(this).data('mode-id');

    if (!unlocked) {
      if (modeId === 'drill') {
        alert('Drill Mode unlocks as soon as you complete at least 1 line in Learn Mode!');
      } else if (modeId === 'arena') {
        alert('Arena Mode unlocks when you complete 100% of all lines in this course!');
      }
      return;
    }

    // 1. Remove active state styling from all mode cards and restore default status badges
    $container.find('.mode-deck-card').each(function () {
      $(this).removeClass('active');
      $(this).removeAttr('style');
      $(this).find('*').removeAttr('style');
      const defBadge = $(this).attr('data-default-badge');
      if (defBadge) {
        $(this).find('.coach-badge').text(defBadge);
      }
    });

    // 2. Apply active state styling and update status badge explicitly to "Active"
    $(this).addClass('active');
    $(this).find('.coach-badge').text('Active');

    if (onSelectMode) {
      onSelectMode(modeId);
    }
  });
}
