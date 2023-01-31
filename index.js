// code your solution here

function saturdayFun(activity) {
    // return `This Saturday, I want to ${activity}!`

    switch (arguments.length) {
        case 1:
            return `This Saturday, I want to ${activity}!`
        default:
            return "This Saturday, I want to roller-skate!"
    }
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function (adj="special") {
        return `You are ${flair}${adj}${flair}!`
    }
}
