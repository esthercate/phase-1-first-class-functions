function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function myFunc() {

    }
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}