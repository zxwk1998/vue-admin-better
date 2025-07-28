(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["3906"], {
12764: (function (module, __unused_webpack_exports, __webpack_require__) {
var map = {
  "./colorfulIcon.js": "18158",
  "./goodsList.js": "59097",
  "./icon.js": "60009",
  "./menuManagement.js": "6889",
  "./personalCenter.js": "4069",
  "./roleManagement.js": "85654",
  "./router.js": "12597",
  "./table.js": "4598",
  "./tree.js": "4812",
  "./user.js": "21361",
  "./userManagement.js": "1838"
};


function webpackContext(req) {
  var id = webpackContextResolve(req);
  return __webpack_require__(id);
}
function webpackContextResolve(req) {
  if(!__webpack_require__.o(map, req)) {
    var e = new Error("Cannot find module '" + req + "'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
  }
  return map[req];
}
webpackContext.keys = function webpackContextKeys() {
  return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 12764;


}),
18158: (function (module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__(46846);
__webpack_require__(25885);
const data = ['alphabetical_sorting', 'alphabetical_sorting', 'alarm_clock', 'area_chart', 'approval', 'answers', 'approve', 'assistant', 'automotive', 'automatic', 'bad_decision', 'bar_chart', 'bearish', 'biomass', 'biohazard', 'binoculars', 'bookmark', 'briefcase', 'biotech', 'broken_link', 'business', 'bullish', 'business_contact', 'businesswoman', 'cable_release', 'calculator', 'businessman', 'calendar', 'butting_in', 'call_transfer', 'callback', 'camcorder', 'camera', 'camcorder_pro', 'cancel', 'camera_addon', 'camera_identificatio', 'capacitor', 'candle_sticks', 'checkmark', 'circuit', 'charge_battery', 'clear_filters', 'clapperboard', 'clock', 'close_up_mode', 'collaboration', 'cell_phone', 'collapse', 'collect', 'cloth', 'combo_chart', 'comments', 'conference_call', 'compact_camera', 'contacts', 'copyleft', 'copyright', 'crystal_oscillator', 'cursor', 'currency_exchange', 'customer_support', 'dam', 'data_backup', 'data_configuration', 'data_encryption', 'data_protection', 'data_recovery', 'database', 'data_sheet', 'debt', 'decision', 'delete_column', 'delete_database', 'department', 'delete_row', 'deployment', 'dislike', 'disapprove', 'disclaimer', 'display', 'document', 'do_not_insert', 'do_not_mix', 'do_not_inhale', 'donate', 'down', 'doughnut_chart', 'down_left', 'down_right', 'download', 'edit_image', 'electrical_sensor', 'electrical_threshold', 'electricity', 'electro_devices', 'electronics', 'empty_battery', 'empty_filter', 'empty_trash', 'end_call', 'engineering', 'entering_heaven_aliv', 'expand', 'export', 'expired', 'factory', 'factory_breakdown', 'external', 'faq', 'feed_in', 'file', 'feedback', 'film', 'filled_filter', 'filing_cabinet', 'film_reel', 'flash_auto', 'fine_print', 'flash_off', 'flash_on', 'flow_chart', 'folder', 'frame', 'full_battery', 'full_trash', 'gallery', 'generic_sorting_asc', 'generic_sorting_desc', 'genealogy', 'globe', 'good_decision', 'headset', 'grid', 'graduation_cap', 'heat_map', 'high_priority', 'high_battery', 'image_file', 'home', 'idea', 'import', 'in_transit', 'integrated_webcam', 'inspection', 'invite', 'internal', 'ipad', 'info', 'iphone', 'kindle', 'key', 'landscape', 'left', 'left_down', 'left_up', 'leave', 'like_placeholder', 'light_at_the_end_of_', 'library', 'line_chart', 'link', 'like', 'lock', 'list', 'lock_landscape', 'low_battery', 'lock_portrait', 'low_priority', 'make_decision', 'medium_priority', 'manager', 'menu', 'middle_battery', 'minus', 'missed_call', 'mind_map', 'mms', 'multiple_cameras', 'money_transfer', 'music', 'multiple_devices', 'multiple_smartphones', 'multiple_inputs', 'negative_dynamic', 'neutral_decision', 'night_landscape', 'news', 'neutral_trading', 'night_portrait', 'no_idea', 'next', 'no_video', 'nook', 'ok', 'org_unit', 'opened_folder', 'old_time_camera', 'online_support', 'organization', 'package', 'paid', 'parallel_tasks', 'overtime', 'panorama', 'phone', 'phone_android', 'photo_reel', 'pie_chart', 'picture', 'planner', 'plus', 'podium_with_audience', 'podium_without_speak', 'podium_with_speaker', 'previous', 'portrait_mode', 'positive_dynamic', 'privacy', 'process', 'puzzle', 'questions', 'print', 'radar_plot', 'rating', 'ratings', 'reading', 'redo', 'reading_ebook', 'refresh', 'registered_trademark', 'right', 'reuse', 'remove_image', 'right_down', 'right_up', 'rotate_to_portrait', 'rules', 'rotate_camera', 'rotate_to_landscape', 'ruler', 'scatter_plot', 'search', 'safe', 'self_service_kiosk', 'selfie', 'serial_tasks', 'sales_performance', 'settings', 'services', 'share', 'shipped', 'sim_card', 'shop', 'service_mark', 'sim_card_chip', 'signature', 'smartphone_tablet', 'sound_recording_copy', 'sms', 'speaker', 'slr_back_side', 'start', 'stack_of_photos', 'statistics', 'sports_mode', 'support', 'synchronize', 'switch_camera', 'survey', 'tablet_android', 'template', 'trademark', 'todo_list', 'touchscreen_smartpho', 'timeline', 'tree_structure', 'undo', 'up_left', 'two_smartphones', 'unlock', 'up', 'up_right', 'upload', 'video_call', 'video_file', 'view_details', 'video_projector', 'vip', 'voice_presentation', 'webcam', 'voicemail', 'workflow', 'about', 'accept_database', 'add_image', 'add_column', 'add_database', 'add_row'];
module.exports = [{
  url: '/colorfulIcon/getList',
  type: 'post',
  response(config) {
    const {
      title,
      pageNo = 1,
      pageSize = 72
    } = config.body;
    let mockList = data.filter(item => {
      if (title && item.indexOf(title) < 0) return false;
      return true;
    });
    const pageList = mockList.filter((item, index) => index < pageSize * pageNo && index >= pageSize * (pageNo - 1));
    return {
      code: 200,
      msg: 'success',
      totalCount: mockList.length,
      data: pageList
    };
  }
}];

}),
59097: (function (module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__(45088);
__webpack_require__(46846);
__webpack_require__(25885);
const {
  mock
} = __webpack_require__(90674);
const List = [];
const count = 999;
let num = 0;
for (let i = 0; i < count; i++) {
  List.push(mock({
    uuid: '@uuid',
    image: `https://picsum.photos/300/600?random=${num++}`,
    title: '@ctitle',
    description: '@csentence',
    link: 'https://www.baidu.com',
    price: '@integer(100, 500)',
    'status|1': [1, 0],
    'isRecommend|1': [1, 0]
  }));
}
module.exports = [{
  url: '/goodsList/getList',
  type: 'post',
  response(config) {
    const {
      title = '',
      pageNo = 1,
      pageSize = 20
    } = config.body;
    let mockList = List.filter(item => {
      if (title && item.title.indexOf(title) < 0) return false;
      return true;
    });
    const pageList = mockList.filter((item, index) => index < pageSize * pageNo && index >= pageSize * (pageNo - 1));
    return {
      code: 200,
      msg: 'success',
      totalCount: count,
      data: pageList
    };
  }
}];

}),
60009: (function (module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__(46846);
__webpack_require__(25885);
const data = ['air-freshener', 'align-center', 'align-justify', 'align-left', 'align-right', 'allergies', 'ambulance', 'american-sign-language-interpreting', 'anchor', 'angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'angry', 'ankh', 'apple-alt', 'archive', 'archway', 'arrow-alt-circle-down', 'arrow-alt-circle-left', 'arrow-alt-circle-right', 'arrow-alt-circle-up', 'arrow-circle-down', 'arrow-circle-left', 'arrow-circle-right', 'arrow-circle-up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'arrows-alt-h', 'arrows-alt-v', 'assistive-listening-systems', 'asterisk', 'at', 'atlas', 'atom', 'audio-description', 'award', 'baby', 'baby-carriage', 'backspace', 'backward', 'bacon', 'bahai', 'balance-scale', 'balance-scale-left', 'balance-scale-right', 'ban', 'band-aid', 'barcode', 'bars', 'baseball-ball', 'basketball-ball', 'bath', 'battery-empty', 'battery-full', 'battery-half', 'battery-quarter', 'battery-three-quarters', 'bed', 'beer', 'bell', 'bell-slash', 'bezier-curve', 'bible', 'bicycle', 'biking', 'binoculars', 'biohazard', 'birthday-cake', 'blender', 'blender-phone', 'blind', 'blog', 'bold', 'bolt', 'bomb', 'bone', 'bong', 'book', 'book-dead', 'book-medical', 'book-open', 'book-reader', 'bookmark', 'border-all', 'border-none', 'border-style', 'bowling-ball', 'box', 'box-open', 'boxes', 'braille', 'brain', 'bread-slice', 'briefcase', 'briefcase-medical', 'broadcast-tower', 'broom', 'brush', 'bug', 'building', 'bullhorn', 'bullseye', 'burn', 'bus', 'bus-alt', 'business-time', 'calculator', 'calendar', 'calendar-alt', 'calendar-check', 'calendar-day', 'calendar-minus', 'calendar-plus', 'calendar-times', 'calendar-week', 'camera', 'camera-retro', 'campground', 'candy-cane', 'cannabis', 'capsules', 'car', 'car-alt', 'car-battery', 'car-crash', 'car-side', 'caravan', 'caret-down', 'caret-left', 'caret-right', 'caret-square-down', 'caret-square-left', 'caret-square-right', 'caret-square-up', 'caret-up', 'carrot', 'cart-arrow-down', 'cart-plus', 'cash-register', 'cat', 'certificate', 'chair', 'chalkboard', 'chalkboard-teacher', 'charging-station', 'chart-area', 'chart-bar', 'chart-line', 'chart-pie', 'check', 'check-circle', 'check-double', 'check-square', 'cheese', 'chess', 'chess-bishop', 'chess-board', 'chess-king', 'chess-knight', 'chess-pawn', 'chess-queen', 'chess-rook', 'chevron-circle-down', 'chevron-circle-left', 'chevron-circle-right', 'chevron-circle-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'child', 'church', 'circle', 'circle-notch', 'city', 'clinic-medical', 'clipboard', 'clipboard-check', 'clipboard-list', 'clock', 'clone', 'closed-captioning', 'cloud', 'cloud-download-alt', 'cloud-meatball', 'cloud-moon', 'cloud-moon-rain', 'cloud-rain', 'cloud-showers-heavy', 'cloud-sun', 'cloud-sun-rain', 'cloud-upload-alt', 'cocktail', 'code', 'code-branch', 'coffee', 'cog', 'cogs', 'coins', 'columns', 'comment', 'comment-alt', 'comment-dollar', 'comment-dots', 'comment-medical', 'comment-slash', 'comments', 'comments-dollar', 'compact-disc', 'compass', 'compress', 'compress-alt', 'compress-arrows-alt', 'concierge-bell', 'cookie', 'cookie-bite', 'copy', 'copyright', 'couch', 'credit-card', 'crop', 'crop-alt', 'cross', 'crosshairs', 'crow', 'crown', 'crutch', 'cube', 'cubes', 'cut', 'database', 'deaf', 'democrat', 'desktop', 'dharmachakra', 'diagnoses', 'dice', 'dice-d20', 'dice-d6', 'dice-five', 'dice-four', 'dice-one', 'dice-six', 'dice-three', 'dice-two', 'digital-tachograph', 'directions', 'divide', 'dizzy', 'dna', 'dog', 'dollar-sign', 'dolly', 'dolly-flatbed', 'donate', 'door-closed', 'door-open', 'dot-circle', 'dove', 'download', 'drafting-compass', 'dragon', 'draw-polygon', 'drum', 'drum-steelpan', 'drumstick-bite', 'dumbbell', 'dumpster', 'dumpster-fire', 'dungeon', 'edit', 'egg', 'eject', 'ellipsis-h', 'ellipsis-v', 'envelope', 'envelope-open', 'envelope-open-text', 'envelope-square', 'equals', 'eraser', 'ethernet', 'euro-sign', 'exchange-alt', 'exclamation', 'exclamation-circle', 'exclamation-triangle', 'expand', 'expand-alt', 'expand-arrows-alt', 'external-link-alt', 'external-link-square-alt', 'eye', 'eye-dropper', 'eye-slash', 'fan', 'fast-backward', 'fast-forward', 'fax', 'feather', 'feather-alt', 'female', 'fighter-jet', 'file', 'file-alt', 'file-archive', 'file-audio', 'file-code', 'file-contract', 'file-csv', 'file-download', 'file-excel', 'file-export', 'file-image', 'file-import', 'file-invoice', 'file-invoice-dollar', 'file-medical', 'file-medical-alt', 'file-pdf', 'file-powerpoint', 'file-prescription', 'file-signature', 'file-upload', 'file-video', 'file-word', 'fill', 'fill-drip', 'film', 'filter', 'fingerprint', 'fire', 'fire-alt', 'fire-extinguisher', 'first-aid', 'fish', 'fist-raised', 'flag', 'flag-checkered', 'flag-usa', 'flask', 'flushed', 'folder', 'folder-minus', 'folder-open', 'folder-plus', 'font', 'football-ball', 'forward', 'frog', 'frown', 'frown-open', 'funnel-dollar', 'futbol', 'gamepad', 'gas-pump', 'gavel', 'gem', 'genderless', 'ghost', 'gift', 'gifts', 'glass-cheers', 'glass-martini', 'glass-martini-alt', 'glass-whiskey', 'glasses', 'globe', 'globe-africa', 'globe-americas', 'globe-asia', 'globe-europe', 'golf-ball', 'gopuram', 'graduation-cap', 'greater-than', 'greater-than-equal', 'grimace', 'grin', 'grin-alt', 'grin-beam', 'grin-beam-sweat', 'grin-hearts', 'grin-squint', 'grin-squint-tears', 'grin-stars', 'grin-tears', 'grin-tongue', 'grin-tongue-squint', 'grin-tongue-wink', 'grin-wink', 'grip-horizontal', 'grip-lines', 'grip-lines-vertical', 'grip-vertical', 'guitar', 'h-square', 'hamburger', 'hammer', 'hamsa', 'hand-holding', 'hand-holding-heart', 'hand-holding-usd', 'hand-lizard', 'hand-middle-finger', 'hand-paper', 'hand-peace', 'hand-point-down', 'hand-point-left', 'hand-point-right', 'hand-point-up', 'hand-pointer', 'hand-rock', 'hand-scissors', 'hand-spock', 'hands', 'hands-helping', 'handshake', 'hanukiah', 'hard-hat', 'hashtag', 'hat-cowboy', 'hat-cowboy-side', 'hat-wizard', 'hdd', 'heading', 'headphones', 'headphones-alt', 'headset', 'heart', 'heart-broken', 'heartbeat', 'helicopter', 'highlighter', 'hiking', 'hippo', 'history', 'hockey-puck', 'holly-berry', 'home', 'horse', 'horse-head', 'hospital', 'hospital-alt', 'hospital-symbol', 'hot-tub', 'hotdog', 'hotel', 'hourglass', 'hourglass-end', 'hourglass-half', 'hourglass-start', 'house-damage', 'hryvnia', 'i-cursor', 'ice-cream', 'icicles', 'icons', 'id-badge', 'id-card', 'id-card-alt', 'igloo', 'image', 'images', 'inbox', 'indent', 'industry', 'infinity', 'info', 'info-circle', 'italic', 'jedi', 'joint', 'journal-whills', 'kaaba', 'key', 'keyboard', 'khanda', 'kiss', 'kiss-beam', 'kiss-wink-heart', 'kiwi-bird', 'landmark', 'language', 'laptop', 'laptop-code', 'laptop-medical', 'laugh', 'laugh-beam', 'laugh-squint', 'laugh-wink', 'layer-group', 'leaf', 'lemon', 'less-than', 'less-than-equal', 'level-down-alt', 'level-up-alt', 'life-ring', 'lightbulb', 'link', 'lira-sign', 'list', 'list-alt', 'list-ol', 'list-ul', 'location-arrow', 'lock', 'lock-open', 'long-arrow-alt-down', 'long-arrow-alt-left', 'long-arrow-alt-right', 'long-arrow-alt-up', 'low-vision', 'luggage-cart', 'magic', 'magnet', 'mail-bulk', 'male', 'map', 'map-marked', 'map-marked-alt', 'map-marker', 'map-marker-alt', 'map-pin', 'map-signs', 'marker', 'mars', 'mars-double', 'mars-stroke', 'mars-stroke-h', 'mars-stroke-v', 'mask', 'medal', 'medkit', 'meh', 'meh-blank', 'meh-rolling-eyes', 'memory', 'menorah', 'mercury', 'meteor', 'microchip', 'microphone', 'microphone-alt', 'microphone-alt-slash', 'microphone-slash', 'microscope', 'minus', 'minus-circle', 'minus-square', 'mitten', 'mobile', 'mobile-alt', 'money-bill', 'money-bill-alt', 'money-bill-wave', 'money-bill-wave-alt', 'money-check', 'money-check-alt', 'monument', 'moon', 'mortar-pestle', 'mosque', 'motorcycle', 'mountain', 'mouse', 'mouse-pointer', 'mug-hot', 'music', 'network-wired', 'neuter', 'newspaper', 'not-equal', 'notes-medical', 'object-group', 'object-ungroup', 'oil-can', 'om', 'otter', 'outdent', 'pager', 'paint-brush', 'paint-roller', 'palette', 'pallet', 'paper-plane', 'paperclip', 'parachute-box', 'paragraph', 'parking', 'passport', 'pastafarianism', 'paste', 'pause', 'pause-circle', 'paw', 'peace', 'pen', 'pen-alt', 'pen-fancy', 'pen-nib', 'pen-square', 'pencil-alt', 'pencil-ruler', 'people-carry', 'pepper-hot', 'percent', 'percentage', 'person-booth', 'phone', 'phone-alt', 'phone-slash', 'phone-square', 'phone-square-alt', 'phone-volume', 'photo-video', 'piggy-bank', 'pills', 'pizza-slice', 'place-of-worship', 'plane', 'plane-arrival', 'plane-departure', 'play', 'play-circle', 'plug', 'plus', 'plus-circle', 'plus-square', 'podcast', 'poll', 'poll-h', 'poo', 'poo-storm', 'poop', 'portrait', 'pound-sign', 'power-off', 'pray', 'praying-hands', 'prescription', 'prescription-bottle', 'prescription-bottle-alt', 'print', 'procedures', 'project-diagram', 'puzzle-piece', 'qrcode', 'question', 'question-circle', 'quidditch', 'quote-left', 'quote-right', 'quran', 'radiation', 'radiation-alt', 'rainbow', 'random', 'receipt', 'record-vinyl', 'recycle', 'redo', 'redo-alt', 'registered', 'remove-format', 'reply', 'reply-all', 'republican', 'restroom', 'retweet', 'ribbon', 'ring', 'road', 'robot', 'rocket', 'route', 'rss', 'rss-square', 'ruble-sign', 'ruler', 'ruler-combined', 'ruler-horizontal', 'ruler-vertical', 'running', 'rupee-sign', 'sad-cry', 'sad-tear', 'satellite', 'satellite-dish', 'save', 'school', 'screwdriver', 'scroll', 'sd-card', 'search', 'search-dollar', 'search-location', 'search-minus', 'search-plus', 'seedling', 'server', 'shapes', 'share', 'share-alt', 'share-alt-square', 'share-square', 'shekel-sign', 'shield-alt', 'ship', 'shipping-fast', 'shoe-prints', 'shopping-bag', 'shopping-basket', 'shopping-cart', 'shower', 'shuttle-van', 'sign', 'sign-in-alt', 'sign-language', 'sign-out-alt', 'signal', 'signature', 'sim-card', 'sitemap', 'skating', 'skiing', 'skiing-nordic', 'skull', 'skull-crossbones', 'slash', 'sleigh', 'sliders-h', 'smile', 'smile-beam', 'smile-wink', 'smog', 'smoking', 'smoking-ban', 'sms', 'snowboarding', 'snowflake', 'snowman', 'snowplow', 'socks', 'solar-panel', 'sort', 'sort-alpha-down', 'sort-alpha-down-alt', 'sort-alpha-up', 'sort-alpha-up-alt', 'sort-amount-down', 'sort-amount-down-alt', 'sort-amount-up', 'sort-amount-up-alt', 'sort-down', 'sort-numeric-down', 'sort-numeric-down-alt', 'sort-numeric-up', 'sort-numeric-up-alt', 'sort-up', 'spa', 'space-shuttle', 'spell-check', 'spider', 'spinner', 'splotch', 'spray-can', 'square', 'square-full', 'square-root-alt', 'stamp', 'star', 'star-and-crescent', 'star-half', 'star-half-alt', 'star-of-david', 'star-of-life', 'step-backward', 'step-forward', 'stethoscope', 'sticky-note', 'stop', 'stop-circle', 'stopwatch', 'store', 'store-alt', 'stream', 'street-view', 'strikethrough', 'stroopwafel', 'subscript', 'subway', 'suitcase', 'suitcase-rolling', 'sun', 'superscript', 'surprise', 'swatchbook', 'swimmer', 'swimming-pool', 'synagogue', 'sync', 'sync-alt', 'syringe', 'table', 'table-tennis', 'tablet', 'tablet-alt', 'tablets', 'tachometer-alt', 'tag', 'tags', 'tape', 'tasks', 'taxi', 'teeth', 'teeth-open', 'temperature-high', 'temperature-low', 'tenge', 'terminal', 'text-height', 'text-width', 'th', 'th-large', 'th-list', 'theater-masks', 'thermometer', 'thermometer-empty', 'thermometer-full', 'thermometer-half', 'thermometer-quarter', 'thermometer-three-quarters', 'thumbs-down', 'thumbs-up', 'thumbtack', 'ticket-alt', 'times', 'times-circle', 'tint', 'tint-slash', 'tired', 'toggle-off', 'toggle-on', 'toilet', 'toilet-paper', 'toolbox', 'tools', 'tooth', 'torah', 'torii-gate', 'tractor', 'trademark', 'traffic-light', 'trailer', 'train', 'tram', 'transgender', 'transgender-alt', 'trash', 'trash-alt', 'trash-restore', 'trash-restore-alt', 'tree', 'trophy', 'truck', 'truck-loading', 'truck-monster', 'truck-moving', 'truck-pickup', 'tshirt', 'tty', 'tv', 'umbrella', 'umbrella-beach', 'underline', 'undo', 'undo-alt', 'universal-access', 'university', 'unlink', 'unlock', 'unlock-alt', 'upload', 'user', 'user-alt', 'user-alt-slash', 'user-astronaut', 'user-check', 'user-circle', 'user-clock', 'user-cog', 'user-edit', 'user-friends', 'user-graduate', 'user-injured', 'user-lock', 'user-md', 'user-minus', 'user-ninja', 'user-nurse', 'user-plus', 'user-secret', 'user-shield', 'user-slash', 'user-tag', 'user-tie', 'user-times', 'users', 'users-cog', 'utensil-spoon', 'utensils', 'vector-square', 'venus', 'venus-double', 'venus-mars', 'vial', 'vials', 'video', 'video-slash', 'vihara', 'voicemail', 'volleyball-ball', 'volume-down', 'volume-mute', 'volume-off', 'volume-up', 'vote-yea', 'vr-cardboard', 'walking', 'wallet', 'warehouse', 'water', 'wave-square', 'weight', 'weight-hanging', 'wheelchair', 'wifi', 'wind', 'window-close', 'window-maximize', 'window-minimize', 'window-restore', 'wine-bottle', 'wine-glass', 'wine-glass-alt', 'won-sign', 'wrench', 'x-ray', 'yen-sign', 'yin-yang'];
module.exports = [{
  url: '/icon/getList',
  type: 'post',
  response(config) {
    const {
      title,
      pageNo = 1,
      pageSize = 72
    } = config.body;
    let mockList = data.filter(item => {
      if (title && item.indexOf(title) < 0) return false;
      return true;
    });
    const pageList = mockList.filter((item, index) => index < pageSize * pageNo && index >= pageSize * (pageNo - 1));
    return {
      code: 200,
      msg: 'success',
      totalCount: mockList.length,
      data: pageList
    };
  }
}];

}),
6889: (function (module) {
module.exports = [{
  url: '/menuManagement/getTree',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: 'success',
      totalCount: 999,
      data: [{
        id: 'root',
        label: '全部角色',
        children: [{
          id: '@id',
          permission: 'admin',
          label: 'admin角色'
        }, {
          id: '@id',
          permission: 'editor',
          label: 'editor角色'
        }]
      }]
    };
  }
}, {
  url: '/menuManagement/doEdit',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟保存成功'
    };
  }
}, {
  url: '/menuManagement/doDelete',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟删除成功'
    };
  }
}];

}),
4069: (function (module, __unused_webpack_exports, __webpack_require__) {
const {
  mock
} = __webpack_require__(90674);
module.exports = [{
  url: '/personalCenter/getList',
  type: 'post',
  response(config) {
    return {
      code: 200,
      msg: 'success',
      totalCount: 999,
      data: mock({
        'data|10': [{
          id: '@id'
        }]
      }).data
    };
  }
}, {
  url: '/personalCenter/doEdit',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟保存成功'
    };
  }
}, {
  url: '/personalCenter/doDelete',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟删除成功'
    };
  }
}];

}),
85654: (function (module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__(46846);
__webpack_require__(25885);
const totalCount = 2;
const List = [{
  id: '@id',
  permission: 'admin'
}, {
  id: '@id',
  permission: 'editor'
}];
module.exports = [{
  url: '/roleManagement/getList',
  type: 'post',
  response(config) {
    const {
      title = '',
      pageNo = 1,
      pageSize = 20
    } = config.body;
    let mockList = List.filter(item => {
      return !(title && item.title.indexOf(title) < 0);
    });
    const pageList = mockList.filter((item, index) => index < pageSize * pageNo && index >= pageSize * (pageNo - 1));
    return {
      code: 200,
      msg: 'success',
      totalCount,
      data: pageList
    };
  }
}, {
  url: '/roleManagement/doEdit',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟保存成功'
    };
  }
}, {
  url: '/roleManagement/doDelete',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟删除成功'
    };
  }
}];

}),
12597: (function (module) {
const data = [{
  path: '/',
  component: 'Layout',
  redirect: 'index',
  children: [{
    path: 'index',
    name: 'Index',
    component: '@/views/index/index',
    meta: {
      title: '首页',
      icon: 'home',
      affix: true
    }
  }]
}, {
  path: '/personnelManagement',
  component: 'Layout',
  redirect: 'noRedirect',
  name: 'PersonnelManagement',
  meta: {
    title: '人员',
    icon: 'users-cog',
    permissions: ['admin']
  },
  children: [{
    path: 'userManagement',
    name: 'UserManagement',
    component: '@/views/personnelManagement/userManagement/index',
    meta: {
      title: '用户管理'
    }
  }, {
    path: 'roleManagement',
    name: 'RoleManagement',
    component: '@/views/personnelManagement/roleManagement/index',
    meta: {
      title: '角色管理'
    }
  }, {
    path: 'menuManagement',
    name: 'MenuManagement',
    component: '@/views/personnelManagement/menuManagement/index',
    meta: {
      title: '菜单管理',
      badge: 'New'
    }
  }]
}, {
  path: '/vab',
  component: 'Layout',
  redirect: 'noRedirect',
  name: 'Vab',
  alwaysShow: true,
  meta: {
    title: '组件',
    icon: 'cloud'
  },
  children: [{
    path: 'permissions',
    name: 'Permission',
    component: '@/views/vab/permissions/index',
    meta: {
      title: '权限控制',
      permissions: ['admin', 'editor'],
      badge: 'New'
    }
  }, {
    path: 'icon',
    component: 'EmptyLayout',
    redirect: 'noRedirect',
    name: 'Icon',
    meta: {
      title: '图标',
      permissions: ['admin']
    },
    children: [{
      path: 'awesomeIcon',
      name: 'AwesomeIcon',
      component: '@/views/vab/icon/index',
      meta: {
        title: '常规图标'
      }
    }, {
      path: 'colorfulIcon',
      name: 'ColorfulIcon',
      component: '@/views/vab/icon/colorfulIcon',
      meta: {
        title: '多彩图标'
      }
    }]
  }, {
    path: 'table',
    component: '@/views/vab/table/index',
    name: 'Table',
    meta: {
      title: '表格',
      permissions: ['admin']
    }
  }, {
    path: 'webSocket',
    name: 'WebSocket',
    component: '@/views/vab/webSocket/index',
    meta: {
      title: 'webSocket',
      permissions: ['admin']
    }
  }, {
    path: 'form',
    name: 'Form',
    component: '@/views/vab/form/index',
    meta: {
      title: '表单',
      permissions: ['admin']
    }
  }, {
    path: 'element',
    name: 'Element',
    component: '@/views/vab/element/index',
    meta: {
      title: '常用组件',
      permissions: ['admin']
    }
  }, {
    path: 'tree',
    name: 'Tree',
    component: '@/views/vab/tree/index',
    meta: {
      title: '树',
      permissions: ['admin']
    }
  }, {
    path: 'verify',
    name: 'Verify',
    component: '@/views/vab/verify/index',
    meta: {
      title: '验证码',
      permissions: ['admin']
    }
  }, {
    path: 'menu1',
    component: '@/views/vab/nested/menu1/index',
    name: 'Menu1',
    alwaysShow: true,
    meta: {
      title: '嵌套路由 1',
      permissions: ['admin']
    },
    children: [{
      path: 'menu1-1',
      name: 'Menu1-1',
      alwaysShow: true,
      meta: {
        title: '嵌套路由 1-1'
      },
      component: '@/views/vab/nested/menu1/menu1-1/index',
      children: [{
        path: 'menu1-1-1',
        name: 'Menu1-1-1',
        meta: {
          title: '嵌套路由 1-1-1'
        },
        component: '@/views/vab/nested/menu1/menu1-1/menu1-1-1/index'
      }]
    }]
  }, {
    path: 'loading',
    name: 'Loading',
    component: '@/views/vab/loading/index',
    meta: {
      title: 'loading',
      permissions: ['admin']
    }
  }, {
    path: 'backToTop',
    name: 'BackToTop',
    component: '@/views/vab/backToTop/index',
    meta: {
      title: '返回顶部',
      permissions: ['admin']
    }
  }, {
    path: 'lodash',
    name: 'Lodash',
    component: '@/views/vab/lodash/index',
    meta: {
      title: 'lodash',
      permissions: ['admin']
    }
  }, {
    path: 'upload',
    name: 'Upload',
    component: '@/views/vab/upload/index',
    meta: {
      title: '上传',
      permissions: ['admin']
    }
  }, {
    path: 'log',
    name: 'Log',
    component: '@/views/vab/errorLog/index',
    meta: {
      title: '错误日志模拟',
      permissions: ['admin']
    }
  }, {
    path: 'more',
    name: 'More',
    component: '@/views/vab/more/index',
    meta: {
      title: '关于',
      permissions: ['admin']
    }
  }]
}, {
  path: '/mall',
  component: 'Layout',
  redirect: 'noRedirect',
  name: 'Mall',
  meta: {
    title: '商城',
    icon: 'shopping-cart',
    permissions: ['admin']
  },
  children: [{
    path: 'pay',
    name: 'Pay',
    component: '@/views/mall/pay/index',
    meta: {
      title: '支付',
      noKeepAlive: true
    },
    children: null
  }, {
    path: 'goodsList',
    name: 'GoodsList',
    component: '@/views/mall/goodsList/index',
    meta: {
      title: '商品列表'
    }
  }]
}, {
  path: '/error',
  component: 'EmptyLayout',
  redirect: 'noRedirect',
  name: 'Error',
  meta: {
    title: '错误页',
    icon: 'bug'
  },
  children: [{
    path: '401',
    name: 'Error401',
    component: '@/views/401',
    meta: {
      title: '401'
    }
  }, {
    path: '404',
    name: 'Error404',
    component: '@/views/404',
    meta: {
      title: '404'
    }
  }]
}];
module.exports = [{
  url: '/menu/navigate',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: 'success',
      data: data
    };
  }
}];

}),
4598: (function (module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__(45088);
__webpack_require__(46846);
__webpack_require__(25885);
const {
  mock
} = __webpack_require__(90674);
const {
  handleRandomImage
} = __webpack_require__(19581);
const List = [];
const count = 999;
for (let i = 0; i < count; i++) {
  List.push(mock({
    uuid: '@uuid',
    id: '@id',
    title: '@csentence(1, 2)',
    'status|1': ['published', 'draft', 'deleted'],
    author: '@cname',
    datetime: '@datetime',
    pageViews: '@integer(300, 5000)',
    img: handleRandomImage(200, 200),
    smallImg: handleRandomImage(40, 40),
    switch: '@boolean',
    percent: '@integer(80,99)'
  }));
}
module.exports = [{
  url: '/table/getList',
  type: 'post',
  response(config) {
    if (!config.body) {
      return {
        code: 200,
        msg: 'success',
        totalCount: count,
        data: mock({
          'data|50': [{
            id: '@id',
            title: '@csentence(1, 2)',
            'status|1': ['published', 'draft', 'deleted'],
            author: '@cname',
            datetime: '@datetime',
            pageViews: '@integer(300, 5000)',
            img: handleRandomImage(200, 200),
            smallImg: handleRandomImage(40, 40),
            switch: '@boolean',
            percent: '@integer(80,99)'
          }]
        }).data
      };
    }
    const {
      title = '',
      pageNo = 1,
      pageSize = 20
    } = config.body;
    let mockList = List.filter(item => {
      return !(title && item.title.indexOf(title) < 0);
    });
    const pageList = mockList.filter((item, index) => index < pageSize * pageNo && index >= pageSize * (pageNo - 1));
    return {
      code: 200,
      msg: 'success',
      totalCount: count,
      data: pageList
    };
  }
}, {
  url: '/table/doEdit',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟保存成功'
    };
  }
}, {
  url: '/table/doDelete',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟删除成功'
    };
  }
}];

}),
4812: (function (module) {
const data = [{
  id: '1',
  parentId: '0',
  name: 'root',
  title: 'root',
  text: 'root',
  value: '1',
  rank: 1,
  children: [{
    id: '32816b88ff72423f960e7d492a386131',
    parentId: '1',
    name: '一级',
    title: '一级',
    text: '一级',
    value: '32816b88ff72423f960e7d492a386131',
    rank: 2,
    children: [{
      id: '9e11afc35d55475fb0bd3164b9684cbe',
      parentId: '32816b88ff72423f960e7d492a386131',
      name: '二级',
      title: '二级',
      text: '二级',
      value: '9e11afc35d55475fb0bd3164b9684cbe',
      rank: 3,
      children: [{
        id: '4cc1b04635e4444292526c5391699077',
        parentId: '9e11afc35d55475fb0bd3164b9684cbe',
        name: '三级',
        title: '三级',
        text: '三级',
        value: '4cc1b04635e4444292526c5391699077',
        rank: 4,
        children: []
      }]
    }]
  }]
}];
module.exports = [{
  url: '/tree/list',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: 'success',
      data
    };
  }
}];

}),
21361: (function (module) {
const accessTokens = {
  admin: 'admin-accessToken',
  editor: 'editor-accessToken',
  test: 'test-accessToken'
};
module.exports = [{
  url: '/publicKey',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: 'success',
      data: {
        mockServer: true,
        publicKey: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBT2vr+dhZElF73FJ6xiP181txKWUSNLPQQlid6DUJhGAOZblluafIdLmnUyKE8mMHhT3R+Ib3ssZcJku6Hn72yHYj/qPkCGFv0eFo7G+GJfDIUeDyalBN0QsuiE/XzPHJBuJDfRArOiWvH0BXOv5kpeXSXM8yTt5Na1jAYSiQ/wIDAQAB'
      }
    };
  }
}, {
  url: '/login',
  type: 'post',
  response(config) {
    const {
      username
    } = config.body;
    const accessToken = accessTokens[username];
    if (!accessToken) {
      return {
        code: 500,
        msg: '帐户或密码不正确。'
      };
    }
    return {
      code: 200,
      msg: 'success',
      data: {
        accessToken
      }
    };
  }
}, {
  url: '/register',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟注册成功'
    };
  }
}, {
  url: '/userInfo',
  type: 'post',
  response(config) {
    const {
      accessToken
    } = config.body;
    let permissions = ['admin'];
    let username = 'admin';
    if ('admin-accessToken' === accessToken) {
      permissions = ['admin'];
      username = 'admin';
    }
    if ('editor-accessToken' === accessToken) {
      permissions = ['editor'];
      username = 'editor';
    }
    if ('test-accessToken' === accessToken) {
      permissions = ['admin', 'editor'];
      username = 'test';
    }
    return {
      code: 200,
      msg: 'success',
      data: {
        permissions,
        username,
        'avatar|1': ['https://gcore.jsdelivr.net/gh/zxwk1998/image/avatar/avatar_1.png', 'https://gcore.jsdelivr.net/gh/zxwk1998/image/avatar/avatar_2.png', 'https://gcore.jsdelivr.net/gh/zxwk1998/image/avatar/avatar_3.png', 'https://gcore.jsdelivr.net/gh/zxwk1998/image/avatar/avatar_4.png']
      }
    };
  }
}, {
  url: '/logout',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: 'success'
    };
  }
}];

}),
1838: (function (module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__(46846);
__webpack_require__(25885);
const totalCount = 3;
const List = [{
  id: '@id',
  username: 'admin',
  password: 'admin',
  email: '@email',
  permissions: ['admin'],
  datatime: '@datetime'
}, {
  id: '@id',
  username: 'editor',
  password: 'editor',
  email: '@email',
  permissions: ['editor'],
  datatime: '@datetime'
}, {
  id: '@id',
  username: 'test',
  password: 'test',
  email: '@email',
  permissions: ['admin', 'editor'],
  datatime: '@datetime'
}];
module.exports = [{
  url: '/userManagement/getList',
  type: 'post',
  response(config) {
    const {
      title = '',
      pageNo = 1,
      pageSize = 20
    } = config.body;
    let mockList = List.filter(item => {
      if (title && item.title.indexOf(title) < 0) return false;
      return true;
    });
    const pageList = mockList.filter((item, index) => index < pageSize * pageNo && index >= pageSize * (pageNo - 1));
    return {
      code: 200,
      msg: 'success',
      totalCount,
      data: pageList
    };
  }
}, {
  url: '/userManagement/doEdit',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟保存成功'
    };
  }
}, {
  url: '/userManagement/doDelete',
  type: 'post',
  response() {
    return {
      code: 200,
      msg: '模拟删除成功'
    };
  }
}];

}),
19581: (function (module, __unused_webpack_exports, __webpack_require__) {
__webpack_require__(45088);
__webpack_require__(46846);
__webpack_require__(47827);
const {
  Random
} = __webpack_require__(90674);
const {
  join
} = __webpack_require__(62005);
const fs = __webpack_require__(28929);

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 随机生成图片url。
 * @param width
 * @param height
 * @returns {string}
 */
function handleRandomImage(width = 50, height = 50) {
  return `https://picsum.photos/${width}/${height}?random=${Random.guid()}`;
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 处理所有 controller 模块，npm run serve时在node环境中自动输出controller文件夹下Mock接口，请勿修改。
 * @returns {[]}
 */
function handleMockArray() {
  const mockArray = [];
  const getFiles = jsonPath => {
    const jsonFiles = [];
    const findJsonFile = path => {
      const files = fs.readdirSync(path);
      files.forEach(item => {
        const fPath = join(path, item);
        const stat = fs.statSync(fPath);
        if (stat.isDirectory() === true) findJsonFile(item);
        if (stat.isFile() === true) jsonFiles.push(item);
      });
    };
    findJsonFile(jsonPath);
    jsonFiles.forEach(item => mockArray.push(`./controller/${item}`));
  };
  getFiles('mock/controller');
  return mockArray;
}
module.exports = {
  handleRandomImage,
  handleMockArray
};

}),
94621: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  formatTime: function() { return formatTime; },
  off: function() { return off; },
  on: function() { return on; },
  paramObj: function() { return paramObj; },
  parseTime: function() { return parseTime; },
  random: function() { return random; },
  tenBitTimestamp: function() { return tenBitTimestamp; },
  thirteenBitTimestamp: function() { return thirteenBitTimestamp; },
  translateDataToTree: function() { return translateDataToTree; },
  translateTreeToData: function() { return translateTreeToData; },
  uuid: function() { return uuid; }
});
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45088);
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46846);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25885);
/* ESM import */var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47827);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);




