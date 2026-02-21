const menuData = [
  {
    breakfast:    ["పూరి + ఆలు బరని కర్మ", "కోడి గుడ్డు"],
    morningSnack: ["మల్లి మిల్లెట్ చిక్కి"],
    lunch:        ["చికెన్ బిర్యాని", "రైతా", "గోంగూర చెట్ని"],
    eveningSnack: ["సేమియా హోదుసం"],
    dinner:       ["అన్నం + సాంబార్ + క్యారెట్ పెసరపప్పు కర్రి", "మజ్జిగ"],
    nightSnack:   ["అరటిపండు"]
  },
  {
    breakfast:    ["పాలు", "చింతపండు పులిహోర + పప్పులపాడి", "కోడి గుడ్డు"],
    morningSnack: ["మల్లి మిల్లెట్ చిక్కి"],
    lunch:        ["అన్నం + గోంగూర పప్పు", "వెజ్ కర్రి + పెరుగు"],
    eveningSnack: ["గుగ్గిళ్ళు"],
    dinner:       ["అన్నం + క్యాబేజ్ కర్రి + రసం", "మజ్జిగ"],
    nightSnack:   ["జామపండు / లోకల్ పండు"]
  },
  {
    breakfast:    ["పాలు", "ఇడ్లీ + వేరుశెనగ గింజల చెట్ని", "కోడి గుడ్డు"],
    morningSnack: ["మల్లి మిల్లెట్ చిక్కి"],
    lunch:        ["అన్నం + పాలకూర పప్పు", "వెజ్ కర్రి + పెరుగు"],
    eveningSnack: ["రాగిలడ్డు"],
    dinner:       ["తాళంపు అన్నం + చికెన్ కర్రి + రైతా + గోంగూర చెట్ని"],
    nightSnack:   ["అరటిపండు"]
  },
  {
    breakfast:    ["పాలు", "జీర రైస్ + వెజిటేబుల్ కర్రి", "కోడి గుడ్డు"],
    morningSnack: ["మల్లి మిల్లెట్ చిక్కి"],
    lunch:        ["అన్నం + వంకాయ కర్రి", "మెంతికూర పప్పు + పెరుగు"],
    eveningSnack: ["ఉడకబెట్టిన అలసందలు"],
    dinner:       ["అన్నం + బెండకాయ కర్రి + సాంబార్", "మజ్జిగ"],
    nightSnack:   ["జామపండు / లోకల్ పండు"]
  },
  {
    breakfast:    ["పాలు", "గోధుమ రవ్వ ఉప్మా + వేరుశెనగ గింజల చెట్ని", "కోడి గుడ్డు"],
    morningSnack: ["మల్లి మిల్లెట్ చిక్కి"],
    lunch:        ["అన్నం + పాలకూర పప్పు", "వెజ్ కర్రి + పెరుగు"],
    eveningSnack: ["మరమరాలు మిక్స్చర్"],
    dinner:       ["అన్నం + చక్కుడుకాయ కర్రి + సాంబార్", "మజ్జిగ"],
    nightSnack:   ["అరటిపండు"]
  },
  {
    breakfast:    ["పాలు", "పొంగలి + వేయించిన శెనగపప్పు చెట్ని", "కోడి గుడ్డు"],
    morningSnack: ["మల్లి మిల్లెట్ చిక్కి"],
    lunch:        ["అన్నం + మెంతికూర పప్పు", "బంగాళదుంప కర్రి + పెరుగు"],
    eveningSnack: ["గుగ్గిళ్ళు"],
    dinner:       ["అన్నం + గుత్తివంకాయ కర్రి + మజ్జిగ"],
    nightSnack:   ["జామపండు / లోకల్ పండు"]
  },
  {
    breakfast:    ["పాలు", "ఇడ్లీ + వేరుశెనగ గింజల చెట్ని"],
    morningSnack: ["మల్లి మిల్లెట్ చిక్కి"],
    lunch:        ["అన్నం + పాలకూర పప్పు", "క్యాబేజ్ కర్రి + పెరుగు"],
    eveningSnack: ["రవ్వ కేసరి"],
    dinner:       ["అన్నం + దొండకాయ కర్రి + సాంబార్", "మజ్జిగ"],
    nightSnack:   ["అరటిపండు"]
  }
];

