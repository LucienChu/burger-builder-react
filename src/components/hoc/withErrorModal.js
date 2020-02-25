import React from 'react'
import Modal from "../UI/modal/Modal"

const withErrorModal = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.responseInterceptor = axios.interceptors.response.use(request => request, error => {
                this.setState({ error: error })
            });
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null })
                return request
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        render() {
            return (
                <React.Fragment>
                    <Modal show={this.state.error}
                        dismissModal={() => this.setState({ error: null })}>
                        {/* {this.state.error.message} */}
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    }
}

export default withErrorModal