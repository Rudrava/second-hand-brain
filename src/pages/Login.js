import { Button } from "components/Buttons";
import { Email, Passwd } from "components/Inputs";
import { Divider, Form, PageGrid } from "components/PageComp.sc";
import Google from "images/google.svg";
import Github from "images/github.svg";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { Auth } from "lib/firebase";

const Login = () => {
    return (
        <PageGrid center="true">
            <Form>
                <h1>Login</h1>
                <Button
                    icon={Google}
                    label="Log in with google"
                    style={{ width: "100%" }}
                    onClick={Auth.signInWithGoogle}
                />
                <Button
                    icon={Github}
                    label="Log in with github"
                    style={{ width: "100%" }}
                    onClick={Auth.signInWithGithub}
                />
                <Divider>OR</Divider>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={({ email, password }) => {
                        Auth.logInWithEmail({ email, password });
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Email
                                label="Email"
                                name="email"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.email}
                            />
                            <Passwd
                                label="Password"
                                name="password"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.password}
                            />

                            <Button type="submit" label="Login" />
                        </form>
                    )}
                </Formik>
                <span className="disclaimer">
                    Do not have an account <Link to="/signup">Sign Up</Link>{" "}
                </span>
            </Form>
        </PageGrid>
    );
};

export default Login;
