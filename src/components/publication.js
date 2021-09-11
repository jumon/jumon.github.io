import * as React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Publication = () => {
  return (
    <Box p={1} m={1}>
      <Box m={1}>
        <Typography variant="h5" color="primary">
          Publications
        </Typography>
      </Box>
      <Box m={2}>
        <Box mt={2} mb={3}>
          <Typography variant="subtitle1">
            A COMPARATIVE STUDY ON NON-AUTOREGRESSIVE MODELINGS FOR SPEECH-TO-TEXT GENERATION
          </Typography>
          <Box m={1}>
            <Typography variant="body2" style={{ color: 'gray' }}>
              Yosuke Higuchi, Nanxin Chen, Yuya Fujita, Hirofumi Inaguma, Tatsuya Komatsu, Jaesong
              Lee, <u>Jumon Nozaki</u>, Tianzi Wang, Shinji Watanabe <br />
              ASRU2021
            </Typography>
          </Box>
        </Box>
        <Box mt={3} mb={3}>
          <Typography variant="subtitle1">
            Relaxing the Conditional Independence Assumption of CTC-based ASR by Conditioning on
            Intermediate Predictions
          </Typography>
          <Box m={1}>
            <Typography variant="body2" style={{ color: 'gray' }}>
              <u>Jumon Nozaki</u> and Tatsuya Komatsu <br />
              INTERSPEECH2021
              <br />
              <a href="https://arxiv.org/abs/2104.02724">[arXiv]</a>
            </Typography>
          </Box>
        </Box>
        <Box mt={3} mb={3}>
          <Typography variant="subtitle1">
            CTC を用いた音声認識のための中間層予測による条件づけ <br />
            (A conditioning method with intermediate predictions for CTC-based ASR)
          </Typography>
          <Box m={1}>
            <Typography variant="body2" style={{ color: 'gray' }}>
              <u>Jumon Nozaki</u> and Tatsuya Komatsu <br />
              日本音響学会2021年秋季研究発表会 <br />
              (The 2021 Autumn meeting of the Acoustical Society of Japan)
            </Typography>
          </Box>
        </Box>
        <Box mt={3} mb={3}>
          <Typography variant="subtitle1">
            句読点を同時予測する End-to-End 音声認識 <br />
            (Punctuation-Aware End-to-End Speech Recognition)
          </Typography>
          <Box m={1}>
            <Typography variant="body2" style={{ color: 'gray' }}>
              <u>Jumon Nozaki</u>, Hirofumi Inaguma, and Tatsuya Kawahara
              <br />
              第83回情報処理学会全国大会 <br />
              (The 83rd National Convention of IPSJ)
            </Typography>
          </Box>
        </Box>
        <Box mt={3} mb={3}>
          <Typography variant="subtitle1">
            非自己回帰モデルを用いた日本語見出し生成の検討 <br />
            (Automatic Japanese Headline Generation with Non-Autoregressive Transformer)
          </Typography>
          <Box m={1}>
            <Typography variant="body2" style={{ color: 'gray' }}>
              <u>Jumon Nozaki</u>, Masayoshi Kondo, and Tatsuya Uchiyama <br />
              言語処理学会第27回年次大会 <br />
              (27th Annual Meeting of the Language Processing Society of Japan)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Publication
