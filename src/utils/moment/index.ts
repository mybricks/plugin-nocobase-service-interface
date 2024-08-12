export function isMoment(obj: any) {
  return obj != null && obj._isAMomentObject != null;
}

export function formatDate(date: any, fmt='YY-mm-dd HH:MM:SS') {
  if(typeof date==='number'){
    date = new Date(date)
  }
  if (typeof date === 'object' && date instanceof Date) {
    const opt: any = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
    }
    let ret
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      }
    }
    return fmt;
  }
  return date
}