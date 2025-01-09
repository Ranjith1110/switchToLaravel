
$(function () {
    // Determine the folder depth
    const folderDepth = window.location.pathname.split('/').length - 2;

    // Build the relative path for header and footer
    let relativePath = '';
    for (let i = 0; i < folderDepth; i++) {
        relativePath += '../';
    }

    // Load the header and footer
    $("#header").load(relativePath + "header.html");
    $("#footer").load(relativePath + "footer.html");
});

$(function () {
    const folderDepth = window.location.pathname.split('/').length - 2;
    let relativePath = '';
    for (let i = 0; i < folderDepth; i++) {
        relativePath += '../';
    }

    $("#popupContainer").load(relativePath + "popup-form.html", function () {
        $("#openPopupBtn").on("click", function () {
            $("#popupOverlay").show();
        });
        $(document).on("click", "#closePopupBtn", function () {
            $("#popupOverlay").hide();
        });
    });
});
