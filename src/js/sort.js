export default function orderByProps(lists, mainKeys) {
    let lists1 = {}
    
    for (let key in lists) {
        if ( mainKeys.indexOf(key) >= 0 ) {
            lists1[key] = lists[key];
        }
    }

    Object.keys(lists).sort().forEach(function(key) {
        if ( lists1.hasOwnProperty(key) ) {
            } else {
            lists1[key] = lists[key];
        }
    });

    return lists1;
}