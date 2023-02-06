import styled from "styled-components"
import FormTitleEmoji from "../assets/images/form-title-emoji.png"
import InputField from "../components/InputField"

const Signin = () => {
    return (
        <Container>
            <SignInBox>
                <ImgArea>
                    <ImgText>
                        <h1>Learning</h1>
                        <p>Growth.</p>
                    </ImgText>
                </ImgArea>

                <FormArea>
                    <FormTitle>
                        <div className="title-heading">
                            <h2>Hey! Nosakhare</h2>
                            <img src={FormTitleEmoji} alt="" />
                        </div>
                        <p>Let's learn and change the world together</p>
                    </FormTitle>
                    <Form>
                        <InputField inputIcon={"isax-user-edit"} inputType={"text"}/>
                    </Form>
                </FormArea>
            </SignInBox>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: no-wrap;
    padding: 50px 0; 
`

const SignInBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80vh;
    border-radius: 10px;
`

const ImgArea = styled.div`
    width: 55%;
    height: 100%;
    background: #ddd url(src/assets/images/signin-bg.png) no-repeat;
    background-position: left center;
    background-size: cover;

    h1{
        font-size: 165px;
        transform: translateY(40%);
        font-weight: 900;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: white;
        color: transparent;
    }

    p{
        transform: translate(28.5%, -350%);
        font-size: 20px;
        font-weight: bold;
        color: black;
    }
}
`

const ImgText = styled.div`
    text-align: center;
`

const FormArea = styled.div`
    width: 45%;
    height: 100%;
    background-color: white;
    text-align: center;
`

const FormTitle = styled.div`
    padding-top: 20px;
    text-align: center;

    .title-heading{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2{
        color: black;
        font-size: 20px;
        margin-right: 10px;
    }

    p{
        line-height: 0px;
    }
`

const Form = styled.form`

`


export default Signin;