import styled from 'styled-components'
import Suggestion from './_Suggestion'
import LoadingIndicator from './LoadingIndicator'
import PropTypes from 'prop-types'
import { Children, useEffect, useRef } from 'react'

const SuggestionCont = styled.div`
    background: white;
    position: absolute;
    display: inline-flex;
    z-index: 99;
    margin: 16px 0px 0px 8px;
    min-width: 100px;
    border: 1px solid #CCC;
`

const SuggestionsOverlay = (props) => {
    const {
        isOpened,
        onMouseDown,
        containerRef,
        left,
        top,
      } = props
    const UlElement = useRef()

    useEffect(() => {
        if (
            !UlElement.current ||
            UlElement.current.offsetHeight >= UlElement.current.scrollHeight ||
            !props.scrollFocusedIntoView
        ) return
      
        const scrollTop = UlElement.current.scrollTop
        let { top, bottom } = UlElement.current.children[
            props.focusIndex
        ].getBoundingClientRect()
        const { top: topContainer } = UlElement.current.getBoundingClientRect()
        top = top - topContainer + scrollTop
        bottom = bottom - topContainer + scrollTop
      
        if (top < scrollTop) {
            UlElement.current.scrollTop = top
        } else if (bottom > UlElement.current.offsetHeight) {
            UlElement.current.scrollTop = bottom - UlElement.current.offsetHeight
        }
    })

    const renderSuggestions = () => {
        return Object.values(props.suggestions).reduce(
            (accResults, { results, queryInfo }) => [
              ...accResults,
              ...results.map((result, index) =>
                renderSuggestion(result, queryInfo, accResults.length + index)
              ),
            ],
            []
        ).slice(0, 5)
    }

    const renderSuggestion = (result, queryInfo, index) => {
        const isFocused = (index === props.focusIndex)
        const {childIndex, query} = queryInfo
        const { renderSuggestion } = Children.toArray(props.children)[childIndex].props
        const { ignoreAccents } = props
        
        return (
            <Suggestion 
                key={childIndex + result.id}
                query={query}
                index={index}
                ignoreAccents={ignoreAccents}
                renderSuggestion={renderSuggestion}
                suggestion={result}
                focus={isFocused}
                onClick={() => props.onSelect(result, queryInfo)}
            />
        )
    }

    const renderLoadingIndicator = () => {
        return props.isLoading && <LoadingIndicator style={props.style('loadingIndicator')} />
    }

    if (!isOpened)
        return null
    else
        return (
            <SuggestionCont style={{left: left, top: top}} 
                onMouseDown={onMouseDown} 
                ref={containerRef}>
                <ul ref={UlElement} >
                    {renderSuggestions()}
                </ul>
                {renderLoadingIndicator()}
            </SuggestionCont>
        )
}

SuggestionsOverlay.propTypes = {
    id: PropTypes.string.isRequired,
    suggestions: PropTypes.object.isRequired,
    a11ySuggestionsListLabel: PropTypes.string,
    focusIndex: PropTypes.number,
    position: PropTypes.string,
    left: PropTypes.number,
    top: PropTypes.number,
    scrollFocusedIntoView: PropTypes.bool,
    isLoading: PropTypes.bool,
    isOpened: PropTypes.bool.isRequired,
    onSelect: PropTypes.func,
    ignoreAccents: PropTypes.bool,
    containerRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({
        current:
          typeof Element === 'undefined'
            ? PropTypes.any
            : PropTypes.instanceOf(Element),
      }),
    ]),

    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
}
SuggestionsOverlay.defaultProps = {
    suggestions: {},
    onSelect: () => null,
}

export default SuggestionsOverlay
