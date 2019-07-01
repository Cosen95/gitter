import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,
  createSwitchNavigator
} from "react-navigation";
import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Button, Platform, ScrollView } from "react-native";
import HomePage from "../page/HomePage";
import Page1 from "../page/Page1";
import Page2 from "../page/Page2";
import Page3 from "../page/Page3";
import Page4 from "../page/Page4";
import Page5 from "../page/Page5";
import Login from '../page/Login';
import FlatListDemo from '../page/FlatListDemo';

const AppStack = createStackNavigator({
  Home: {
    screen: HomePage
  },
  Page1: {
    screen: Page1
  }
});
const AuthStack = createStackNavigator({
  Login: {
    screen: Login
  }
}, {
  navigationOptions: {

  }
});
export const AppSwitchNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack
}, {
  initialRouteName: 'Auth',
})
const AppDrawerNavigator = createDrawerNavigator({
  Page4: {
    screen: Page4,
    navigationOptions: {
      drawerLabel: 'Page4',
      drawerIcon: ({tintColor}) => {
        return <MaterialIcons
          name={'drafts'}
          size={24}
          style={{color: tintColor}}
        />
      }
    }
  }, Page5: {
    screen: Page5,
    navigationOptions: {
      drawerLabel: 'Page5',
      drawerIcon: ({tintColor}) => {
        return <MaterialIcons
          name={'move-to-inbox'}
          size={24}
          style={{color: tintColor}}
        />
      }
    }
  }
}, {
  initialRouteName: 'Page4',
  contentOptions: {
    activeTintColor: '#e91e63'
  },
  contentComponent: (props) => (
    <ScrollView
      style={{ backgroundColor: '#ccc', flex: 1 }}
    >
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  )
})
const AppTopNavigator = createMaterialTopTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: "All"
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: "iOS"
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: "React"
      }
    },
    Page4: {
      screen: Page4,
      navigationOptions: {
        tabBarLabel: "React Native"
      }
    },
    Page5: {
      screen: Page5,
      navigationOptions: {
        tabBarLabel: "Electron"
      }
    }
  },
  {
    tabBarOptions: {
      tabStyle: {
        mindWidth: 50
      },
      upperCaseLabel: false,
      scrollEnabled: true,
      style: {
        backgroundColor: "#678"
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6
      }
    }
  }
);
const AppBottomNavigator = createBottomTabNavigator(
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: "最热",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={"ios-home"} size={26} style={{ color: tintColor }} />
        )
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: "趋势",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={"ios-people"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: "收藏",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={"ios-chatboxes"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Page4: {
      screen: Page4,
      navigationOptions: {
        tabBarLabel: "我的",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={"ios-aperture"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === "android" ? "#e91e63" : "#fff"
    }
  }
);
export const AppStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  Page1: {
    screen: Page1,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      title: "这是Page2"
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: props => {
      const { navigation } = props;
      const { state, setParams } = navigation;
      const { params } = state;
      return {
        title: (params && params.title) || "这是Page3",
        headerRight: (
          <Button
            title={params && params.mode === "edit" ? "保存" : "编辑"}
            onPress={() =>
              setParams({
                mode: params && params.mode === "edit" ? "" : "edit"
              })
            }
          />
        )
      };
    }
  },
  Page4: {
    screen: Page4,
    navigationOptions: {
      title: "这是Page4"
    }
  },
  Bottom: {
    screen: AppBottomNavigator,
    navigationOptions: {
      title: "Bottom Navigator"
    }
  },
  Top: {
    screen: AppTopNavigator,
    navigationOptions: {
      title: "Top Navigator"
    }
  },
  Drawer: {
    screen: AppDrawerNavigator,
    navigationOptions: {
      title: "Drawer Navigator"
    }
  },
  FlatListDemo: {
    screen: FlatListDemo,
    navigationOptions: {
      title: "FlatListDemo Navigator"
    }
  }
});
