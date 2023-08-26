const userinput = document.getElementById("userinput")
const lines = document.getElementById("lines")
const path = document.getElementById("path")
const caret = document.getElementById("caret")

let dir = "N:\\>"
let currentFile = null
path.innerHTML = dir

let files = [
  {"name": "shopping.txt", "contents": "eggs<br>milk<br>monster"},
  {"name": "MANUAL", "contents": "Welcome user! This instruction manual will teach you everything there is to know about th1¥ÞåNY4^1¾slç¾˜AsÐNþº•A2{W.¡å½…iÖ}-Š¸õ’Åw=<9Ìbnç¼æ8«OãvúŽå¬fmûºózœ»Ê:ÖÉnà·È­|ðp»þÊÎóE áðÖlÚ¥!§Ù¹ 8—äÊ5Õ¯DtM7Ž¥@¢÷:¨Ó¤˜ãÚEìˆ+Klè}Žœ×¤(•Ü_>1¶}|íeùŽèoý‰ ÄŒòäàþTBÉ¡Mw[eýc:0yp>ùM5¢üõæ•«öÑd’b»lÀÙ7˜èÆ^àS…Ó:fU©Ö‰èÃ|VÈö	*xõjfºÉÆ¦Qv)õ¬:§tñ9úZð¯{Þæ|qÇf±æž#åêå³Tàä8CÃ£SvÝÖ:È•hŽ¶Jæ%GŠûˆ—¢¾“â¥~ÇÔ¿¼¶ÂšDÐÑ¤íxB^†8kL°e	´\ÄõÈÃJ÷P´Ò–83å|ÈWäç½älÐdir Œà*C„–‰„Ô\˜sùËŽxêBÌXFT.ÇýÒ’m‰!D”˜¸÷(eq»glÆ³z‡t:¥ænÕîÊ§¡­®\ßÛßÙ=éò¡•f­ƒ¤hÜ,ãÀ:™±rÈbÂGIŒ{øÑ¦Ò,]Îý:(a'‘]ñ—©”:µÕ¿ºú³ «½SÜ³ˆ1ŸÓÅLé‰ìñH“kS“µñ;Ó%§¯aÊwB†…}ÎÏ¼§­²)U,LL|`ÙSÉÑvš½!Iš;ÕVb¾{Ÿ K¡²Ñå„2°1Úg±¥ø[V ùå›5åŸað*ÞAÙ™Ôï9M5Hî«TzV–ë±©Ò–ŸîTŸUâusá7¼‚•ëþÆh!µê@][­T^V@¡¬>ë(î[©½Ga/xâÍ"},
  {"name": "readme.txt", "contents": "Waiting for something to happen?"},
  {"name": "LICENSE", "contents": `MIT License<br><br>

  Copyright (c) 2023 ████<br><br>
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:<br><br>
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.<br><br>
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`},
  {"name": "neffi.txt", "contents": "silly little furry<br>she codes a little<br>just a little though "}
]

function updatePath(fil) {
  if (fil == '\\') {
    dir = "N:\>"
    currentFile = null
    path.innerHTML = dir
  } else {
    currentFile = fil
    dir = `N:\\${fil}>`
    path.innerHTML = dir
  }
}

function findFile(n) {
  for (i=0;i<files.length;i++) {
    if (files[i].name == n) {
      return i
    }
  }
}

var startTime = new Date();

function isEmptyString(str) {
  return str.trim() === '';
}

function createLine(str, pathBool) {
  let line = document.createElement("div")
  line.className = "line"
  line.id = "line"
  if (pathBool == true) {
    line.innerHTML = path.innerText + str
  } else {
    line.innerHTML = str
  }
  lines.append(line)
  line.scrollIntoView(true);
}

createLine("NyaCo OS v12.4.3 x37")
createLine("(c) Nya & Company. All rights reserved<br><br>")
// createLine("logged in as <span class='pink'>nefi</span>")
createLine("N:\\>neofetch")
cmd("neofetch")

