const comments = [
    {
        id: 1,
        text: "jogumeq che amena harust martkancica",
        parentId: null,
        user: 'esim_ov_123',
        replies: [
            {
                id: 2,
                text: "ha bayc asenq twitter@ arela esimincha satqel",
                parentId: 1,
                user: "mark_cukerberg_official",
                replies: [
                    {
                        id: 3,
                        text: "bayc v principe etqanel vat@ chi X@",
                        parentId: 2,
                        user: 'esim_ov_123',
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: "mart vor karacela hayastanum raket trcni. maladec",
        parentId: null,
        user: 'anush_axper_2001',
        replies: []
    },
    {
        id: 5,
        text: "iphone 13 pro max shat cacr hnerov",
        parentId: null,
        user: 'Spam',
        replies: [{
            id: 6,
            text: "tarde in ka?",
            parentId: null,
            user: 'anush_axper_2001',
            replies: []
        },]
    },
    {
            id: 7,
            text: "es inchia sev foni vra ho ban chi eghel ",
            parentId: null,
            user: 'pikol_nashinyan',
            replies: [{
            id: 6,
            text: "oghormi  =( =(",
            parentId: null,
            user: 'anush_axper_2001',
            replies: []
        },]
        },

];

function generateComment(comment, level) {
    const div = document.createElement('div');
    div.className = 'comment';
    div.style.marginLeft = `${level * 20}px`;

    const usernameSpan = document.createElement('span');
    usernameSpan.textContent = `${comment.user}: `;
    usernameSpan.classList.add('username');
    div.appendChild(usernameSpan);

    const textNode = document.createTextNode(comment.text);
    div.appendChild(textNode);

    if (comment.replies.length > 0) {
        comment.replies.forEach(reply => {
            const replyDiv = generateComment(reply, level + 1);
            div.appendChild(replyDiv);
        });
    }

    return div;
}

function displayComments(comments) {
    const container = document.getElementById('comments-container');
    container.innerHTML = '';

    comments.forEach(comment => {
        if (comment.parentId === null) {
            const commentDiv = generateComment(comment, 0);
            container.appendChild(commentDiv);
        }
    });
}


displayComments(comments);