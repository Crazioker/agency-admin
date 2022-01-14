export const menusFilter = ({ menus }) => {
    let res = [];
    const subMenusFilter = (subMenus) => {
        let subs = [];
        for (let i = 0, len = subMenus.length; i < len; i++) {
            if (!checkPermission(subMenus[i])) {
                continue;
            }
            let obj = JSON.parse(JSON.stringify(subMenus[i]))
            if (subMenus[i].children && subMenus[i].children.length) {
                obj.children = subMenusFilter(subMenus[i].children);
            }
            subs.push(obj);
        }
        return subs;
    }
    for (let i = 0, len = menus.length; i < len; i++) {
        if (!checkPermission(menus[i])) {
            continue;
        }
        let obj = JSON.parse(JSON.stringify(menus[i]))
        if (menus[i].children && menus[i].children.length) {
            obj.children = subMenusFilter(menus[i].children);
        }
        res.push(obj);
    }
    return res;
}

function checkPermission({ permission }) {
    if (!permission || permission.includes('*')) return true;
    // TODO 获取权限配置表进行检验
    return false;
}