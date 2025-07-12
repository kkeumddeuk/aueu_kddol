<script>
  const today = new Date();
  const dateStr = today.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
  document.getElementById('today').innerText = `오늘은 ${dateStr}입니다!`;
</script>