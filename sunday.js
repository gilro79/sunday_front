// Guidelines
// *. Support saving the entire board and also on the task level, 
//    (no need for seperate APIs for mini-updates of task parts like members or status)
// *. No need for saving an activities array per task, those activities are easily filtered from the board activities
// *. activites - when board is updated, the frontend does not send the activities array within the board 
//    instead it only sends a new activity object: {txt, boardId, groupId, taskId}
//    the backend adds this activity to the board with $push and can also emit socket notificatios
// *. D & D Guidelines - vuedraggable / react-beutiful-dnd
// *. Same model for Monday style app (do not implement a generic columns feature)
// *. boardStore no need for group/task stores
// *. We do not handle concurrent editing - needs versioning

// Rendering performance:
// Store Mutation - saveBoard
// state.board = board
// Later, support switching a specific task

// Cmp Mehotds:
function updateTask(cmpType, data) {
    // Switch
    // task.members = data;
    // task.status = data;
}


// Store - saveTask
function storeSaveTask(task, activity) {
    const activity = {
        "id": makeId(),
        "txt": "Changed Color",
        "createdAt": Date.now(),
        "byMember": userService.getLoggedinUser(),
        "task": task
    }
    board = boardService.saveTask(boardId, groupId, task, activity)
    commit(board)
}

// boardService
function saveTask(boardId, groupId, task, activity) {
    const board = getById(boardId)
        // TODO: find the task, and update
    board.activities.unshift(activity)
    saveBoard(board)
    return board
}

// boardStore-action
async function loadAndWatchBoard(boardId) {
    // load from service
    // subscribe to socket
}



const board = {
    "_id": "b101",
    "title": "Final Sprint",
    "createdAt": 1589983468418,
    "createdBy": {
        "_id": "u101",
        "fullname": "Abi Abambi",
        "imgUrl": "http://some-img"
    },
    "members": [ // connected members - able to edit
        {
            "_id": "u101",
            "fullname": "Tal Tarablus",
            "imgUrl": "https://www.google.com"
        }
    ],
    "cmpsOrder": ["status-picker", "person-picker", "date-picker", "timeline-picker"],
    "groups": [{
            "id": "g101",
            "title": "Project Definition",
            "color": '',
            "items": [
                {
                    "id": "i101",
                    "title": "Replace logo",
                    "columns": {
                        "date": 1589983468418,
                        "person": [
                            
                        ],
                        "status": {
                            "bgColor": '',
                            "txt": "Working on it"
                        },
                        "timeline": {
                            "startDate": 1589983468418,
                            "endDate": 1589983468418
                        },
                    },
                    "activityLog": [{
                        "id": 'a101',
                        "time": 1589983468418,
                        "action": "",
                        "byUser": {
                            "_id": "u101",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "https://www.google.com"
                        }
                    }],
                    "updates": [{
                        "id": "u101",
                        "byUser": {
                            "_id": "u101",
                            "fullname": "Yaakob J",
                            "imgUrl": "https://www.google.com"
                        },
                        "txt": "hi",
                        "replies": [{
                            "id": "r101",
                            "byUser": {
                                "_id": "u101",
                                "fullname": "Yaakob J",
                                "imgUrl": "https://www.google.com"
                            },
                            "txt": "hi",
                            "time": 1589983468418,
                            "likes": [{
                                "_id": "u101",
                                "fullname": "Yaakob J",
                                "imgUrl": "https://www.google.com"
                            }]
                        }],
                        "likes": [{
                                "_id": "u101",
                                "fullname": "Yaakob J",
                                "imgUrl": "https://www.google.com"
                            }

                        ]
                    }]

                },
                {
                    "id": "i102",
                    "title": "Add Samples",
                    "columns": {
                        "date": 1589983468418,
                        "person": [

                        ],
                        "status": {
                            "bgColor": '',
                            "txt": "Working on it"
                        },
                        "timeline": {
                            "startDate": 1589983468418,
                            "endDate": 1589983468418
                        },
                    },
                    "activityLog": [{
                        "id": 'a102',
                        "time": 1589983468418,
                        "action": "",
                        "byUser": {
                            "_id": "u101",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "https://www.google.com"
                        }
                    }],
                    "updates": [{
                        "id": "u102",
                        "byUser": {
                            "_id": "u101",
                            "fullname": "Yaakob J",
                            "imgUrl": "https://www.google.com"
                        },
                        "txt": "hi",
                        "replies": [{
                            "id": "r102",
                            "byUser": {
                                "_id": "u101",
                                "fullname": "Yaakob J",
                                "imgUrl": "https://www.google.com"
                            },
                            "txt": "hi",
                            "time": 1589983468418,
                            "likes": [{
                                "_id": "u101",
                                "fullname": "Yaakob J",
                                "imgUrl": "https://www.google.com"
                            }]
                        }],
                        "likes": [{
                            "_id": "u101",
                            "fullname": "Yaakob J",
                            "imgUrl": "https://www.google.com"
                        }]
                    }]
                }
            ],
        },
        {
            "id": "g102",
            "title": "Frontend",
            "items": [{
                    "id": "c103",
                    "title": "Do that"
                },
                {
                    "id": "c104",
                    "title": "Help me",
                    "description": "description",
                    "comments": [{
                        "id": "ZdPnm",
                        "txt": "also @yaronb please CR this",
                        "createdAt": 1590999817436.0,
                        "byMember": {
                            "_id": "u101",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        }
                    }],
                    "checklists": [{
                        "id": "YEhmF",
                        "title": "Checklist",
                        "todos": [{
                            "id": "212jX",
                            "title": "To Do 1",
                            "isDone": false
                        }]
                    }],
                    "members": [{
                        "_id": "u101",
                        "username": "Tal",
                        "fullname": "Tal Tarablus",
                        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                    }],
                    "labelIds": ["l101", "l102"],
                    "createdAt": 1590999730348,
                    "dueDate": 16156215211,
                    "byMember": {
                        "_id": "u101",
                        "username": "Tal",
                        "fullname": "Tal Tarablus",
                        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                    },
                    "style": {
                        "bgColor": "#26de81"
                    }
                }
            ],
            "style": {}
        }
    ],

}
const user = {
    "_id": "u101",
    "fullname": "Abi Abambi",
    "username": "abi@ababmi.com",
    "password": "aBambi123",
    "imgUrl": "http://some-img.jpg",
    "mentions": [{ // ---------------- optional, what is the use of this key? -----------------
        "id": "m101",
        "boardId": "m101",
        "itemId": "t101"
    }],
    "activeBoard": "b101" // boardId
}

// For Monday Mostly:
// Dynamic Components: 
// TaskPreview <component :is="currCmp.type" :info="currCmp.info" @updated="updateTask(currCmp.type, $event)">
const cmp1 = {
    type: 'status-picker',
    info: {
        selectedStatus: 'pending',
        statuses: [{}, {}]
    }
}

const cmp2 = {
    type: 'member-picker',
    info: {
        selectedMembers: ['m1', 'm2'],
        members: ['m1', 'm2', 'm3']
    }
}