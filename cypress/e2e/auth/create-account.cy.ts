describe("Create Account", () => {
  const user = cy;
  let text = "CReate an account";
  let temp = new RegExp(`${text}`, "i");
  it("should see email / password validation errors", () => {
    user.visit("/");
    user.findByText(temp).click();
    user.findByPlaceholderText(/email/i).type("non@good");
    user.findByRole("alert").should("have.text", "Please enter a valid email");
    user.findByPlaceholderText(/email/i).clear();
    user.findByRole("alert").should("have.text", "Email is required");
    user.findByPlaceholderText(/email/i).type("real@mail.com");
    user
      .findByPlaceholderText(/password/i)
      .type("a")
      .clear();
    user.findByRole("alert").should("have.text", "Password is required");
  });
  it("should be able to create account and login", () => {
    user.intercept("http://localhost:8000/graphql", (req) => {
      const { operationName } = req.body;
      if (operationName && operationName === "createAccount") {
        req.reply((res) => {
          res.send({
            data: {
              createAccount: {
                ok: true,
                error: null,
                __typename: "CreateAccountOutput",
              },
            },
          });
        });
      }
    });
    user.visit("/create-account");
    user.findByPlaceholderText(/email/i).type("testman123@abc.com");
    user.findByPlaceholderText(/password/i).type("12345");
    user.findByRole("button").click();
    user.wait(1000);
    user.login("test1@abc.com", "12345");
  });
});