function cmd(lol) {
  const args = lol.split("&nbsp;");
  if (isEmptyString(lol)) return;
  if (args[0].length <= 0) return;
  console.log(args)
  if (args[0].toLowerCase() == "ping") {
    createLine("pong!")
    if (args[1].toLowerCase() == "pass321") {
      let linesArr = document.querySelectorAll("[id='line']")
      console.log(linesArr)
      for (i=0;i<linesArr.length;i++) {
        linesArr[i].remove()
      }
      userinput.remove()
      path.remove()
      setTimeout(()=> {createLine(`
      Alive as you but without breath,<br>
      As cold in my life as in my death;<br>
      Never a thirst though I always drink,<br>
      Dressed in a mail but never a clink.
      `)},500);
      setTimeout(()=> {window.close()},515);
    }
  }
  if (args[0].toLowerCase() == "neofetch") {
    let timePing = new Date();
    let duration = timePing.getTime() - startTime.getTime()
    let stamp = moment.utc(duration).format('HH:mm:ss')
    let totalStorage = 0
    let ending = "b"
    let toDisplay = 0
    for (i=0;i<files.length;i++) {
      let file = files[i]
      let filesize = file.contents.length // bytes
      totalStorage += filesize
    }
    toDisplay = totalStorage
    if (totalStorage >= 1000) {
      totalStorage /= 1000
      toDisplay = Math.round(totalStorage * 10) / 10
      ending = "Kb"
    }
    if (totalStorage >= 1000) {
      totalStorage /= 1000
      toDisplay = Math.round(totalStorage * 10) / 10
      ending = "Mb"
    }
    createLine("⣿⡟⠙⠛⠋⠩⠭⣉⡛⢛⠫⠭⠄⠒⠄⠄⠄⠈⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿&nbsp;&nbsp;&nbsp;<span class='pink'>user</span>@<span class='pink'>ssh.nyaco.tk</span>")
    createLine("⣿⡇⠄⠄⠄⠄⣠⠖⠋⣀⡤⠄⠒⠄⠄⠄⠄⠄⠄⠄⠄⠄⣈⡭⠭⠄⠄⠄⠉⠙&nbsp;&nbsp;&nbsp;-------------------------")
    createLine("⣿⡇⠄⠄⢀⣞⣡⠴⠚⠁⠄⠄⢀⠠⠄⠄⠄⠄⠄⠄⠄⠉⠄⠄⠄⠄⠄⠄⠄⠄&nbsp;&nbsp;&nbsp;<span class='pink'>OS</span>: NyaOS 12.4.3 x37")
    createLine(`⣿⡇⠄⡴⠁⡜⣵⢗⢀⠄⢠⡔⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄&nbsp;&nbsp;&nbsp;<span class='pink'>Uptime</span>: ${stamp}`)
    createLine("⣿⡇⡜⠄⡜⠄⠄⠄⠉⣠⠋⠠⠄⢀⡄⠄⠄⣠⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸&nbsp;&nbsp;&nbsp;<span class='pink'>Packages</span>: 20")
    createLine("⣿⠸⠄⡼⠄⠄⠄⠄⢰⠁⠄⠄⠄⠈⣀⣠⣬⣭⣛⠄⠁⠄⡄⠄⠄⠄⠄⠄⢀⣿&nbsp;&nbsp;&nbsp;<span class='pink'>Shell</span>: NYASIC")
    createLine("⣏⠄⢀⠁⠄⠄⠄⠄⠇⢀⣠⣴⣶⣿⣿⣿⣿⣿⣿⡇⠄⠄⡇⠄⠄⠄⠄⢀⣾⣿&nbsp;&nbsp;&nbsp;<span class='pink'>Resolution</span>: 1920x1080")
    createLine("⣿⣸⠈⠄⠄⠰⠾⠴⢾⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⢁⣾⢀⠁⠄⠄⠄⢠⢸⣿⣿&nbsp;&nbsp;&nbsp;<span class='pink'>CPU</span>: NYA Technology 6510")
    createLine("⣿⣿⣆⠄⠆⠄⣦⣶⣦⣌⣿⣿⣿⣿⣷⣋⣀⣈⠙⠛⡛⠌⠄⠄⠄⠄⢸⢸⣿⣿&nbsp;&nbsp;&nbsp;<span class='pink'>GPU</span>: NYC-II")
    createLine("⣿⣿⣿⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠈⠄⠄⠄⠄⠄⠈⢸⣿⣿&nbsp;&nbsp;&nbsp;<span class='pink'>Memory</span>: 23Kb / 64Kb")
    createLine(`⣿⣿⣿⠄⠄⠄⠘⣿⣿⣿⡆⢀⣈⣉⢉⣿⣿⣯⣄⡄⠄⠄⠄⠄⠄⠄⠄⠈⣿⣿&nbsp;&nbsp;&nbsp;<span class='pink'>Storage</span>: ${totalStorage}${ending} / 7.5Mb`)
    createLine("⣿⣿⡟⡜⠄⠄⠄⠄⠙⠿⣿⣧⣽⣍⣾⣿⠿⠛⠁⠄⠄⠄⠄⠄⠄⠄⠄⠃⢿⣿")
    createLine("⣿⡿⠰⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠩⠔⠒⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠐⠘⣿")
    createLine("⣿⠃⠃⠄⠄⠄⠄⠄⠄⣀⢀⠄⠄⡀⡀⢀⣤⣴⣤⣤⣀⣀⠄⠄⠄⠄⠄⠄⠁⢹")
  }
  if (args[0].toLowerCase() == "help") {
    createLine("HELP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;displays available commands")
    createLine("PING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;does a ping!")
    createLine("NEOFETCH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shows system info")
    createLine("RM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deletes the given file")
    createLine("LS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lists all files and directories in the directory")
    createLine("CAT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;opens a file for reading")
    createLine("CLR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clears the terminal")
    createLine("ADD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adds X and Y")
    createLine("SUB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtracts X and Y")
    createLine("MUL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;multiplies X and Y")
    createLine("DIV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;divides X and Y")
  }
  if (args[0].toLowerCase() == "ls") {
    for (i=0;i<files.length;i++) {
      let file = files[i]
      let filesize = file.contents.length
      let ending = "b"
      let toDisplay = filesize
      if (filesize >= 1000) {
        filesize /= 1000
        toDisplay = Math.round(filesize * 10) / 10
        ending = "Kb"
      }
      if (filesize >= 1000) {
        filesize /= 1000
        toDisplay = Math.round(filesize * 10) / 10
        ending = "Mb"
      }
      createLine(`${file.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${toDisplay}${ending}`)
    }
  }
  if (args[0].toLowerCase() == "clr") {
    location.reload()
  }
  if (args[0].toLowerCase() == "rm") {
    if (!args[1]) return createLine("Please provide a file name!")
    let wantedFile = args[1]
    if (args[1] == "/") return window.close();
    if (findFile(wantedFile) == undefined) return createLine(`Could not find '${wantedFile}'`);
    let toread = files[findFile(wantedFile)]
    files.splice(findFile(wantedFile), 1)
    createLine(`removed '${toread.name}'`)
  }
  /*if (args[0].toLowerCase() == "cd") {
    if (!args[1]) return createLine("Please provide a file name!")
    let wantedFile = args[1]
    if (findFile(wantedFile) == undefined) return createLine(`Could not find '${wantedFile}'`);
    currentFile = files[findFile(wantedFile)]
    updatePath(wantedFile)
  }*/
  if (args[0].toLowerCase() == "cat") {
    if (!args[1]) return createLine("Please provide a file name!")
    let wantedFile = args[1]
    if (findFile(wantedFile) == undefined) return createLine(`Could not find '${wantedFile}'`);
    let toread = files[findFile(wantedFile)]
    createLine(`contents of '${toread.name}':`)
    createLine(toread.contents)
  }
  if (args[0].toLowerCase() == "add") {
    if (isNaN(Number(args[1]))) return createLine("Please input a valid number! ADD X Y");
    if (isNaN(Number(args[2]))) return createLine("Please input a valid number! ADD X Y");
    let sum = Number(args[1]) + Number(args[2])
    createLine(`${args[1]} + ${args[2]} = ${sum}`)
  }
  if (args[0].toLowerCase() == "sub") {
    if (isNaN(Number(args[1]))) return createLine("Please input a valid number! SUB X Y");
    if (isNaN(Number(args[2]))) return createLine("Please input a valid number! SUB X Y");
    let sum = Number(args[1]) - Number(args[2])
    createLine(`${args[1]} - ${args[2]} = ${sum}`)
  }
  if (args[0].toLowerCase() == "mul") {
    if (isNaN(Number(args[1]))) return createLine("Please input a valid number! MUL X Y");
    if (isNaN(Number(args[2]))) return createLine("Please input a valid number! MUL X Y");
    let sum = Number(args[1]) * Number(args[2])
    createLine(`${args[1]} * ${args[2]} = ${sum}`)
  }
  if (args[0].toLowerCase() == "div") {
    if (isNaN(Number(args[1]))) return createLine("Please input a valid number! DIV X Y");
    if (isNaN(Number(args[2]))) return createLine("Please input a valid number! DIV X Y");
    let sum = Number(args[1]) / Number(args[2])
    createLine(`${args[1]} / ${args[2]} = ${sum}`)
  }
  if (args[0].toLowerCase() == "soggy") {
    createLine(`<img src="https://media.tenor.com/NQfq1liFH-8AAAAd/byuntear-sad.gif" height="200" width="200">`)
  }
}

let caretCol = false
setInterval(function () {
  if (caretCol) {
    caretCol = false
    caret.style.backgroundColor = "white"
  } else {
    caretCol = true
    caret.style.backgroundColor = "black"
  }
}, 500);

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) return;
    const key = event.key
    console.log(event.code)
    if (event.code == "Backspace") {
      console.log("hi")
      userinput.innerHTML = userinput.innerText.substring(0, userinput.innerText.length-1)
    }
    if (event.code == "Enter") {
      if (userinput.innerText != "") {
        createLine(userinput.innerText, true)
        cmd(userinput.innerHTML)
        userinput.innerHTML = ""
      }
    }
    if (key.length <= 1) {
      if (event.code == "Space") {
        userinput.innerHTML += "&nbsp;"
      } else {
        userinput.innerHTML += key
      }
      userinput.scrollIntoView(true)
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  // the last option dispatches the event to the listener first,
  // then dispatches event to window