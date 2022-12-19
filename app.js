function TwoString(initStr) {

    const strItems = initStr.split(' ');
    
    const result = {};
    strItems.forEach( item => {
    
    const normalItem = item.toLowerCase();
    
    
    if(normalItem in result) {
        result[normalItem] = result[normalItem] + 1;
      } else {
        result[normalItem] = 1;
      }
    });
    
    return Object.keys(result).map(k => {
      return `${k}: ${result[k]};`
    }).join(' ')
    }
    
    console.log(TwoString('li span div span h3 a div span a li div div'))