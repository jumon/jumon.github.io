import * as React from 'react'

const Publication = () => {
  return (
    <section>
      <h2>Puclications</h2>
      <p>
        Relaxing the Conditional Independence Assumption of CTC-based ASR by Conditioning on
        Intermediate Predictions
      </p>
      <ul>
        <li>
          <u>Jumon Nozaki</u> and Tatsuya Komatsu
        </li>
        <li>INTERSPEECH2021</li>
        <li>
          <a href="https://arxiv.org/abs/2104.02724">[arXiv]</a>
        </li>
      </ul>
      <p>
        CTC を用いた音声認識のための中間層予測による条件づけ <br />
        (A conditioning method with intermediate predictions for CTC-based ASR)
      </p>
      <ul>
        <li>
          <u>Jumon Nozaki</u> and Tatsuya Komatsu
        </li>
        <li>
          日本音響学会2021年秋季研究発表会 <br /> (The 2021 Autumn meeting of the Acoustical Society
          of Japan)
        </li>
      </ul>
      <p>
        句読点を同時予測する End-to-End 音声認識 <br />
        (Punctuation-Aware End-to-End Speech Recognition)
      </p>
      <ul>
        <li>
          <u>Jumon Nozaki</u>, Hirofumi Inaguma, and Tatsuya Kawahara
        </li>
        <li>
          第83回情報処理学会全国大会 <br /> (The 83rd National Convention of IPSJ)
        </li>
      </ul>
      <p>
        非自己回帰モデルを用いた日本語見出し生成の検討 <br />
        (Automatic Japanese Headline Generation with Non-Autoregressive Transformer)
      </p>
      <ul>
        <li>
          <u>Jumon Nozaki</u>, Masayoshi Kondo, and Tatsuya Uchiyama
        </li>
        <li>
          言語処理学会第27回年次大会 <br /> (27th Annual Meeting of the Language Processing Society
          of Japan)
        </li>
      </ul>
    </section>
  )
}

export default Publication
