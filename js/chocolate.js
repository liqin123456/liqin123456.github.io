if (location.href.indexOf("link") !== -1) {
    var imgObj = document.getElementsByTagName("img");
    for (i = 0; i < imgObj.length; i++) {　　
        imgObj[i].onerror = function() { this.src = "https://cdn.jsdelivr.net/gh/tzy13755126023/BLOG_SOURCE/theme_f/friend_404.gif" }
    }
}

