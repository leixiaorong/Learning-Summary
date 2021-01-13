X = $x
function sleep(time) {
    setTimeout(function () {
        test.next();
    }, time);
}
function saveFile(data, name){
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([data]);
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    save_link.click();
}
function* run() {
    let page = document.getElementsByClassName('number')
    var data = ''
    console.log("总共" + page.length + "页")
    for (var i = 0; i < page.length; i++) { //页码
        var activePage = page[i]
        let pagecount = i + 1
        console.log("当前第" + pagecount + "页")
        activePage.click()
        yield sleep(2000)
        var count = X('/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[1]/div/table/tr/td[10]/button[6]').length
        console.log("当前页面有" + count + "数据")
        for (var j = 0; j < count; j++) { //遍历
            let index = j + 2
            let button = X('/html/body/div[1]/div[2]/div/div[2]/div/div[3]/div[1]/div/table/tr[' + index + ']/td[10]/button[6]')
            button[0].click();
            yield sleep(1000);
            let rank = j + 1
            data = data + "第" + pagecount + "页," + "第" + rank + "条："
            console.log(X("/html/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/table/tr[2]/td[2]/span/a")[0].innerText);
            console.log(X("/html/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/table/tr[2]/td[5]/span")[0].innerText);
            console.log(X("/html/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/table/tr[2]/td[6]/span")[0].innerText);
            data = data + X("/html/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/table/tr[2]/td[2]/span/a")[0].innerText
            data = data + "," + X("/html/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/table/tr[2]/td[5]/span")[0].innerText
            data = data + ","+ X("/html/body/div[1]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/table/tr[2]/td[6]/span")[0].innerText
            data = data + '\n'
            yield sleep(1000);
            window.history.go(-1);
            yield sleep(1000);
            if (i !== 0) {
                let pageCopy = document.getElementsByClassName('number')
                let activePageCopy = pageCopy[i]
                activePageCopy.click()
                yield sleep(2000)
            }
        }
    }
    console.log(data)
    var name = 'timedTask.txt';//文件名
    saveFile(data, name)//输出txt文档
}

let test = run();
test.next();

