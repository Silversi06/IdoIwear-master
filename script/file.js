function addPost() {
    var name = document.getElementById("name").value;
    var group = document.getElementById("group").value;
    var date = document.getElementById("date").value;
    var imageInput = document.getElementById("image");
    var link = document.getElementById("link").value;

    if (name && group && date && imageInput.files.length > 0 && link) {
        var imageFile = imageInput.files[0];
        var postDiv = document.createElement("div");
        postDiv.classList.add("post");

        var postContent = `
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>그룹:</strong> ${group}</p>
            <p><strong>날짜:</strong> ${date}</p>
            <img src="${URL.createObjectURL(imageFile)}" alt="게시물 이미지" style="width: 567px; height: 667px;">
            <p><strong>링크:</strong> <a href="${link}" target="_blank">${link}</a></p>
        `;

        postDiv.innerHTML = postContent;

        var postsContainer = document.getElementById("posts");
        postsContainer.appendChild(postDiv);

        // 입력 필드 초기화
        document.getElementById("name").value = "";
        document.getElementById("group").value = "";
        document.getElementById("date").value = "";
        imageInput.value = ""; // 이미지 파일 선택란 초기화
        document.getElementById("link").value = "";
        // 업로드 이미지 초기화
        document.getElementById("uploaded-image").src = "upload.png";
    }
}

// 이미지 파일 업로드 시 이미지 미리보기
document.getElementById("image").addEventListener("change", function() {
    var imageInput = document.getElementById("image");
    var uploadedImage = document.getElementById("uploaded-image");
    if (imageInput.files.length > 0) {
        var imageFile = imageInput.files[0];
        uploadedImage.src = URL.createObjectURL(imageFile);
    }
});
