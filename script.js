document.addEventListener('DOMContentLoaded', () => {
  const replaceBrokenImage = (img) => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = 'true';
    const alt = img.alt || 'Ilustrasi materi SIG';
    const wrap = document.createElement('div');
    wrap.className = 'image-fallback';
    const component = alt.includes('Komponen SIG');
    const attribute = alt.includes('tabel dan peta');
    wrap.innerHTML = component ? `
      <svg viewBox="0 0 960 430" role="img" aria-label="${alt}"><rect width="960" height="430" fill="#f5f8fa"/>
      <g font-family="system-ui,sans-serif" text-anchor="middle"><circle cx="480" cy="215" r="82" fill="#075175"/><text x="480" y="205" fill="white" font-size="28" font-weight="700">SIG</text><text x="480" y="235" fill="#d9eef4" font-size="16">informasi geografis</text>
      <g fill="#fff" stroke="#75aeca" stroke-width="3"><rect x="55" y="55" width="190" height="80" rx="8"/><rect x="55" y="295" width="190" height="80" rx="8"/><rect x="715" y="55" width="190" height="80" rx="8"/><rect x="715" y="295" width="190" height="80" rx="8"/><rect x="385" y="20" width="190" height="70" rx="8"/></g>
      <g fill="#26323e" font-size="19" font-weight="700"><text x="150" y="103">PENGGUNA</text><text x="150" y="343">METODE</text><text x="810" y="103">DATA</text><text x="810" y="343">PERANGKAT</text><text x="480" y="63">TUJUAN</text></g>
      <g stroke="#075175" stroke-width="3"><line x1="245" y1="115" x2="405" y2="180"/><line x1="245" y1="315" x2="405" y2="250"/><line x1="715" y1="115" x2="555" y2="180"/><line x1="715" y1="315" x2="555" y2="250"/><line x1="480" y1="90" x2="480" y2="133"/></g></g></svg>` : attribute ? `
      <svg viewBox="0 0 960 430" role="img" aria-label="${alt}"><rect width="960" height="430" fill="#f5f8fa"/><g font-family="system-ui,sans-serif"><text x="80" y="55" fill="#075175" font-size="20" font-weight="700">PENGAMATAN</text><rect x="55" y="85" width="230" height="260" rx="8" fill="#dcebbd"/><path d="M85 300L150 205L205 245L260 125" fill="none" stroke="#75aeca" stroke-width="16"/><circle cx="165" cy="185" r="13" fill="#b64c42"/><text x="100" y="330" font-size="15">Lokasi P-01</text><text x="365" y="220" font-size="38" fill="#075175">→</text><text x="440" y="55" fill="#075175" font-size="20" font-weight="700">TABEL ATRIBUT</text><rect x="415" y="85" width="475" height="260" fill="#fff" stroke="#9bb1bc"/><g stroke="#c5d1d7"><line x1="415" y1="145" x2="890" y2="145"/><line x1="415" y1="205" x2="890" y2="205"/><line x1="415" y1="265" x2="890" y2="265"/><line x1="545" y1="85" x2="545" y2="345"/><line x1="700" y1="85" x2="700" y2="345"/></g><g font-size="15"><text x="445" y="120" font-weight="700">ID</text><text x="575" y="120" font-weight="700">Fungsi</text><text x="730" y="120" font-weight="700">Kapasitas</text><text x="445" y="180">P-01</text><text x="575" y="180">Sekolah</text><text x="730" y="180">420</text><text x="445" y="240">P-02</text><text x="575" y="240">Klinik</text><text x="730" y="240">80</text></g></g></svg>` : `
      <svg viewBox="0 0 960 380" role="img" aria-label="${alt}"><rect width="960" height="380" fill="#f5f8fa"/><g font-family="system-ui,sans-serif" text-anchor="middle"><g fill="#fff" stroke="#75aeca" stroke-width="3"><rect x="45" y="100" width="190" height="130" rx="8"/><rect x="385" y="100" width="190" height="130" rx="8"/><rect x="725" y="100" width="190" height="130" rx="8"/></g><g fill="#075175" font-size="20" font-weight="700"><text x="140" y="140">PENGAMATAN</text><text x="480" y="140">DATA</text><text x="820" y="140">INFORMASI</text></g><g fill="#5d6b76" font-size="15"><text x="140" y="180">lokasi · waktu · nilai</text><text x="480" y="180">dicatat dan disusun</text><text x="820" y="180">menjawab pertanyaan</text></g><g fill="#075175" font-size="32"><text x="310" y="180">→</text><text x="650" y="180">→</text></g><text x="480" y="300" fill="#26323e" font-size="18">Lokasi memberi konteks pada hasil pengamatan.</text></g></svg>`;
    img.replaceWith(wrap);
  };
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => replaceBrokenImage(img), { once: true });
    if (img.complete && !img.naturalWidth) replaceBrokenImage(img);
  });

  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  const meetings = [
    ['1', 'Data, informasi, dan SIG', 'pertemuan-1.html'],
    ['2', 'Kedudukan dan komponen SIG', 'pertemuan-2.html'],
    ['3', 'Model data spasial', 'model-data-spasial.html'],
    ['4', 'Basis data atribut', 'data-atribut.html'],
    ['5', 'Perangkat SIG', 'perangkat-sig.html'],
    ['6', 'Pengelolaan dan input data', 'pengelolaan-input-data.html'],
    ['7', 'Topologi dan integrasi data', 'topologi-integrasi.html'],
    ['8', 'Ujian Tengah Semester', 'latihan-uts.html'],
    ['9', 'Retrieval, klasifikasi, pengukuran', 'retrieval-klasifikasi-pengukuran.html'],
    ['10', 'Overlay dan neighborhood', 'overlay-neighborhood.html'],
    ['11', 'Proximity dan network', 'proximity-network.html'],
    ['12', 'Pemodelan dan analisis SIG', 'pemodelan-analisis-sig.html'],
    ['13', 'Penyajian dan distribusi', 'penyajian-distribusi-informasi.html'],
    ['14', 'Pertukaran dan standardisasi', 'pertukaran-standardisasi-data.html'],
    ['15', 'Evaluasi kualitas SIG', 'evaluasi-kualitas-sig.html'],
    ['16', 'Ujian Akhir Semester', 'ujian-akhir-semester.html']
  ];

  const page = location.pathname.split('/').pop() || 'index.html';
  const currentByPage = {
    'pertemuan-1.html': '1', 'pertemuan-2.html': '2',
    'model-data-spasial.html': '3', 'minggu-4.html': '4', 'data-atribut.html': '4',
    'perangkat-sig.html': '5', 'pengelolaan-input-data.html': '6',
    'topologi-integrasi.html': '7', 'latihan-uts.html': '8',
    'retrieval-klasifikasi-pengukuran.html': '9', 'overlay-neighborhood.html': '10',
    'proximity-network.html': '11', 'pemodelan-analisis-sig.html': '12',
    'penyajian-distribusi-informasi.html': '13', 'pertukaran-standardisasi-data.html': '14',
    'evaluasi-kualitas-sig.html': '15', 'ujian-akhir-semester.html': '16'
  };
  let current = currentByPage[page] || '';
  const hashWeek = location.hash.match(/minggu-(\d+)/);
  if (hashWeek) current = hashWeek[1];

  sidebar.innerHTML = `
    <a class="brand" href="index.html">Sistem Informasi<br>Geospasial</a>
    <div class="meta">Bahan kuliah teori</div>
    <div class="sidebar-teacher">Ni Putu Praja Chintya<br><span>bersama Ir. Waljiyanto, M.Sc.</span></div>
    <div class="nav-title">Pertemuan 1–16</div>
    <nav aria-label="Pertemuan 1 sampai 16">
      ${meetings.map(([number, title, href]) => `<a href="${href}"${current === number ? ' aria-current="page"' : ''}><b>${number}</b><span>${title}</span></a>`).join('')}
    </nav>`;
});
