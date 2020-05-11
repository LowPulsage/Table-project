import React, { PureComponent } from "react";
import {connect} from "react-redux";
import Source from './Source'


const SourceContainer = () => {
let sourceData = sourceText.map(el => <Source {...el}/>)

  return (
    {sourceData}
  )
}

let MapStateToProps = (state) => {
  console.log(alert(state))
    return {
      sourceText: state.source.posts,
    }
};

export default connect(MapStateToProps, null)(SourceContainer);

// const ItemsComp = props => {
//   return (
//     <>
//     {props.sourceText.map(el => <Source {...el} />)}
//     </>
//   )
// }