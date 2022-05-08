import Head from 'next/head'

const random = (num) => {
  const item = ["布団が吹っ飛んだ", "車が来るまで待っている", "トイレにいっといれ"];

  return <div>{item[num]}</div>
}

export default function Home() {

  const rand = Math.floor(Math.random() * 3);

  return (
    <div>
      <Head>
        <title>ランダム一発ギャグ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='main'>
        <p>今日の一発ギャグは...</p>
        {random(rand)}
      </div>
    </div>
  )
}
