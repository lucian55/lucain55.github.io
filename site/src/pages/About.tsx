export default function About() {
  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold mb-2">关于</h1>
      <p className="text-gray-600 mb-4">落魄程序猿在线码字。博文随缘写，小工具见 <a href="https://github.com/lucian55" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>。</p>

      <h2 className="text-lg font-semibold mt-6 mb-3">赞助 / 打赏</h2>
      <p className="text-gray-600 mb-4">如果博文或小工具对你有帮助，欢迎请我喝杯咖啡 ☕</p>
      <div className="flex flex-wrap gap-6">
        <div className="w-[280px] border rounded-lg p-3 bg-white shadow-sm">
          <div className="font-medium mb-2">微信</div>
          <img src="/img/wechat.jpg" alt="微信收款码" className="w-full h-auto rounded" />
        </div>
        <div className="w-[280px] border rounded-lg p-3 bg-white shadow-sm">
          <div className="font-medium mb-2">支付宝</div>
          <img src="/img/alipay.jpg" alt="支付宝收款码" className="w-full h-auto rounded" />
        </div>
      </div>
    </div>
  )
}
