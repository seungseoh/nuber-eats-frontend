describe("Edit Profile", () => {
  const user = cy;
  beforeEach(() => {
    user.login("test1@abc.com", "12345");
  });
  it("can go to /edit-profile using the header", () => {
    user.get('a[href="/edit-profile"]').click();
    user.wait(2000);
    user.title().should("eq", "Edit Profile | Nuber Eats");
  });
  it("can change email", () => {
    // Request 를 가로채서 변경하기로 요청하는 값을 다시 기존과 동일한 값으로 바꾸어 결과적으로 그대로 유지한다.
    user.intercept("POST", "http://localhost:8000/graphql", (req) => {
      if (req.body?.operationName === "editProfile") {
        // @ts-ignore
        req.body?.variables?.input?.email = "test1@abc.com";
      }
    });
    user.visit("/edit-profile");
    user.findByPlaceholderText(/email/i).clear().type("new-test1@abc.com");
    user.findByPlaceholderText(/password/i).type("12345");
    user.findByRole("button").click();
  });
});
