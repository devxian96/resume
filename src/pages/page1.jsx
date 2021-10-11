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

const page1 = (
  <Page key="1" size="A4" style={styles.page} pageNumber={1}>
    <View style={styles.section}>
      <Text>장석현</Text>
    </View>
  </Page>
);

export default page1;
