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
      iconSvg: `<svg class="mode-icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
      desc: 'Discover new lines',
      cssClass: 'learn-mode',
      unlocked: true,
      defaultBadge: defaultBadges.learn
    },
    {
      id: 'practice',
      title: 'Practice',
      iconSvg: `<svg class="mode-icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
      desc: 'Perfect learned lines',
      cssClass: 'practice-mode',
      unlocked: true,
      defaultBadge: defaultBadges.practice
    },
    {
      id: 'drill',
      title: 'Drill',
      iconSvg: `<svg class="mode-icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
      desc: 'Blind streak test',
      cssClass: 'drill-mode',
      unlocked: isDrillUnlocked,
      defaultBadge: defaultBadges.drill
    },
    {
      id: 'arena',
      title: 'Arena',
      iconSvg: `<svg class="mode-icon-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="9.5" y1="9" x2="14.5" y2="14"></line><line x1="14.5" y1="9" x2="9.5" y2="14"></line></svg>`,
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
            <span class="popover-mode-icon">${mode.iconSvg}</span>
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
          <span class="mode-icon">${mode.iconSvg}</span>
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

