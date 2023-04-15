import { createTheme } from "@mui/material/styles";
import React from "react";
import { Theme as MuiTheme } from "@mui/material/styles";

export const colors = {
  primary: "#512B78",
  primaryLight: '#DCCCED',
  secondary: "#F4F2EF",
  dark: '#242424',
  light: '#F3EFF9',
  textLight: '#434343',
  error: '#EC4A58',
  contrast: '#00FFF1',
  background: '#243441',
  backgroundDefault: '#253644',
  white: '#FFFFFF',
  gray: "#fafafa",
  darkGray: '#333333',
  gray500: '#808080',
  borderGray: '#DBDBDB',
  borderGray5: '#E0E0E0',
  darkBlack: '#1E1E1E',
  linkColor: '#743EAB',
  gray74: '#BDBDBD',
  gray95: '#F2F2F2',
  green:'#76A032',
}

const theme = createTheme({
  palette: {
    common: {
      black: colors.dark,
      white: colors.white,
      lightPrimary: colors.light,
      grey: colors.gray,
      darkGray: colors.darkGray,
      borderGray: colors.borderGray,
      borderGray5: colors.borderGray5,
      darkBlack: colors.darkBlack,
      linkColor: colors.linkColor,
      gray74: colors.gray74,
      gray95: colors.gray95,
      gray500: colors.gray500,
      green: colors.green,
      background: colors.background,
    },
    primary: {
      main: colors.primary,
      light: colors.primaryLight
    },
    secondary: {
      main: colors.secondary,
      light:"#F6884D"
    },
    error: {
      main: colors.error,
    },
    text: {
      primary: colors.dark,
      secondary: colors.textLight,
    },
  },
  typography: {
    fontSize: 14,
    allVariants:{
      color: colors.dark,
    },
    danger:{
      fontSize: 14,
      color: "#EB5757",
      fontWeight: 500,
    },
    link: {
      fontSize: 15,
      fontWeight: 500,
      color: colors.linkColor,
    },
    white:{
      fontSize:16,
      color: colors.white,
    },
    strike_out: {
      fontSize: 14,
      color: colors.gray500,
      fontWeight: 600,
      textDecoration:"line-through"
    },
    price: {
      fontSize: 20,
      color: "#000",
      lineHeight:1,
      display:"block",
      fontWeight: 700,
    },
    fontFamily: "gt_walsheimregular",
    h1: {
      fontSize: 24,
      fontWeight: "700",
    },
    h2: {
      fontSize: 22,
      fontWeight: "700",
      lineHeight: "32px",
    },
    h3: {
      fontSize: 20,
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "24px",
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: 1.5
    },
    h5: {
      fontSize: 14,
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "19px",
    },
    h6: {
      fontSize: 12,
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "18px",
    },
    subtitle1: {
      fontSize: 14,
      color: colors.gray500,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      color: colors.dark,
    },
    body1: {
      color: colors.dark,
      fontSize: 14,
      fontWeight: 500,
    },
    body2: {   // use paragraph text
      color: colors.textLight,
      fontSize: 16,
      fontWeight: 500,
    },
    bodyThreeLine:{
      display: "-webkit-box",
      maxWidth: "100%",
      margin: "0 auto",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    bodyOneLine:{
      display: "-webkit-box",
      maxWidth: "100%",
      margin: "0 auto",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: 700,
          fontFamily: "gt_walsheimbold",
        },
        containedSecondary: {
          
          color: colors.darkGray,
          border: '2px solid #E0DDE4',
          background: colors.white,
          fontWeight: 'bold',
          boxShadow: 'none',
          height: 42,
          width: 76,
          '&:hover, &.selected': {
            background: colors.primary,
            color: colors.white,
            border: `2px solid ${colors.primary}`,
            boxShadow: 'none',
          },
        },
        outlinedPrimary: {
          color: colors.primary,
          fontWeight: '700',
          border: `1px solid ${colors.borderGray}`,
        },
        outlinedSecondary: {
          color: colors.textLight,
          border: `2px solid ${colors.darkGray}`,
          padding: '8px 21px',
          '&:hover': {
            border: `2px solid ${colors.darkGray}`,
          },

        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: colors.white,
          border: `1px solid ${colors.borderGray}`,
          borderRadius: "5px",
          boxShadow: "none",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          // background: "#fff"
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {},
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {},
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label:{
          color: colors.darkGray,
          fontSize:14,
          fontWeight: 500
        },
        root:{
          marginRight:"0px"
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          fontSize:16,
          fontWeight:'bold'
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
            backgroundColor: colors.white,
            height:24,
            alignSelf:'center'
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {},
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          minHeight:'48px !important'
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight:700,
          textTransform: 'inherit',
          width: '50%',
          padding: '20px 16px'
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize:'16px',
          fontWeight:700,
          display: 'flex',
          justifyContent:'space-between',
          alignItems: 'center',
          '& button':{
            background: '#FAFAFA'
          }
        }
      }
    },
    MuiAccordion:{
      styleOverrides: {
        root: {
          margin:"0 !important",
          boxShadow: 'none',
          padding: '10px 16px',
          "& .MuiAccordionSummary-expandIconWrapper" : {
            color: colors.dark
          } 
        },
      },
    },
    MuiCheckbox:{
      styleOverrides: {
        root: {
            color: colors.borderGray
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
            padding: '0'
        },
      },
    },
    
    MuiSlider: {
      styleOverrides: {
        thumb: {
          border: `4px solid ${colors.white}`,
          background: "#502F7A",
          boxShadow: "0px 0px 7px #ccc",
        },
        
      }
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          fontWeight: 700,
          fontSize: 14,
          color: colors.primary,
          borderRadius: 10,
        },
        iconOutlined : {
          color: colors.primary
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&[type='number']::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
              "-webkit-appearance": "none",
              display: "none"
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-checked' : {
            color: colors.green
          }
        }
      }
    },
    MuiSnackbar:{
      styleOverrides: {
        root: {
          top: 100
        }
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItem: 'center',
          
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginLeft: 0
        }
      }
    }
  },
});


export default theme;
