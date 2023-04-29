import {
  segment
} from 'icqq'
import plugin from '../../lib/plugins/plugin.js'

export class searchQQ extends plugin {
  constructor () {
    super({
      name: '查q绑',
      dsc: 'searchQQ',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^查Q绑((\\d+)|(.*))',
          fnc: 'search'
        }
      ]
    }
    )
  }

  async search (e) {
    let number = e.msg.match(/\d+/)
    let url = `http://tfapi.top/API/qqbd.php?msg=${number}`
    console.log(url)
    await e.reply("在查了在查了，本信息仅供参考，不要用于违法行为哦")
    let msg = await fetch(url)
    let data = await msg.text()
    if (data === "msg:无此数据") {
      await e.reply("奇怪，没有找到这个QQ的绑定信息")
    }else {
      await e.reply("查到了，这应该是你需要的信息\n" + data + "\n请不要用于违法行为哦")
    }
    return
  }
}
