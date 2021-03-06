window.formHandler = (function(Promise, loadingSpinner) {
    var emulateRequestToServer = function() {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve();
            }, 4000);
        });
    };

    var handleLogin = function(user) {
        console.log(user);
        loadingSpinner.show();
        emulateRequestToServer()
            .then(function() {
                loadingSpinner.hide();
                alert('Successfully logged in');
            })

    };

    return {
        handleLogin: handleLogin
    }
})(Promise, loadingSpinner);