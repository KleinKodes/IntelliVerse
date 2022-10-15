import React from "react"
import Svg, { SvgProps, Ellipse, Path } from "react-native-svg"
import { Dimensions } from 'react-native';

const SvgComponent = (props) => (
  <Svg
    width={Dimensions.get('screen').width}
    height={Dimensions.get('screen').height/3}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse
      cx={Dimensions.get('screen').width*2/3.9}
      cy={-102}
      rx={Dimensions.get('screen').width}
      ry={Dimensions.get('screen').height/2.5}
      fill="#D9D9D9"
      fillOpacity={0.18}

    />
  </Svg>
)

export default SvgComponent
