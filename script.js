document.addEventListener("DOMContentLoaded", function() {
            let commentsList = document.getElementById("commentsList");
            let storedComments = JSON.parse(localStorage.getItem("comments")) || [];
            
            storedComments.forEach(commentText => {
                let commentItem = document.createElement("li");
                commentItem.textContent = commentText;
                commentsList.appendChild(commentItem);
            });
        });
        
        document.querySelector(".createCommentForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let input = document.querySelector(".commentInput");
            let commentText = input.value.trim();
            
            if (commentText !== "") {
                let commentItem = document.createElement("li");
                commentItem.textContent = commentText;
                document.getElementById("commentsList").appendChild(commentItem);
                
                let storedComments = JSON.parse(localStorage.getItem("comments")) || [];
                storedComments.push(commentText);
                localStorage.setItem("comments", JSON.stringify(storedComments));
                
                input.value = "";
            }
        });