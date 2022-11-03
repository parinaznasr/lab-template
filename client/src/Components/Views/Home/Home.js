import React from 'react';
import styled from 'styled-components';
import Layout from '../../UtilComponents/Layout';


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Home = () => {
    return(
        <Layout>
            <Container>
                <div className="App">
                    <header className="App-header">
                        <p>
                        Benjamin Haibe-Kains Lab
                        </p>
                    </header>
                </div>
            </Container>
        </Layout>
    );
}

export default Home;
