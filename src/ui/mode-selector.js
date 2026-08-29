/* ============================================================
   CHESSREPS TRAINING DECK MODES WIDGET & PROGRESSION RULES
   ============================================================ */

export function renderModeDeck(containerId, course, userProgress, onSelectMode, activeModeId = 'learn', isPopover = false) {
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
      icon: '📘',
      desc: 'Discover new lines',
      cssClass: 'learn-mode',
      unlocked: true,
      defaultBadge: defaultBadges.learn
    },
    {
      id: 'practice',
      title: 'Practice',
      icon: '🎯',
      desc: 'Perfect learned lines',
      cssClass: 'practice-mode',
      unlocked: true,
      defaultBadge: defaultBadges.practice
    },
    {
      id: 'drill',
      title: 'Drill',
      icon: '🔥',
      desc: 'Blind streak test',
      cssClass: 'drill-mode',
      unlocked: isDrillUnlocked,
      defaultBadge: defaultBadges.drill
    },
    {
      id: 'arena',
      title: 'Arena',
      icon: '⚔️',
      desc: 'Master survival',
      cssClass: 'arena-mode',
      unlocked: isArenaUnlocked,
      defaultBadge: defaultBadges.arena
    }
  ];

  const widgetClass = isPopover ? 'training-deck-widget popover-vertical-deck' : 'training-deck-widget';
  let html = `<div class="${widgetClass}">`;
  modes.forEach(mode => {
    const lockClass = mode.unlocked ? '' : 'locked-mode';
    const isActive = mode.id === activeModeId;
    const activeClass = isActive ? 'active' : '';
    const badgeText = isActive ? 'Active' : mode.defaultBadge;

    if (isPopover) {
      html += `
        <div class="mode-popover-item ${mode.cssClass} ${lockClass} ${activeClass}" data-mode-id="${mode.id}" data-unlocked="${mode.unlocked}" role="button" tabindex="0">
          <div class="popover-item-left">
            <span class="popover-mode-icon">${mode.icon}</span>
            <div class="popover-mode-info">
              <div class="popover-mode-title-row">
                <span class="popover-mode-title">${mode.title}</span>
                ${isActive ? '<span class="popover-active-indicator">Active</span>' : ''}
              </div>
              <span class="popover-mode-desc">${mode.desc}</span>
            </div>
          </div>
          <div class="popover-item-right">
            ${mode.unlocked 
              ? `<span class="coach-badge ${isActive ? 'active' : ''}">${badgeText}</span>`
              : `<span class="locked-badge"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>${mode.defaultBadge}</span>`
            }
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="mode-deck-card ${mode.cssClass} ${lockClass} ${activeClass}" data-mode-id="${mode.id}" data-unlocked="${mode.unlocked}" data-default-badge="${mode.defaultBadge}">
          <span class="mode-icon">${mode.icon}</span>
          <span class="mode-title">${mode.title}</span>
          <span class="mode-desc">${mode.desc}</span>
          <span class="coach-badge" style="font-size: 0.62rem; margin-top: 0.2rem;">${badgeText}</span>
        </div>
      `;
    }
  });
  html += '</div>';

  $container.html(html);

  const itemSelector = isPopover ? '.mode-popover-item' : '.mode-deck-card';
  $container.find(itemSelector).off('click').on('click', function () {
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

    if (onSelectMode) {
      onSelectMode(modeId);
    }
  });
}

