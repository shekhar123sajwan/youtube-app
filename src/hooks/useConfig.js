const useConfig = {
  isDarkModeInLocal: () => {
    return window.localStorage.getItem("isDarkMode") ? true : false;
  },
};

export const { isDarkModeInLocal } = useConfig;
