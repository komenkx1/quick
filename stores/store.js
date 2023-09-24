import { defineStore } from "pinia";

export const useStore = defineStore("dtore", {
  //create data list chat
  state: () => ({
    listChat: [
      {
        id: 1,
        isGroup: true,
        chatName: "I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]",
        date: "02/06/2021 10:45",
        participant: 3,
        chat: [
          {
            id: 1,
            isNewMessage: false,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I’ve asked him yesterday.",
            date: "January 1,2021 19:32",
          },
          {
            id: 2,
            isNewMessage: false,
            sender: "Mary Hilda",
            message:
              "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
            date: "June 09,2021 19:32",
          },
          {
            id: 3,
            isNewMessage: false,
            sender: "You",
            message:
              "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
            date: "June 09,2021 19:32",
          },
          {
            id: 4,
            isNewMessage: false,
            sender: "Mary Hilda",
            message: "Sure thing, Claren",
            date: "June 09,2021 19:32",
          },
          //generate different chat
          {
            id: 6,
            isNewMessage: false,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I’ve asked him yesterday.",
            date: "January 1,2021 19:32",
          },
          {
            id: 7,
            isNewMessage: false,
            sender: "Mary Hilda",
            message:
              "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
            date: "June 09,2021 19:32",
          },
          {
            id: 8,
            isNewMessage: false,
            sender: "You",
            message:
              "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
            date: "June 09,2021 19:32",
          },
          {
            id: 9,
            isNewMessage: false,
            sender: "Mary Hilda",
            message: "Sure thing, Claren",
            date: "June 09,2021 19:32",
          },
          {
            id: 10,
            isNewMessage: false,
            sender: "Obaidullah Amarkhil",
            message: "Morning. I’ll try to do them. Thanks",
            date: "June 09,2021 19:32",
          },

          {
            id: 11,
            isNewMessage: true,
            sender: "Obaidullah Amarkhil",
            message: "Morning. I’ll try to do them. Thanks",
            date: "June 09,2021 19:32",
          },
        ],
      },
      {
        id: 2,
        isGroup: true,
        chatName: "109220-Naturalization",
        date: "02/06/2021 10:45",
        participant: 3,
        chat: [
          {
            id: 1,
            isNewMessage: false,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I’ve asked him yesterday.",
            date: "January 1,2021 19:32",
          },
          {
            id: 2,
            isNewMessage: false,
            sender: "Mary Hilda",
            message:
              "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
            date: "June 09,2021 19:32",
          },
          {
            id: 3,
            isNewMessage: false,
            sender: "You",
            message:
              "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
            date: "June 09,2021 19:32",
          },
          {
            id: 4,
            isNewMessage: false,
            sender: "Mary Hilda",
            message: "Sure thing, Claren",
            date: "June 09,2021 19:32",
          },
          {
            id: 5,
            isNewMessage: false,
            sender: "Obaidullah Amarkhil",
            message: "Morning. I’ll try to do them. Thanks",
            date: "June 09,2021 19:32",
          },
        ],
      },
      {
        id: 3,
        isGroup: true,
        chatName:
          "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
        date: "02/06/2021 10:45",
        participant: 3,
        chat: [
          {
            id: 1,
            isNewMessage: false,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I’ve asked him yesterday.",
            date: "January 1,2021 19:32",
          },
          {
            id: 2,
            isNewMessage: false,
            sender: "Mary Hilda",
            message:
              "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
            date: "June 09,2021 19:32",
          },
          {
            id: 3,
            isNewMessage: false,
            sender: "You",
            message:
              "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
            date: "June 09,2021 19:32",
          },
          {
            id: 4,
            isNewMessage: false,
            sender: "Mary Hilda",
            message: "Sure thing, Claren",
            date: "June 09,2021 19:32",
          },
          {
            id: 5,
            isNewMessage: false,
            sender: "Obaidullah Amarkhil",
            message: "Morning. I’ll try to do them. Thanks",
            date: "June 09,2021 19:32",
          },
        ],
      },
      {
        id: 4,
        isGroup: true,
        chatName: "8405-Diana SALAZAR MUNGUIA",
        date: "02/06/2021 10:45",
        participant: 3,
        chat: [
          {
            id: 1,
            isNewMessage: false,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I’ve asked him yesterday.",
            date: "January 1,2021 19:32",
          },
          {
            id: 2,
            isNewMessage: false,
            sender: "Mary Hilda",
            message:
              "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
            date: "June 09,2021 19:32",
          },
          {
            id: 3,
            isNewMessage: false,
            sender: "You",
            message:
              "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
            date: "June 09,2021 19:32",
          },
          {
            id: 4,
            isNewMessage: false,
            sender: "Mary Hilda",
            message: "Sure thing, Claren",
            date: "June 09,2021 19:32",
          },
          {
            id: 5,
            isNewMessage: false,
            sender: "Obaidullah Amarkhil",
            message: "Morning. I’ll try to do them. Thanks",
            date: "June 09,2021 19:32",
          },
        ],
      },
      {
        id: 5,
        isGroup: false,
        chatName: "FastVisa Support",
        date: "02/06/2021 10:45",
        participant: 2,
        chat: [
          {
            id: 1,
            isNewMessage: false,
            sender: "FastVisa Support",
            message:
              "Hey there. Welcome to your inbox! Contact us for more information and help about anything! We’ll send you a response as soon as possible.",
            date: "September 23, 2023",
          },
          {
            id: 2,
            isNewMessage: false,
            sender: "You",
            message: "Hi, I need help with something can you help me ?",
            date: "September 23, 2023",
          },
        ],
      },
    ],
    todoList: [
      {
        name: "Close off Case #012920- RODRIGUES, Amiguel",
        dueDate: "12/06/2021",
        isComplate: false,
        desc: "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
      },
      {
        name: "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
        dueDate: "03/06/2021",
        isComplate: false,
        desc: "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
      },
      {
        name: "Set up appointment with Dr Blake",
        dueDate: "03/06/2021",
        isComplate: false,
        desc: "",
      },
      {
        name: "Contact Mr Caleb - video conference?",
        dueDate: "03/06/2021",
        isComplate: true,
        desc: "",
      },
      {
        name: "Assign 3 homework to Client A",
        dueDate: "03/06/2021",
        isComplate: true,
        desc: "",
      },
    ],
  }),

  //create function to show chat
  actions: {
    //add new todo
    addNewTodoList(todo) {
      this.todoList.push(todo);
    },
    //remove todo
    removeTodoList(todo) {
      const index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
    },
    showChat(id) {
      const chat = this.listChat.find((chat) => chat.id === id);
      return chat;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
