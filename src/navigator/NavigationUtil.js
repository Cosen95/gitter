

/**
 * 全局导航类
 *
 * @export
 * @class NavigationUtil
 */
export default class NavigationUtil {

  /**
   *
   * 跳转到上一页
   * @static
   * @param {*} navigation
   * @memberof NavigationUtil
   */
  static goBack(navigation) {
    navigation.goBack();
  }
  
  /**
   *
   * 返回主页
   * @static
   * @param {*} params
   * @memberof NavigationUtil
   */
  static resetToHomePage(params) {
    const { navigation } = params;
    navigation.navigate('Main');
  }

  /**
   *
   *
   * @static
   * @param {*} page 要跳转的页面名
   * @memberof NavigationUtil
   */
  static goPage(page) {
    const navigation = NavigationUtil.navigation;
    if(!navigation) {
      console.log('NavigationUtil.navigation can not be null');
      return
    }
    navigation.navigate(page)
  }
}