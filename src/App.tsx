import React from "react";
import { Text, View } from "react-native";
import { Router } from "./routes/Router";
import { AppwriteProvider } from "./appwrite/AppwriteContext";



//*	https://webhook.site/cee3d686-8b9e-4638-941e-bc3e104192e3*//

const App = () => {
  return (
    <AppwriteProvider>
      <Router />
    </AppwriteProvider>
  );
};

export default App;
