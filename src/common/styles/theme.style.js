const theme = {
  // Font Size
  FONT_SIZE_XXS: 12,
  FONT_SIZE_XS: 14,
  FONT_SIZE_S: 16,
  FONT_SIZE_M: 20,
  FONT_SIZE_L: 22,
  FONT_SIZE_XL: 24,

  // Font Family
  FONT_REGULAR: 'CSPraJad',
  FONT_BOLD: 'CSPraJad-bold',

  // Color
  VIOLET_COLOR: 'rgb(111,66,193)',
  WHITE_COLOR: 'rgb(252, 255, 255)',
  WHITE_COLOR_1: 'rgba(252, 255, 255, 0.5)',
  BLACK_COLOR: 'rgb(45, 45, 45)',
  BLACK_COLOR_1: 'rgb(0, 0, 0)',
  BLACK_COLOR_2: 'rgba(0, 0, 0, 0.8)',
  TRANSPARENT_COLOR: 'rgba(252, 255, 255, 0)',
  GREY_COLOR: 'rgb(127, 144, 142)',
  LIGHT_GREY_COLOR: 'rgb(166, 186, 184)',
  LIGHT_GREY_COLOR_1: 'rgb(203, 216, 215)',
  LIGHT_GREY_COLOR_2: 'rgb(196, 196, 196)',
  LIGHT_GREY_COLOR_3: 'rgb(247, 247, 247)',
  LIGHT_GREY_COLOR_4: 'rgb(238,238,238)',
  GREEN_COLOR: 'rgb(21, 88, 83)',
  LIGHT_GREEN_COLOR: 'rgb(31, 127, 119)',
  LIGHT_GREEN_COLOR_1: 'rgb(0, 204, 102)',
  LIGHT_GREEN_COLOR_2: 'rgb(21, 132, 69)',
  LIGHT_GREEN_COLOR_3: 'rgb(36, 189, 33)',
  LIGHT_GREEN_COLOR_4: 'rgb(217, 255, 240)',
  LIGHT_GREEN_COLOR_5: 'rgb(143,188,143)',
  LIGHT_GREEN_COLOR_6: 'rgb(77,189,116)',
  LIGHT_GREEN_COLOR_7: 'rgb(221, 236, 234)',
  RED_COLOR: 'rgb(187, 41, 12)',
  RED_COLOR_2: 'rgb(194, 38, 40)',
  LIGHT_RED_COLOR: 'rgb(255,17,17)',
  LIGHT_RED_COLOR_1: 'rgb(254, 220, 221)',
  LIGHT_RED_COLOR_2: 'rgb(248,108,107)',
  LIGHT_RED_COLOR_3: 'rgb(255, 59, 48)',
  ORANGE_COLOR: 'rgb(254, 152, 117)',
  LIGHT_ORANGE_COLOR: 'rgb(255,153,0)',
  LIGHT_BLUE_COLOR: 'rgb(109,158,235)',
  LIGHT_BLUE_COLOR_1: 'rgb(80, 137, 242)',
  LIGHT_BLUE_COLOR_2: 'rgb(111,123,215)',
  LIGHT_BLUE_COLOR_3: 'rgb(0, 122, 255)',
  LIGHT_BLUE_COLOR_4: 'rgb(240,248,255)',
  GRADIENT_ORANGE_COLOR: 'rgb(251, 118, 124)',
  GRADIENT_LIGHT_ORANGE_COLOR: 'rgb(254, 152, 117)',
  GRADIENT_GREEN_COLOR: 'rgb(80, 206, 197)',
  GRADIENT_LIGHT_GREEN_COLOR: 'rgb(141, 220, 144)',
  YELLOW_COLOR: 'rgb(243, 237, 158)',
  LIGHT_YELLOW_COLOR: 'rgb(255, 254, 169)',
  LIGHT_YELLOW_COLOR_1: 'rgb(255, 204, 0)',
  GREEN_BACKGROUND_OPACITY_COLOR: 'rgba(21, 88, 83,0.3)',

  // New Name
  M_GRAY_25: 'rgb(248, 248, 248)', //Bg
  M_GRAY_50: 'rgb(241, 241, 241)', //Disable
  M_GRAY_100: 'rgb(225, 225, 225)', //
  M_GRAY_400: 'rgb(145, 145, 145)', //Placeholder
  M_GRAY_500: 'rgb(117, 117, 117)', //Secondary
  M_GRAY_900: 'rgb(31, 31, 31)', //PrimaryText

  M_GREEN_50: 'rgba(242, 251, 249, 1)',
  M_GREEN_100: 'rgb(233, 242, 241)',
  M_GREEN_200: 'rgb(210, 229, 228)',
  M_GREEN_300: 'rgb(165, 204, 201)',
  M_GREEN_400: 'rgb(121, 178, 173)',
  M_GREEN_500: 'rgb(76, 153, 146)',
  M_GREEN_600: 'rgb(31, 127, 119)',
  M_GREEN_700: 'rgb(25, 102, 95)',
  M_GREEN_800: 'rgb(19, 76, 71)',
  M_GREEN_900: 'rgb(12, 51, 48)',
  M_GREEN_1000: 'rgb(6, 25, 24)',

  M_GREEN_STATUS_50: 'rgba(241, 253, 240, 1)',
  M_GREEN_STATUS_100: 'rgba(221, 252, 220, 1)',
  M_GREEN_STATUS_200: 'rgba(190, 246, 188, 1)',
  M_GREEN_STATUS_300: 'rgba(138, 238, 135, 1)',
  M_GREEN_STATUS_400: 'rgba(79, 221, 75, 1)',
  M_GREEN_STATUS_500: 'rgba(37, 188, 34, 1)',
  M_GREEN_STATUS_600: 'rgba(26, 162, 23, 1)',
  M_GREEN_STATUS_700: 'rgba(24, 127, 22, 1)',
  M_GREEN_STATUS_800: 'rgba(24, 100, 23, 1)',
  M_GREEN_STATUS_900: 'rgba(21, 82, 21, 1)',
  M_GREEN_STATUS_950: 'rgba(5, 46, 6, 1)',

  M_ORANGE_50: 'rgb(255, 244, 241)',
  M_ORANGE_100: 'rgb(255, 233, 225)',
  M_ORANGE_300: 'rgb(255, 185, 161)',
  M_ORANGE_400: 'rgb(254, 152, 118)',
  M_ORANGE_500: 'rgb(246, 107, 61)',
  M_ORANGE_600: 'rgb(228, 79, 30)',
  M_ORANGE_700: 'rgb(192, 64, 21)',
  M_ORANGE_800: 'rgb(159, 56, 21)',
  M_ORANGE_900: 'rgb(131, 51, 25)',
  M_ORANGE_950: 'rgb(72, 23, 7)',

  M_NAVY_50: 'rgba(246, 247, 249, 1)',
  M_NAVY_100: 'rgba(235, 238, 243, 1)',
  M_NAVY_200: 'rgba(211, 217, 228, 1)',
  M_NAVY_300: 'rgba(172, 184, 205, 1)',
  M_NAVY_400: 'rgba(128, 147, 176, 1)',
  M_NAVY_500: 'rgba(96, 118, 151, 1)',
  M_NAVY_600: 'rgba(70, 87, 116, 1)',
  M_NAVY_700: 'rgba(62, 76, 102, 1)',
  M_NAVY_800: 'rgba(54, 66, 86, 1)',
  M_NAVY_900: 'rgba(49, 57, 73, 1)',
  M_NAVY_950: 'rgba(32, 37, 49, 1)',

  M_RED_50: 'rgba(255, 240, 240)',
  M_RED_100: 'rgba(255, 221, 221, 1)',
  M_RED_200: 'rgba(255, 192, 192, 1)',
  M_RED_300: 'rgba(255, 148, 148, 1)',
  M_RED_400: 'rgba(255, 87, 87, 1)',
  M_RED_500: 'rgba(255, 35, 35, 1)',
  M_RED_600: 'rgba(255, 17, 17, 1)',
  M_RED_700: 'rgba(215, 0, 0, 1)',
  M_RED_800: 'rgba(177, 3, 3, 1)',
  M_RED_900: 'rgba(146, 10, 10, 1)',
  M_RED_950: 'rgba(80, 0, 0, 1)',

  M_YELLOW_50: 'rgba(255, 255, 234, 1)',
  M_YELLOW_100: 'rgba(255, 251, 197, 1)',
  M_YELLOW_200: 'rgba(255, 248, 133, 1)',
  M_YELLOW_300: 'rgba(255, 238, 70, 1)',
  M_YELLOW_400: 'rgba(255, 223, 27, 1)',
  M_YELLOW_500: 'rgba(255, 193, 7, 1)',
  M_YELLOW_600: 'rgba(226, 148, 0, 1)',
  M_YELLOW_700: 'rgba(187, 105, 2, 1)',
  M_YELLOW_800: 'rgba(152, 81, 8, 1)',
  M_YELLOW_900: 'rgba(124, 66, 11, 1)',
  M_YELLOW_950: 'rgba(72, 34, 0, 1)',

  // Screen Background
  SCREEN_BACKGROUND: 'rgb(245,250,249)',

  // Border
  BORDER_NORMAL_COLOR: 'rgb(208, 217, 217)',
  BORDER_ERROR_COLOR: 'rgb(187, 41, 12)',
  BORDER_RADIUS: 10,

  // Button
  BUTTON_RADIUS: 50,

  // Input
  INPUT_BACKGROUND: 'rgb(245,250,249)',
  INPUT_ERROR_BACKGROUND: 'rgb(255,227,230)',
  TOOLTIP_TEXT_WHITE_COLOR: '#E1E1E1',
  TOOLTIP_TEXT_BLUE_COLOR: '#5ABAD7',
  TOOLTIP_TEXT_YELLOW_COLOR: '#FFCB14',
  TOOLTIP_BACKGROUND: '#313949',
  TOOLTIP_ICON_COLOR: '#1F7F77',
};

theme.setLang = lang => {
  theme.FONT_SIZE_XXS = lang == 'ENG' ? 10 : 12;
  theme.FONT_SIZE_XS = lang == 'ENG' ? 12 : 14;
  theme.FONT_SIZE_S = lang == 'ENG' ? 14 : 16;
  theme.FONT_SIZE_M = lang == 'ENG' ? 18 : 20;
  theme.FONT_SIZE_L = lang == 'ENG' ? 20 : 22;
  theme.FONT_SIZE_XL = lang == 'ENG' ? 22 : 24;

  return theme;
};

export default theme;
