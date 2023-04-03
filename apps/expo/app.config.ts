import { ExpoConfig, ConfigContext } from "@expo/config";

const CLERK_PUBLISHABLE_KEY =
  "pk_test_YXdha2UtY2hpcG11bmstMjcuY2xlcmsuYWNjb3VudHMuZGV2JA";

const defineConfig = (_ctx: ConfigContext): ExpoConfig => ({
  name: "easy-cleaner",
  slug: "cleaner",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/squareIcon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/squareIcon.png",
    resizeMode: "contain",
    backgroundColor: "#2e026d",
  },
  packagerOpts: {
    config: "metro.config.js",
    sourceExts: ["ts", "tsx", "css"],
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier", //@unique
  },
  android: {
    package: "com.cleaner.app",
    adaptiveIcon: {
      foregroundImage: "./assets/squareIcon.png",
      backgroundColor: "#2e026d",
    },
  },
  extra: {
    eas: {
      projectId: "492a653b-9587-4331-b62f-c15d18ccf57e",
    },
    CLERK_PUBLISHABLE_KEY,
  },
  plugins: ["./expo-plugins/with-modify-gradle.js"],
});

export default defineConfig;
