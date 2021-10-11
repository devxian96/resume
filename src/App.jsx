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

  const eventBind = (e) => {
    console.log(e);
  };

  return (
    <div style={styles.container}>
      <div style={styles.menuList}>
        <MenuList />
      </div>
      <div style={styles.viewer}>
        <PDFViewer width="100%" height={height}>
          <Document
            ref={(e) => eventBind(e)}
            title="장석현 이력서"
            author="장석현"
            subject="이력서"
            keywords="이력서, 프론트엔드, 풀스택, JS, Javascript"
            language="ko"
          >
            {pages.default.map((component) => component)}
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
};

export default App;
