import styled from 'styled-components'

function Home() {
    return (
      <Container>
        <img src='https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HQPET6VWW9yzBZtxgIE2vCo4uPmMTHnDvCBSFi6NnurB0fQvyvmDA6pC5bw5~Pdtlm4nt55vnNyAwimaZ6oQNipcF4lTWv3Hu7h7Za8X0vB--HFKLFLTHPE95oIW~VnVdRSSh~ZNPmlxRt~TKyFf9xoX9MHqRQCyCb2O-jL4tWzP2vI8U7wxryBGRrsfA5qw~gOSdewV9fJpm9Dhs78nwIwNmO9sbX~UjmZsZ7o0~ElTqk3cXlwh1EkDMjB2ejPSFhCQh0dmj6Ei~Y~jhl3Ujn6O6YMyX1jJl0bJn0AJhTWk34QJCdSbEQeHJl3FhNZRIPJSFzQgcEl-AkHvgFJeTw__'/>
        <div>
            <h1>
                DICE GAME
            </h1>
            <Button>
                PLAY NOW
            </Button>
        </div>
      </Container>
    )
}

export default Home

const Container=styled.div`
    max-width:73.75rem;

`;

const Button=styled.button`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
    padding: .625rem 18px;
    gap: 10px
    color: white;

    width:220px;
    height:44px;

    background:Black;
    border-radius:5px;
`;