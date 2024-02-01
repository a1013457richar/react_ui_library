import React from "react";  
function ButtonContent(props) {  
  return <>{props.children}</>;  
}

function Icon(props) {  
  return <>{props.children}</>;  
}

const Button = (props) => {
    const {children}=props;
    let icon = null;
    let content = null;
    React.Children.forEach(children, (child) => {
        if (child.type === Icon) {
            icon = child;
        } else {
            content = child;
        }
    });
    return (
        <button>
            {icon}
            {content|| 'Default Button'}
        </button>
    );
    }


    export default function App() {
        return (
            <Button>
              <Icon>🖕</Icon>
              <ButtonContent>Click Me!</ButtonContent>
            </Button>
          );
    }

    //效果會變差

    