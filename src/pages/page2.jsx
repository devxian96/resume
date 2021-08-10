import { Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const page2 = (
  <Page key="2" size="A4" style={styles.page}>
    <View style={styles.section}>
      <Text>Section #1</Text>
    </View>
    <View style={styles.section}>
      <Text>Section #1</Text>
    </View>
    <View style={styles.section}>
      <Text>Section #1</Text>
    </View>
  </Page>
);

export default page2;
