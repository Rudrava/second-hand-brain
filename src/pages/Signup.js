import { Button } from "components/Buttons";
import { Divider, Form, PageGrid } from "components/PageComp.sc";
import Google from "images/google.svg";
import Github from "images/github.svg";
import { Email, Passwd } from "components/Inputs";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { signIn } from "lib/firebase";

const Signup = () => {
    return (
        <PageGrid center="true">
            <Form>
                <h1>Sign up</h1>
                <Button
                    icon={Google}
                    label="Sign up with google"
                    style={{ width: "100%" }}
                    onClick={signIn.signInWithGoogle}
                />
                <Button
                    icon={Github}
                    label="Sign up with github"
                    style={{ width: "100%" }}
                    onClick={signIn.signInWithGithub}
                />
                <Divider>OR</Divider>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    onSubmit={({ email, password }) => {
                        signIn.signUpWithEmail({ email, password });
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
                            <Passwd
                                label="Confirm Password"
                                name="confirmPassword"
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                            <Button type="submit" label="Sign Up" />
                        </form>
                    )}
                </Formik>
                <span className="disclaimer">
                    Already have an account <Link to="/signup">Log in</Link>{" "}
                </span>
            </Form>
        </PageGrid>
    );
};

export default Signup;
