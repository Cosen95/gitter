   # gitter

   ## react native开发的一款类gitter客户端应用
   
   ## 环境配置
   > 配置可参考`https://reactnative.cn/docs/0.40/getting-started.html` `https://reactnative.cn/docs/getting-started.html` `https://facebook.github.io/react-native/docs/getting-started`

   1、下载`Chocolatey`(windows包管理器)，用于安装`python2`、`jdk8`、`node`。安装方式
   ```
   @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
   ```
   * jdk安装与环境变量配置: `https://jingyan.baidu.com/article/6dad5075d1dc40a123e36ea3.html`

   2、设置 npm 镜像
   ```
   npm config set registry https://registry.npm.taobao.org --global
   npm config set disturl https://npm.taobao.org/dist --global
   ```

   3、安装React Native 的命令行工具（react-native-cli）
   ```
   npm install -g react-native-cli
   ```

   4、 android studio安装(下载地址: `https://developer.android.google.cn/`)
   安装界面中选择“custom”选项，确保选中了以下几项:
   * Android SDK
   * Android SDK Platform
   * Performance (Intel ® HAXM)
   * Android Virtual Device

   5、ANDROID_HOME环境变量配置

   6、将 Android SDK 的 Tools 目录添加到PATH变量中
   可以把 Android SDK 的 tools 和 platform-tools 目录添加到PATH变量中，以便在终端中运行一些 Android 工具

   7、创建新项目
   使用 React Native 命令行工具来创建一个名为"AwesomeProject"的新项目：
   ```
	react-native init AwesomeProject --version 0.55.4
   ```

   8、下载夜神模拟器
   模拟器相关配置可参考`https://www.cnblogs.com/piaobodewu/p/9786513.html`
   * 启动模拟器
   * cmd进入夜神模拟器安装目录的bin目录下`D:\Program Files\Nox\bin`执行`nox_adb devices`，然后应该就有模拟器的名字了，一般都是 127.0.0.1:62001
   * cmd进去android的SDK的platform-tools目录下`D:\android_sdk\platform-tools`执行命令`adb.exe connect 127.0.0.1:62001`连接模拟器
   * 进入项目根目录将项目打包安装到模拟器`react-native run-android`

   9、启动项目(项目根目录打包安装到模拟器)
   ```
	react-native run-android
   ```
   初始化项目运行可能会遇见的问题
   * 真机红屏报错: `https://www.cnblogs.com/piaobodewu/p/9889460.html`
   * 创建工程gradle-2.4-all包下载问题: `https://blog.csdn.net/u010411264/article/details/53636956`





   ## react-navigation(导航)
   > 在 v2 和更早版本中， React Navigation 中的容器由 create*Navigator 函数自动提供， 从 v3 开始, 需要直接使用容器。 即createAppContainer。具体参考`https://reactnavigation.org/docs/zh-Hans/app-containers.html#react-native-%E4%B8%AD%E7%9A%84-createappcontainer-prop`


   * createStackNavigator: 类似于普通的Navigator，屏幕上方导航栏
   * createTabNavigator: createTabNavigator已弃用，使用createBottomTabNavigator和/或createMaterialTopTabNavigator替代
   * createBottomTabNavigator: 相当于iOS里面的TabBarController，屏幕下方的标签栏
   * createMaterialTopTabNavigator: 屏幕顶部的材料设计主题标签栏
   * createDrawerNavigator: 抽屉效果，侧边滑出
   * createSwitchNavigator: SwitchNavigator的用途是一次只显示一个页面
   先了解两个和导航相关的概念:
   * Screen navigation prop(屏幕导航属性): 通过navigator可以完成屏幕之间的调度操作，例如打开另一个屏幕
   ```
   navigation包含以下功能:
   navigate: 跳转到其他界面；
   state: 屏幕的当前state;
   setParams: 改变路由的params;
   goBack: 关闭当前屏幕;
   dispatch: 向路由发送一个action;
   addListener: 订阅导航生命周期的更新;
   isFocused: true标识屏幕获取了焦点;
   getParam: 获取具有回退的特定参数;
   dangerouslyGetParent: 返回父导航器
   ```
   * Screen navigationOptions(屏幕导航选项): 通过navigationOptions可以定制导航器显式屏幕的方式(例如：头部标题，选项卡标签等)

   ### createStackNavigator
   > createStackNavigator提供APP屏幕之间切换的能力，它是以栈的形式来管理屏幕之间的切换，新切换的屏幕会放到栈的顶部

   #### 屏幕转场风格
   默认情况下，createStackNavigator提供了转场过渡效果，在Android和iOS上过渡效果是不同的，这也是React Native重平台性的一个体现，在Android上从屏幕底部淡入，在iOS上是从屏幕的右侧划入。

   #### createStackNavigator API
   > createStackNavigator(RouteConfigs, StackNavigatorConfig)
   * RouteConfigs(必选): 路由配置对象是从路由名称到路由配置的映射，告诉导航器该路由呈现什么
   * StackNavigatorConfig(可选): 配置导航器的路由(如: 默认首屏,navigationOptions, paths等)样式(如,转场模式mode、头部模式等)


   ### createMaterialTopTabNavigator

   #### createMaterialTopTabNavigator API
   > createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)
   * RouteConfigs(必选): 路由配置对象是从路由名称到路由配置的映射，告诉导航器该路由呈现什么
   * TabNavigatorConfig(可选): 配置导航器的路由(如: 默认首屏,navigationOptions, paths等)样式(如,转场模式mode、头部模式等)

   ### createDrawerNavigator

   #### createDrawerNavigator API
   > createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig)
   * RouteConfigs(必选): 路由配置对象是从路由名称到路由配置的映射，告诉导航器该路由呈现什么
   * DrawerNavigatorConfig(可选): 配置导航器的路由(如: 默认首屏,navigationOptions, paths等)样式(如,转场模式mode、头部模式等)

   ### createSwitchNavigator
   > SwitchNavigator的用途是一次只显示一个页面。默认情况下，他不处理返回操作，并在你切换时将路由重置为默认状态

   #### createSwitchNavigator API
   > createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig)
   * RouteConfigs(必选，同createStackNavigator的RouteConfigs): 路由配置对象是从路由名称到路由配置的映射，告诉导航器该路由呈现什么
   * SwitchNavigatorConfig(可选): 配置导航器的路由