/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 格式化时间
 * @param time
 * @param cFormat
 * @returns {string|null}
 */
function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`;
    }
    return value || 0;
  });
  return time_str;
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 格式化时间
 * @param time
 * @param option
 * @returns {string}
 */
function formatTime(time, option) {
  if (`${time}`.length === 10) {
    time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();
  const diff = (now - d) / 1000;
  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return `${Math.ceil(diff / 60)}分钟前`;
  } else if (diff < 3600 * 24) {
    return `${Math.ceil(diff / 3600)}小时前`;
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return `${d.getMonth() + 1}月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分`;
  }
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 将url请求参数转为json格式
 * @param url
 * @returns {{}|any}
 */
function paramObj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(`{"${decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ')}"}`);
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 父子关系的数组转换成树形结构数据
 * @param data
 * @returns {*}
 */
function translateDataToTree(data) {
  const parent = data.filter(value => value.parentId === 'undefined' || value.parentId == null);
  const children = data.filter(value => value.parentId !== 'undefined' && value.parentId != null);
  const translator = (parent, children) => {
    parent.forEach(parent => {
      children.forEach((current, index) => {
        if (current.parentId === parent.id) {
          const temp = JSON.parse(JSON.stringify(children));
          temp.splice(index, 1);
          translator([current], temp);
          typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current];
        }
      });
    });
  };
  translator(parent, children);
  return parent;
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 树形结构数据转换成父子关系的数组
 * @param data
 * @returns {[]}
 */
function translateTreeToData(data) {
  const result = [];
  data.forEach(item => {
    const loop = data => {
      result.push({
        id: data.id,
        name: data.name,
        parentId: data.parentId
      });
      const child = data.children;
      if (child) {
        for (let i = 0; i < child.length; i++) {
          loop(child[i]);
        }
      }
    };
    loop(item);
  });
  return result;
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 10位时间戳转换
 * @param time
 * @returns {string}
 */
function tenBitTimestamp(time) {
  const date = new Date(time * 1000);
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? `${m}` : m;
  let d = date.getDate();
  d = d < 10 ? `${d}` : d;
  let h = date.getHours();
  h = h < 10 ? `0${h}` : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  return `${y}年${m}月${d}日 ${h}:${minute}:${second}`; //组合
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 13位时间戳转换
 * @param time
 * @returns {string}
 */
function thirteenBitTimestamp(time) {
  const date = new Date(time / 1);
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? `${m}` : m;
  let d = date.getDate();
  d = d < 10 ? `${d}` : d;
  let h = date.getHours();
  h = h < 10 ? `0${h}` : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  return `${y}年${m}月${d}日 ${h}:${minute}:${second}`; //组合
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 获取随机id
 * @param length
 * @returns {string}
 */
function uuid(length = 32) {
  const num = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let str = '';
  for (let i = 0; i < length; i++) {
    str += num.charAt(Math.floor(Math.random() * num.length));
  }
  return str;
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description m到n的随机数
 * @param m
 * @param n
 * @returns {number}
 */
function random(m, n) {
  return Math.floor(Math.random() * (m - n) + n);
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description addEventListener
 * @type {function(...[*]=)}
 */
const on = function () {
  return function (element, event, handler, useCapture = false) {
    if (element && event && handler) {
      element.addEventListener(event, handler, useCapture);
    }
  };
}();

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description removeEventListener
 * @type {function(...[*]=)}
 */
const off = function () {
  return function (element, event, handler, useCapture = false) {
    if (element && event) {
      element.removeEventListener(event, handler, useCapture);
    }
  };
}();

}),
67308: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  mockList: function() { return mockList; },
  mockXHR: function() { return mockXHR; }
});
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45088);
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46846);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47827);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var mockjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90674);
/* ESM import */var mockjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94621);



/**
 * @author https://vuejs-core.cn
 * @description 导入所有 controller 模块，浏览器环境中自动输出controller文件夹下Mock接口，请勿修改。
 */


const mocks = [];
// 使用兼容 rspack 的方式导入 mock 控制器
const files = __webpack_require__(12764);
files.keys().forEach(key => {
  mocks.push(...files(key));
});
function mockXHR() {
  // 设置Mock响应延迟
  mockjs__WEBPACK_IMPORTED_MODULE_3___default().setup({
    timeout: '200-600'
  });

  // 保存原始的XHR send方法
  (mockjs__WEBPACK_IMPORTED_MODULE_3___default().XHR.prototype.proxy_send) = (mockjs__WEBPACK_IMPORTED_MODULE_3___default().XHR.prototype.send);
  (mockjs__WEBPACK_IMPORTED_MODULE_3___default().XHR.prototype.send) = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;
      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    this.proxy_send(...arguments);
  };
  function XHRHttpRequst(respond) {
    return function (options) {
      let result;
      try {
        if (respond instanceof Function) {
          const {
            body,
            type,
            url
          } = options;
          // 安全解析body
          let parsedBody = {};
          if (body) {
            try {
              parsedBody = JSON.parse(body);
            } catch (e) {
              console.warn('无法解析请求体:', e);
            }
          }
          result = respond({
            method: type,
            body: parsedBody,
            query: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.paramObj)(url)
          });
        } else {
          result = respond;
        }
      } catch (error) {
        console.error('Mock处理请求时发生错误:', error);
        // 返回默认错误响应
        result = {
          code: 500,
          message: '服务器内部错误'
        };
      }
      return mockjs__WEBPACK_IMPORTED_MODULE_3___default().mock(result);
    };
  }

  // 注册所有的mock服务
  mocks.forEach(item => {
    mockjs__WEBPACK_IMPORTED_MODULE_3___default().mock(new RegExp(item.url), item.type || 'get', XHRHttpRequst(item.response));
  });

  // 记录mock设置完成
  console.info(`[Mock] 成功设置 ${mocks.length} 个模拟接口`);
}

// 导出mocks列表，便于调试
const mockList = mocks;

}),
28929: (function () {
"use strict";
/* (ignored) */

}),

}]);