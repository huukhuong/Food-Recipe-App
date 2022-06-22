import {
  FlatList,
  Image, ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import styles from "./HomeScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { INavigationProps } from "../../navigation/INavigationProps";
import AppThemes from "../../utils/AppThemes";
import CategoryTabItem from "../../components/CategoryTabItem/CategoryTabItem";
import FoodRecipeItem from "../../components/FoodRecipeItem/FoodRecipeItem";

const fakeData = [
  {
    name: "Tất cả",
    items: [],
  },
  {
    name: "Món chính",
    items: [
      {
        image: "https://image.cooky.vn/recipe/g4/35480/s640/cooky-recipe-cover-r35480.JPG",
        name: "Ba Chỉ Rim Tôm Khô",
        description: "Thịt ba chỉ rim tôm khô là món ngon từ thịt ba chỉ và tôm khô, đặc trưng hương vị của món Việt. Tôm khô rang thịt với vị béo ngậy của thịt ba chỉ kết hợp với vị ngọt thơm của tôm khô tạo nên món ăn hấp dẫn khó cưỡng. Cách chế biến tôm khô trong thịt kho tôm khô này, sẽ làm nổi bật hương vị món ăn, không hề tanh đâu, bắt tay làm ngay nhé!",
        ingredients: [
          { name: "Thịt ba chỉ", quantity: 400, unit: "gram" },
          { name: "Tôm khô", quantity: 100, unit: "gram" },
          { name: "Dầu hào", quantity: 2, unit: "Muỗng canh" },
          { name: "Nước mắm", quantity: 2, unit: "Muỗng canh" },
          { name: "Tiêu", quantity: 1, unit: "Muỗng canh" },
          { name: "Hạt nêm", quantity: 1, unit: "Muỗng canh" },
          { name: "Đường trắng", quantity: 2, unit: "Muỗng canh" },
          { name: "Dầu ăn", quantity: 1, unit: "Muỗng canh" },
          { name: "Tỏi băm", quantity: 2, unit: "Muỗng canh" },
          { name: "Hành tím băm", quantity: 3, unit: "Muỗng canh" },
        ],
        guide: [
          "Rửa sạch thịt ba chỉ với muối, cắt thành từng miếng vừa ăn. Nêm gia vị vào tô thịt gồm 2 muỗng canh dầu hào, 2 muỗng canh nước mắm, 1 muỗng canh tiêu, 1 muỗng canh hạt nêm, 1 muỗng canh đường, thêm 1 muỗng canh tỏi băm, 1 muỗng canh hành tím băm. Dùng đũa trộn đều thịt với gia vị, ướp thịt ít nhất 30 phút.",
          "Cho vào chảo lớn 1 muỗng canh dầu ăn và 1 muỗng canh đường, đun đến khi dầu nóng, đường chuyển màu vàng thì cho tiếp vào 1 muỗng canh tỏi băm, 2 muỗng canh hành tím băm. Đảo đều đến khi hành tỏi thơm dậy mùi, đổ tôm khô và thịt vào chảo. Dùng đũa đảo đều tất cả các nguyên liệu với nhau. Rim nhỏ lửa khoảng 20 phút đến khi nước keo sệt lại, thịt rim có màu nâu cánh gián đẹp mắt.",
          "Món thịt ba chỉ rim tôm khô ăn kèm với cơm nóng rất ngon. Thịt kho tôm khô với cách chế biến lại nhanh và đơn giản, nên các mẹ hãy thêm vào danh sách thay đổi món ăn cho gia đình mình nhé. Tôm kho rang thịt chắc chắn sẽ rất hao cơm, đặc biệt trong những ngày trời mưa lạnh.",
        ],
      },
      {
        image: "https://image.cooky.vn/recipe/g3/22435/s640/recipe22435-636437674468604554.jpg",
        name: "Bò Sốt Me",
        description: "Bò sốt me là món ngon bổ dưỡng, cực thơm ngon, thích hợp cho bữa tiệc sum họp, liên hoan cùng gia đình, bạn bè. Những lát thịt bò sốt me vừa chín tới, vẫn giữ dược độ mềm, ăn kèm với bánh mì rất là ngon. Điểm đặc biệt nhất cách làm bò sốt me này là hương vị chua thanh hòa trộn với các loại rau nấm, thơm bơ mà vẫn giữ được độ giòn ngọt tự nhiên.",
        ingredients: [
          { name: "Thịt bò", quantity: 300, unit: "Gr" },
          { name: "Nấm kim châm", quantity: 100, unit: "Gr" },
          { name: "Nấm linh chi nâu", quantity: 100, unit: "Gr" },
          { name: "Nấm bào ngư", quantity: 100, unit: "Gr" },
          { name: "Rau muống", quantity: 200, unit: "Gr" },
          { name: "Hành tây", quantity: 50, unit: "Gr" },
          { name: "Ớt sừng", quantity: 15, unit: "Gr" },
          { name: "Nước cốt me", quantity: 50, unit: "Gr" },
          { name: "Đường trắng", quantity: 40, unit: "Gr" },
          { name: "Nước mắm", quantity: 20, unit: "ml" },
          { name: "Dầu hào", quantity: 20, unit: "Gr" },
          { name: "Tiêu", quantity: 3, unit: "Gr" },
          { name: "Hành tím", quantity: 15, unit: "Gr" },
          { name: "Tỏi", quantity: 15, unit: "Gr" },
          { name: "Sả", quantity: 10, unit: "Gr" },
          { name: "Ớt", quantity: 1, unit: "Trái" },
        ],
        guide: [
          "Làm bò sốt me: Cho 15gr tỏi, 15gr hành tím, 10gr sả, 1 trái ớt, 40gr đường, 20ml nước mắm, 20gr dầu hào, 3gr tiêu xay và thành phần không thể thiếu là 50gr nước cốt me (dạng sệt) vào cối, xay thật mịn.",
          "Nấm cắt bỏ gốc, ngâm qua nước muối 10 phút trước khi nấu. Rau muống nhặt thành từng khúc ngắn, rửa sạch rồi ngâm muối 10 phút. Thái mỏng 300gr thịt bò, đổ hỗn hợp nước sốt me, 50gr hành tây cắt múi cau, 15gr ớt sừng thái lát vào, trộn đều rồi ướp 15 phút cho thịt bò thấm gia vị. Cách làm bò sốt me ngon chính là chọn được thịt bò thăn đỏ tươi, thái nhỏ vừa ăn, tăng thêm thời gian ướp để thịt ngấm đều gia vị.",
          "Cách nấu bò sốt me: Bọc sẵn giấy bạc sung quanh chảo, đặt lên bếp đun nóng ở lửa vừa, cho vào 15gr bơ thực vật (Tường An). Khi bơ tan chảy thì xếp xen kẽ các loại nấm và rau muống vào. Đợi khi rau nấm vừa chín tới thì cho thịt bò sốt me vào chính giữa. Đun ít phút cho thịt bò sốt me vừa chín tới là có thể dùng nóng.",
          "Chảo thịt bò sốt me xèo xèo, thơm nức. Thịt bò chín mềm, tỏa hương ngào ngạt, rất quyến rũ. Ngoài việc ăn cùng cơm thì bò sốt me còn có thể kẹp ăn cùng bánh mì rất là ngon miệng nữa nhé!",
        ],
      },
    ],
  },
  {
    name: "Ăn vặt",
    items: [],
  },
  {
    name: "Khai vị",
    items: [],
  },
  {
    name: "Món chay",
    items: [],
  },
  {
    name: "Làm bánh",
    items: [],
  },
];

const HomeScreen: FC<INavigationProps> = ({ navigation, route }) => {

  const [greeting, setGreeting] = useState<string>("");
  const [categorySelected, setCategorySelected] = useState<number>(0);
  const [foods, setFoods] = useState(fakeData[1].items);

  useEffect(() => {
    getCurrentTimeToGreeting();
  }, []);

  const getCurrentTimeToGreeting = () => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 11) {
      setGreeting("Chào buối sáng");
    } else if (curHr < 13) {
      setGreeting("Chào buối trưa");
    } else if (curHr < 18) {
      setGreeting("Chào buổi chiều");
    } else {
      setGreeting("Chào buổi tối");
    }
  };

  const onPressCategoryItem = (index: number) => {
    setCategorySelected(index);
  };

  const onPressFoodItem = (index: number) => {

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar
          translucent={false}
          backgroundColor={AppThemes.COLORS.white}
          barStyle={"dark-content"} />
        {/* Header with Greeting */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerTextGreeting}>
              {greeting}
            </Text>
            <Text style={styles.headerTextDescription}>
              Bạn muốn nấu món gì hôm nay?
            </Text>
          </View>
          <Image
            style={styles.avatarImage}
            source={{ uri: "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" }} />
        </View>

        {/* Search bar wrapper */}
        <View style={styles.searchBar}>
          <View style={styles.searchWrapper}>
            <Image
              source={require("../../assets/icons/ic_search.png")}
              style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder={"Search recipe"} />
          </View>
          <TouchableOpacity
            style={styles.btnSearchFilter}
            activeOpacity={.65}>
            <Image
              style={styles.iconFilter}
              source={require("../../assets/icons/ic_filter.png")} />
          </TouchableOpacity>
        </View>

        {/* Categories list */}
        <View>
          <FlatList
            style={styles.categoriesWrapper}
            data={fakeData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) =>
              <CategoryTabItem
                index={index}
                name={item.name}
                onPress={() => onPressCategoryItem(index)}
                isSelected={index === categorySelected} />
            } />
        </View>

        {/* Foods list */}
        <View>
          <FlatList
            data={foods}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) =>
              <FoodRecipeItem
                index={index}
                image={item.image}
                name={item.name}
                description={item.description}
                isSaved={false}
                onPress={() => onPressFoodItem(index)} />
            } />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
