import Head from 'next/head'

export default function Home() {

  return (
    <div>
      <Head>
        <title>新入生歓迎会</title>
      </Head>

      <div className='body'>
        <header>
          <div>新歓メモ</div>
        </header>
        <div className='ziko'>
          <h3>自己紹介テンプレ</h3>
          <ul>
            <li>名前</li>
            <li>学年</li>
            <li>パート</li>
            <li>学部</li>
            <li>その他
              <ul>
                <li>最近始めたこと</li>
                <li>好きな食べ物</li>
                <li>吹奏楽歴</li>
                <li>特技</li>
                <li>趣味</li>
              </ul>
            </li>
          </ul>
        </div>
        {/* <div className='sikai'>
          <h3>司会割り</h3>
          <div className='sikai_'>
            <p>古川明日香</p>
            <p>あおい</p>
          </div>
          <div className='sikai_'>
            <p>みずおち</p>
            <p>りこ</p>
          </div>
          <div className='sikai_'>
            <p>あやか</p>
            <p>いっちー</p>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        body {
          
        }
        header {
          padding: 50px;
          margin: 30px 20% 0 20%;
          text-align: center;
          font-size: 30px;
          border: 2px solid black;
          border-radius: 5px;
          width: 60%;
        }
        .ziko {
          width: 60%;
          margin: 20px 20%;
          padding:  10px 10%;
          border: 2px solid black;
          border-radius: 5px;
        }
        .ziko h3 {
          text-align: center;
        }
        // .sikai {
        //   width: 60%;
        //   margin: 20px 20%;
        //   padding:  10px 100px;
        //   border: 2px solid black;
        //   border-radius: 5px;
        // }
        // .sikai h3 {
        //   text-align: center;
        // }
        // .sikai_ {
        //   display: flex;
        // }
      `}</style>
    </div>
  )
}
