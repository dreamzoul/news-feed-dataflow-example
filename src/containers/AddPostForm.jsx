import React, { Component, createRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { addPost, modalStatusChange } from '../store/reducers/posts/actions';
import { ModalWindow, InputTextArea, InputText, FormActions, ModalContainer } from '../components';

class WallPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleValid: true,
            imgLinkValid: true,
            contentValid: true,
        };
    };

    //Создание ссылок для полей ввода
    title = createRef();
    imgLink = createRef();
    content = createRef();
    sources = createRef();

    //проверка формы на наличие введенной информации
    formValidation = () => {
        const isTitle = !!this.title.current.value,
            isImg = !!this.imgLink.current.value,
            isContent = !!this.content.current.value;

        this.setState({
            titleValid: isTitle,
            imgLinkValid: isImg,
            contentValid: isContent
        })

        return isTitle && isImg && isContent;
    };

    //Метод добавления новго поста
    formSubmit = () => {
        if (this.formValidation()) {

            const { addPost, length } = this.props;

            addPost({
                id: length + 1,
                imgLink: this.imgLink.current.value,
                title: this.title.current.value,
                content: this.content.current.value.split('\n'),
                publicationTime: moment(Date.now()).format('DD-MMM-YYYY hh:mm a'),
                sources: this.sources.current.value
            });

            this.props.modalStatusChange();
        };

    };

    //Метод очистки формы и закрытия модального окна
    formReset = () => {
        this.title.current.value =
            this.imgLink.current.value =
            this.content.current.value =
            this.sources.current.value = '';

        this.props.modalStatusChange();
    };

    render() {
        const { titleValid, imgLinkValid, contentValid } = this.state;
        if (this.props.isOpen) {
            return (
                <ModalWindow>
                    <ModalContainer caption='Добавление нового поста' >
                        <InputText
                            title='Название'
                            ref={this.title}
                            required={true}
                            isValid={titleValid} />

                        <InputText
                            title='Ссылка на изображеине'
                            ref={this.imgLink}
                            required={true}
                            isValid={imgLinkValid} />

                        <InputTextArea
                            title='Содержание'
                            ref={this.content}
                            required={true}
                            isValid={contentValid} />

                        <InputText
                            title='Ссылка на источник'
                            ref={this.sources} />

                        <FormActions
                            submit={this.formSubmit}
                            reset={this.formReset} />
                    </ModalContainer>
                </ModalWindow>
            )
        } else {
            return null;
        }
    }
};

function mapStateToProps(state) {
    return {
        length: state.postList.length,
        isOpen: state.isModalShow
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPost: addPost,
        modalStatusChange: modalStatusChange,
    }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(WallPosts);
