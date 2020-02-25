export const defaultOrderData = {
    name: {
        elementType: "text",
        elementConfig: {
            type: "input",
            placeholder: "Your name"
        },
        value: ""
    },
    email: {
        elementType: "text",
        elementConfig: {
            type: "email",
            placeholder: "Email"
        },
        value: ""
    },
    phoneNumber: {
        elementType: "text",
        elementConfig: {
            type: "tel",
            placeholder: "Phone"
        },
        value: ""
    },
    postCode: {
        elementType: "text",
        elementConfig: {
            type: "text",
            placeholder: "Post Code"
        },
        value: ""
    },
    street: {
        elementType: "text",
        elementConfig: {
            type: "text",
            placeholder: "Street"
        },
        value: ""
    },
    deliveryMethod: {
        elementType: "select",
        elementConfig: {
            type: "select",
            options: [
                { value: "fastest", displayValue: "Fastest" },
                { value: "affordable", displayValue: "Affordable" },
            ]
        },
        value: ""
    }
}