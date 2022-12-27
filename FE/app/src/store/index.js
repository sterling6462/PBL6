import axios from "axios";
import { useFonts } from "expo-font";
import create from "zustand";

export const useStore = create((set) => ({
  isLogged: false,
  username: null,
  token: null,
  error: null,
  login: async ({ username, password }) => {
    axios
      .post(`http://hoailinh.online/api/login`, {
        username,
        password,
      })
      .then(async (res) => {
        const token = await res.data.access;
        set((state) => ({
          ...state,
          isLogged: true,
          username: username,
          token: token,
          error: null,
        }));
      })
      .catch((e) => {
        set((state) => ({
          ...state,
          isLogged: false,
          username: null,
          token: null,
          error: "Something went wrong!",
        }));
      });
  },
  logout: () => {
    set((state) => ({
      ...state,
      isLogged: false,
      username: null,
      token: null,
      error: null,
    }));
  },
}));

export const useFontCustom = () => {
  const [fontLoaded] = useFonts({
    Pacific: require("../assets/fonts/Pacifico-Regular.ttf"),
    BalsamRegular: require("../assets/fonts/BalsamiqSans-Regular.ttf"),
    BalsamBold: require("../assets/fonts/BalsamiqSans-Bold.ttf"),
  });
  return fontLoaded;
};