const mealConfig = [
  { key: 'breakfast',    icon: '🌅', label: 'అల్పాహారం',          sub: 'Breakfast',      time: '7:00 – 8:30 AM',  theme: 'breakfast' },
  { key: 'morningSnack', icon: '🍫', label: 'ఉదయం స్నాక్స్',     sub: 'Morning Snack',  time: '10:30 AM',         theme: 'snack-morning' },
  { key: 'lunch',        icon: '☀️', label: 'మధ్యాహ్న భోజనం',    sub: 'Lunch',          time: '12:30 – 2:00 PM', theme: 'lunch' },
  { key: 'eveningSnack', icon: '🌤', label: 'సాయంత్రం స్నాక్స్', sub: 'Evening Snack',  time: '4:30 PM',          theme: 'snack-evening' },
  { key: 'dinner',       icon: '🌙', label: 'రాత్రి భోజనం',      sub: 'Dinner',         time: '7:30 – 9:00 PM',  theme: 'dinner' },
  { key: 'nightSnack',   icon: '🍌', label: 'రాత్రి స్నాక్స్',   sub: 'Night Snack',    time: '9:30 PM',          theme: 'snack-night' }
];

function renderMenu(dayIndex) {
  const data = menuData[dayIndex];
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = mealConfig.map(m => `
    <div class="meal-card">
      <div class="meal-header ${m.theme}">
        <div class="meal-icon">${m.icon}</div>
        <div>
          <div class="meal-type">${m.label} <span style="font-size:11px;opacity:.65;font-weight:400">(${m.sub})</span></div>
          <div class="meal-time">${m.time}</div>
        </div>
      </div>
      <div class="meal-items">
        ${data[m.key].map(item => `<div class="meal-item">${item}</div>`).join('')}
      </div>
    </div>
  `).join('');
}

document.getElementById('weekTabs').addEventListener('click', e => {
  const tab = e.target.closest('.day-tab');
  if (!tab) return;
  document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderMenu(parseInt(tab.dataset.day));
});

renderMenu(0);

/* ── WhatsApp Enquiry Form ── */
function sendToWhatsApp(e) {
  e.preventDefault();

  const fullName   = document.getElementById('fullName').value.trim();
  const mobile     = document.getElementById('mobile').value.trim();
  const email      = document.getElementById('email').value.trim();
  const course     = document.getElementById('course').value;
  const casteCert  = document.getElementById('casteCert').value.trim();
  const district   = document.getElementById('district').value.trim();
  const message    = document.getElementById('message').value.trim();

  // Basic validation
  let valid = true;
  const mobileReg = /^[6-9][0-9]{9}$/;
  if (!mobileReg.test(mobile)) {
    alert('Please enter a valid 10-digit mobile number starting with 6-9.');
    document.getElementById('mobile').focus();
    valid = false;
  }
  if (!valid) return;

  // Build structured WhatsApp message
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day:'2-digit', month:'long', year:'numeric' });
  const timeStr = now.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });

  const msg =
`🏫 *Govt. BC Hostel – New Enquiry*
━━━━━━━━━━━━━━━━━━━━
📅 Date: ${dateStr}  |  ⏰ Time: ${timeStr}
━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:*       ${fullName}
📱 *Mobile:*          ${mobile}
📧 *Email:*           ${email || 'Not provided'}
🎓 *Class / Course:*  ${course}
📜 *Caste Cert No.:*  ${casteCert || 'Not provided'}
📍 *District:*        ${district}
━━━━━━━━━━━━━━━━━━━━
💬 *Message / Query:*
${message}
━━━━━━━━━━━━━━━━━━━━
_Sent via BC Hostel Official Website_`;

  // Show success banner
  document.getElementById('successBanner').style.display = 'block';
  document.getElementById('btnText').textContent = '✅ Sending to WhatsApp...';
  document.getElementById('submitBtn').disabled = true;

  // Open WhatsApp after short delay
  setTimeout(() => {
    const phone = '919390235951';
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');

    // Reset form after redirect
    setTimeout(() => {
      document.getElementById('enquiryForm').reset();
      document.getElementById('successBanner').style.display = 'none';
      document.getElementById('btnText').textContent = '📨 Submit Enquiry via WhatsApp';
      document.getElementById('submitBtn').disabled = false;
    }, 3000);
  }, 800);
}
