import { extendTheme } from "@chakra-ui/react"
import { theme as chakraTheme} from "@chakra-ui/react"
import colors from "./color"
import Button from "./Components/button"
const overrides = {
    ...chakraTheme,
        colors,
        components:{
            Button
        }
        
}

const customTheme = extendTheme(overrides);

export default customTheme;