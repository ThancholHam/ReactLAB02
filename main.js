
function App() {



    return (
        <div style={{
            color:'white',
            backgroundColor: "#23272F",
            margin: '0',
            borderRadius: '20px',
            width: '100vw',
            height: '100vh',
            padding : '40px',

        
           
            
            
            
        }}>
            
            <h1>Quick Start</h1>
            <p>Welcome to the React docmentation ! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            <div style ={{
              backgroundColor: '#343A46',
              padding: '20px 40px',
              borderRadius: '20px',
              width : '50%',
              maxwidth: '600px',
              margin: '40px',
              
              
              
              


            }}>
             <h1>You will learn</h1>
                <ul>
                    <li>How to create and nest components</li>
                    <li>How to add markup and styles</li>
                    <li>How to display data</li>
                    <li>How to render conditions and lists</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </div>
        </div>
       )
     }

ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)












