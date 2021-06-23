import react, { Component } from 'react';
import Modal from '../../UI/Model/Model';

const withErrorHandler =(WrappedCompoent,axios)=>{
     
    return class extends Component{
        state = {
            error:null
        }
        componentWillMount(){

        this.reqInterceptor = axios.interceptors.request.use(req => {
            this.setState({error:null})
            return req;
        }
           
        )
        this.resInterceptor  =  axios.interceptors.response.use(null,error=> this.setState({error:error}))
       
    }
    componentWillUnmount(){
        axios.interceptors.request.eject(this.reqInterceptor);
        axios.interceptors.response.eject(this.resInterceptor);
    }
        render(){
            return(
<>
                {
                    this.state.error === null ? null: <Modal>
                    Network Error
                </Modal>
                }
       
        <WrappedCompoent {...this.props}/>
        </>

            )
        }
    }
      
        
    
}
export default withErrorHandler;