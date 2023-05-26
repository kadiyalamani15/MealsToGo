import { StatusBar as ExpoStatusBar} from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from "react-native";

export default function App() {
  return (
		<>
			<SafeAreaView style={{ flex: 1 , marginTop: StatusBar.currentHeight }}>
				<View style={styles.search}>
					<Text>Search</Text>
				</View>
				<View style={styles.list}>
					<Text>List</Text>
				</View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
  search: {
    padding: 16,
    backgroundColor: 'green',
  },
  list: {
    padding: 16,
    backgroundColor: 'blue',
    flexGrow: 1,
  }
});
