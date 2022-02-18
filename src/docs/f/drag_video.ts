interface GetPositionType {
    element: any,
    x: number,
    y: number
}

function getPosition(element: any, x: number, y: number) {
    let xPosition= 0
    let yPosition= 0
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientHeight)
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop)
        element = element.offsetParent
    }
    x= xPosition
    y= yPosition
}

export { getPosition }