//Thanks to https://github.com/wrakky for helping with the regex
document.body.innerHTML = document.body.innerHTML.replace(/((Disallow|Allow|Sitemap):\s+)(\/[^\s\*]+)(\n|$)/ig, '$1<a target="_blank" href="$3">$3</a>$4').replace(/(\s|^)(((https?:\/\/)[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?))/gi, '$1<a target="_blank" href="$2">$2</a>').replace(/(\s|^)(([\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?))/gi, '$1<a target="_blank" href="//$2">$2</a>');
