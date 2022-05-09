window.onload = () => {
  
  const text = document.querySelector('.text');
  
  let tahun_tujuan = new Date().getFullYear();
  let bulan_tujuan = new Date().getMonth();
  let hari_tujuan = new Date().getDate();
  let jam_tujuan = new Date().getHours();
  let menit_tujuan = new Date().getMinutes() + 2;
  let detik_tujuan = new Date().getSeconds();
  let milidetik_tujuan = new Date().getMilliseconds();
  
  let tujuan = new Date(tahun_tujuan, bulan_tujuan, hari_tujuan, jam_tujuan, menit_tujuan, detik_tujuan, milidetik_tujuan).getTime();
  
  let start = setInterval(() => {
    let sekarang = new Date().getTime();
    let selisih = tujuan - sekarang;
    
    let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    let jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    let detik = Math.floor(selisih % (1000 * 60) / 1000);
    
    text.textContent = `tersisa ${hari} hari, ${jam} jam, ${menit} menit, ${detik} detik lagi!`; 
    
    if (selisih <= 0) {
      clearInterval(start);
      text.textContent = 'habis!';
    }
    
  }, 100);
  
}