document.addEventListener('DOMContentLoaded', () => {
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
    ['12', 'Pemodelan dan analisis SIG', 'silabus.html#minggu-12'],
    ['13', 'Penyajian dan distribusi', 'silabus.html#minggu-13'],
    ['14', 'Pertukaran dan standardisasi', 'silabus.html#minggu-14'],
    ['15', 'Evaluasi kualitas SIG', 'silabus.html#minggu-15'],
    ['16', 'Ujian Akhir Semester', 'silabus.html#minggu-16']
  ];

  const page = location.pathname.split('/').pop() || 'index.html';
  const currentByPage = {
    'pertemuan-1.html': '1', 'pertemuan-2.html': '2',
    'model-data-spasial.html': '3', 'minggu-4.html': '4', 'data-atribut.html': '4',
    'perangkat-sig.html': '5', 'pengelolaan-input-data.html': '6',
    'topologi-integrasi.html': '7', 'latihan-uts.html': '8',
    'retrieval-klasifikasi-pengukuran.html': '9', 'overlay-neighborhood.html': '10',
    'proximity-network.html': '11'
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
