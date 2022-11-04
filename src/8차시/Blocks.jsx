import styled from "styled-components";


const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-contents: flex-start;
    background-color: lightgrey;
`;


const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const blockItems = [
    {
        id: 1,
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        id: 2,
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    },
    {
        id: 3,
        label: "3",
        padding: "2rem",
        backgroundColor: "blue",
    },
];

function Blocks(props) {
    return(
        <Wrapper>
            {blockItems.map((blockItem) => {
                return (
                    <Block
                        padding={blockItem.padding}
                        backgroundColor={blockItem.backgroundColor}
                    >
                        {blockItem.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
}

export default Blocks;