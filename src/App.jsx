import { useState, useEffect } from "react";
import { PDFViewer, Document, StyleSheet } from "@react-pdf/renderer";
import MenuList from "./components/MenuList";
import * as pages from "./pages/index";

// Create styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    overflow: "hidden",
  },
  viewer: {
    width: "99%",
    maxWidth: "70%",
  },
  menuList: {
    width: "99%",
    maxWidth: "30%",
  },
});

const App = () => {
  const [height, setHeight] = useState(window.innerHeight);

  // Update Window size
  useEffect(() => {
    const updateWindowDimensions = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.menuList}>
        <MenuList />
      </div>
      <div style={styles.viewer}>
        <PDFViewer width="100%" height={height}>
          <Document>{pages.default.map((component) => component)}</Document>
        </PDFViewer>
      </div>
    </div>
  );
};

export default App;
