<template>
    <main>
      <section class="content-section">
        <h2>あなたにあった勉強を</h2>
        <p>エクラパスでは、一人一人のニーズに合ったカスタマイズされた学習プログラムを提供しています。私たちは、生徒が自身の強みや苦手を正確に把握し、...</p>
      </section>
  
      <section class="content-section">
        <h2>就活につながる大学選び</h2>
        <p>将来のキャリアを見据えた大学選びに役立つ学習支援を提供します。就活に焦点を当てた大学選びは、成功への第一歩です。私たちの学習塾では...</p>
      </section>
  
      <section class="content-section">
        <h2>コース別指導</h2>
        <p>生徒一人一人のニーズに合わせて、より効果的な学習を実現するために、二つの異なるコースを用意しています。それぞれのコースは、生徒の学習目標や...</p>
        <a href="#" class="btn">詳しく見る</a>
      </section>
  
      <section class="services">
        <div class="service">
          <h3>パーソナルアシスタント</h3>
          <p>一人一人に合ったアシスタントを紹介させていただきます。</p>
        </div>
        <div class="service">
          <h3>学習相談</h3>
          <p>自分がとっている科目でわからないことがあったら早めに質問しましょう。</p>
        </div>
        <div class="service">
          <h3>プロジェクトマネジメント</h3>
          <p>あなたの夢や目標に合った学校や会社を紹介し、そこに行けるようにプランニングをします。</p>
        </div>
        <a href="#" class="btn">料金プランへ</a>
      </section>
    </main>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  main {
    padding: 80px 20px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .content-section {
    margin-bottom: 40px;
  }
  .content-section h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  .content-section p {
    font-size: 16px;
    line-height: 1.6;
  }
  .services {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;
  }
  .service {
    background: white;
    padding: 20px;
    border-radius: 8px;
    flex: 1;
    text-align: center;
  }
  .service h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .service p {
    font-size: 14px;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background: #ff6666;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: background 0.3s;
  }
  .btn:hover {
    background: #ff3333;
  }
  </style>