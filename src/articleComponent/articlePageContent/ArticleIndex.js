import React from 'react'
import {Grid} from '@material-ui/core'
import {withStyles} from "@material-ui/core";
import tocbot, {init} from "tocbot";

const styles = (theme) =>({
    tocComponent:{
        position: 'sticky',
        top: '20px',
    }
})
class ArticleIndex extends React.Component{

    componentDidMount() {
        const {classes} = this.props
        console.log(classes.tocComponent)
        tocbot.init({
            tocSelector: `.${classes.tocComponent}`,
            contentSelector: `.${this.props.contentClass}`,
            headingSelector: this.props.contentStructure,
            hasInnerContainers: false,
// Main class to add to links.
            linkClass: 'toc-link',
// Extra classes to add to links.
            extraLinkClasses: '',
// Class to add to active links,
// the link corresponding to the top most heading on the page.
            activeLinkClass: 'is-active-link',
// Main class to add to lists.
            listClass: 'toc-list',
// Extra classes to add to lists.
            extraListClasses: '',
// Class that gets added when a list should be collapsed.
            isCollapsedClass: 'is-collapsed',
// Class that gets added when a list should be able
// to be collapsed but isn't necessarily collapsed.
            collapsibleClass: 'is-collapsible',
// Class to add to list items.
            listItemClass: 'toc-list-item',
// How many heading levels should not be collapsed.
// For example, number 6 will show everything since
// there are only 6 heading levels and number 0 will collapse them all.
// The sections that are hidden will open
// and close as you scroll to headings within them.
            collapseDepth: 0,
// Smooth scrolling enabled.
            scrollSmooth: true,
// Smooth scroll duration.
            scrollSmoothDuration: 420,
// Callback for scroll end.
            scrollEndCallback: function (e) { },
// Headings offset between the headings and the top of the document (this is meant for minor adjustments).
            headingsOffset: 1,
// Timeout between events firing to make sure it's
// not too rapid (for performance reasons).
            throttleTimeout: 50,
// Element to add the positionFixedClass to.
            positionFixedSelector: null,
// Fixed position class to add to make sidebar fixed after scrolling
// down past the fixedSidebarOffset.
            positionFixedClass: 'is-position-fixed',
// fixedSidebarOffset can be any number but by default is set
// to auto which sets the fixedSidebarOffset to the sidebar
// element's offsetTop from the top of the document on init.
            fixedSidebarOffset: 'auto',
// includeHtml can be set to true to include the HTML markup from the
// heading node instead of just including the textContent.
            includeHtml: false,
// onclick function to apply to all links in toc. will be called with
// the event as the first parameter, and this can be used to stop,
// propagation, prevent default or perform action
            onClick: false,
// orderedList can be set to false to generate unordered lists (ul)
// instead of ordered lists (ol)
            orderedList: false,
// If there is a fixed article scroll container, set to calculate titles' offset
            scrollContainer: null,
// prevent ToC DOM rendering if it's already rendered by an external system
            skipRendering: false,
// Optional callback to change heading labels.
// For example it can be used to cut down and put ellipses on multiline headings you deem too long.
// Called each time a heading is parsed. Expects a string in return, the modified label to display.
            headingLabelCallback:  (string) => (string),
// ignore headings that are hidden in DOM
            ignoreHiddenElements: false,
// Optional callback to modify properties of parsed headings.
// The heading element is passed in node parameter and information parsed by default parser is provided in obj parameter.
// Function has to return the same or modified obj.
// The heading will be excluded from TOC if nothing is returned.
// function (object, HTMLElement) => object | void
            headingObjectCallback: null,
// Set the base path, useful if you use a `base` tag in `head`.
            basePath: '',
    })
}


    render() {
        const {classes} = this.props
        return(
                    <div className={classes.tocComponent}></div>
        )
    }
}
export default withStyles(styles)(ArticleIndex);