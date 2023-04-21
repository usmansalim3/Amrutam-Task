import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Pills(props) {
  return(
    <Svg
      width="80px"
      height="80px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M29.939 22.98a3.362 3.362 0 00-4.117-2.377c-5.946 1.598-4.053 1.116-10.117 2.711-1.795.472-2.857 2.325-2.377 4.117s2.325 2.857 4.117 2.377c6.057-1.623 4.162-1.148 10.117-2.711 1.795-.471 2.857-2.325 2.377-4.117zm-2.35 3.495l-4.036 1.078c-2.009.538-3.403-4.884-1.449-5.408l4.036-1.078c3.234-.866 4.633 4.555 1.449 5.408zM13.156 9.817a2.792 2.792 0 00-3.948 0c-3.682 3.682-2.517 2.553-6.15 6.15-1.095 1.084-1.089 2.858 0 3.948s2.859 1.09 3.948 0c3.613-3.618 2.452-2.485 6.15-6.15a2.79 2.79 0 000-3.948zM6.453 19.78c-1.972 1.972-5.238-1.356-3.297-3.297l2.885-2.885c-.949.936 2.168 4.426 3.297 3.297L6.453 19.78zm19.315-5.492c-1.562-5.714-1.047-3.906-2.608-9.733-.462-1.724-2.236-2.749-3.961-2.287s-2.757 2.239-2.287 3.961c1.588 5.82 1.079 4.011 2.608 9.733.461 1.725 2.236 2.749 3.961 2.287s2.758-2.239 2.287-3.961zm-5.693 1.615l-1.211-4.52c.474 1.768 5.572.09 5.166-1.384l1.211 4.52c.815 3.041-4.338 4.473-5.166 1.384z" />
    </Svg>
  )
}

export default Pills