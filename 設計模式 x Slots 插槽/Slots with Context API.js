//context
const ButtonContent=React.createContext({
    slots:{
        icon:null,
        content:null
    }
});

// Provider 
const ButtonContextProvider=({ children, slots})=>{ 
    //建立提供者
    return (
        <ButtonContent.Provider value={{slots}}>
            {children}
        </ButtonContent.Provider>
    );
}

// useButtonContext取值
const useButtonContext=(props,slotName)=>{
    //建立使用者
    const context=React.useContext(ButtonContent);
    return {
        ...(props||{}),
        ...(context?.[slotName]||{})
    }
}

const Icons={
    play: '⏯️',
    thumbUp: '👍',
}

const Icon=({props: { type: string }})=>{
    //這裡使用ICON
props=useButtonContext(props,'icon');
return(
    <span style={{ marginRight: '4px', display: 'inline-flex' }} {...props}>
        {Icons[type]}
    </span>
)

}

const Button=({props: { children: React.ReactNode }})=>{
    //這裡使用Button
    props=useButtonContext(props,'button');
    return(
        <button {...props}>
            <Icon type="play" />
            {children}
        </button>
    )
}


export default () => {
    return (
      <ButtonContextProvider
        slots={{
          icon: {
            type: 'thumbUp',
            style: { marginRight: '4px' },
          },
        }}
      >
        <Button>Play!!!</Button>
      </ButtonContextProvider>
    );
  };
  
