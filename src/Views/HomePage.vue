<template>
  <div>
    <div class="hero">
      <h1>Welcome to Our Website</h1>
      <p>Your success is our priority</p>
    </div>
    <div class="container">
    <main>
      <section class="content-section">
        <h2 class="section-title">あなたにあった勉強を</h2>
        <p class="section-text">
          エクラパスでは、一人一人のニーズに合ったカスタマイズされた学習プログラムを提供しています。私たちは、生徒が自身の強みや苦手を正確に把握し、個々の学習スタイルや目標に合わせて指導を行います。私たちは、生徒が最大限の成果を得られるように、きめ細やかなサポートと指導を行います。生徒一人ひとりの学力レベルや志望校に合わせて、効果的な勉強法やテスト対策を提供し、志望校合格に向けて最善を尽くします。私たちの学習プログラムは、生徒一人一人の個性や目標に焦点を当てており、自信を持って受験に臨むための確かな学力を身につけることができます。
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">就活につながる大学選び</h2>
        <p class="section-text">
          将来のキャリアを見据えた大学選びに役立つ学習支援を提供します。就活に焦点を当てた大学選びは、成功への第一歩です。私たちの学習塾では、将来の目標に合わせて適切なアドバイスやスキルを提供します。業界のトレンドやニーズを踏まえ、生徒一人ひとりに最適な指導を行います。さらに、就活に必要なスキルや知識も充実しています。私たちの指導のもと、夢を叶え、理想のキャリアを築くための大学選びをサポートします。
        </p>
      </section>

      <section class="content-section">
        <h2 class="section-title">コース別指導</h2>
        <p class="section-text">
          生徒一人一人のニーズに合わせて、より効果的な学習を実現するために、二つの異なるコースを用意しています。それぞれのコースは、生徒の学習目標や進路に合わせて設計されており、最適な学習環境を提供します。
        </p>
        <a href="/CourseAndCharge" class="btn">詳しく見る</a>
      </section>

      <section class="services">
        <div class="service">
          <h3 class="service-title">パーソナルアシスタント</h3>
          <p class="service-text">一人一人に合ったアシスタントを紹介させていただきます。</p>
        </div>
        <div class="service">
          <h3 class="service-title">学習相談</h3>
          <p class="service-text">自分がとっている科目でわからないことがあったら早めに質問しましょう。</p>
        </div>
        <div class="service">
          <h3 class="service-title">プロジェクトマネジメント</h3>
          <p class="service-text">あなたの夢や目標に合った学校や会社を紹介し、そこに行けるようにプランニングをします。</p>
        </div>
        <a href="#" class="btn">料金プランへ</a>
      </section>
    </main>
  </div>
</div>
</template>
<script>

export default {
  name: 'HomePage',
};
</script>

<style scoped>
.hero {
  /*background: url('/path/to/hero-image.jpg') no-repeat center center;*/
  background-size: cover;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}

.content-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.section-text {
  font-size: 16px;
  line-height: 1.6;
}

.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
}

.service {
  width: calc(33.33% - 20px);
  margin-bottom: 30px;
}

.service-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.service-text {
  font-size: 14px;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
}
</style>