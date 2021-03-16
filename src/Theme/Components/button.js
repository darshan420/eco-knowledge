// All my button override
const Button = {
    // The styles all button have in common
    baseStyle: {
        fontWeight: "500",
        borderRadius:"4px"
    },
    // 3 sizes: sm, md(default), lg
    sizes: {
      sm:{
        lineHeight:"24px",
        width: "60px",
        height: "24px",
        padding:"1px 8px",
        fontSize:"14px"
      },
      md:{
        fontSize:"14px",
        lineHeight:"22px",
        width: "76px",
        height: "32px",
        padding:"5px  16px"
      },
      lg:{
        fontSize:"16px",
        lineHeight:"24px",
        width: "83px",
        height: "40px",
        padding:"8px  16px"
      }
    },
    // 3 variants: primary(solid), default, dashed
    variants: {
        primary:{
            color:"gray.50",
        },
        default:{
            border:"1px solid ",
            borderColor:"gray.300"
            
        },
        dashed:{
            border:"1px dashed",
            borderColor:"dustRed.6"
        }
    },
    // The default size and variant values
    defaultProps: {
        size: "md",
        variant: "default",
        
       
    },
  }

  export default Button;