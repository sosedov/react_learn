let store = {
    _state : {
        messages : [
            {
                "id" : 1,
                "text" : "Hi"
            },
            {
                "id" : 2,
                "text" : "How do you do"
            },
            {
                "id" : 3,
                "text" : "I'm fine Thanks"
            },
            {
                "id" : 4,
                "text" : "Fuck you"
            },
        ],
        dialogs : [
            {
                "id":1,
                "name" : "Dima"
            },
            {
                "id":2,
                "name" : "Katya"
            },
            {
                "id":3,
                "name" : "Alisa"
            },
            {
                "id":4,
                "name" : "Maxim"
            }
        ],
        posts : [
            {"id":1,"message":"My first post","likes":25},
            {"id":2,"message":"I am Dima","likes":15},
            {"id":3,"message":"I like programming","likes":10},
            {"id":4,"message":"This my first react","likes":11},
            {"id":5,"message":"React is difficult","likes":5},
            {"id":6,"message":"The ENd","likes":1},
        ]
    },
    _callSubscriber(){
        console.log("no subscribrs(observers)")
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){// {type:'ADD-POST'}
        if(action.type == 'ADD-POST'){
            if(action.message.replaceAll(" ","").length > 0){
                this._state.posts.push({"id":7,"message":action.message,"likes":0});
                this._callSubscriber(this._state)
            }
        }
    },

    addPost(postMessage){
        if(postMessage.replaceAll(" ","").length > 0){
            this._state.posts.push({"id":7,"message":postMessage,"likes":0});
            this._callSubscriber(this._state)
        }
        
    }
}

export default store;
window.store = store