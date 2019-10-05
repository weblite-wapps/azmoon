import * as R from 'ramda'
// modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// components
import TextArea from '../../../helper/components/Textarea/Textarea.presentational'
import TextField from '../../../helper/components/TextField/TextField.presentational'
import StageManager from '../../../helper/components/StageManager/main/StageManager.presentational'
import FileUpload from '../../../helper/components/FileUpload/FileUpload.presentational'
import GroupButton from '../../../helper/components/GroupButton/GroupButton.presentational'
// helpers
import { onQuestionError } from '../../../helper/functions/utils.helper'
// style
import './QuestionInfo.scss'

export default class QuestionInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleAddData = this.handleAddData.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
    this.handleAddCorrect = this.handleAddCorrect.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    if (state.index !== props.index)
      return { ...props.questions[props.index], index: props.index }
    return null
  }

  handleAddData(type) {
    return ({ target: { value } }) =>
      this.setState({
        [type]: value,
      })
  }

  handleAddOption(index) {
    return ({ target: { value } }) => {
      this.setState({
        options: R.update(index, value, this.state.options),
      })
    }
  }

  handleChangePage(num) {
    const { changePage, addQuestion, openSnackBar } = this.props
    if (num > 0) {
      if (onQuestionError(this.state)) {
        openSnackBar('باید موارد ستاره دار را پر کنید')
        this.setState({
          hasError: onQuestionError(this.state),
        })
      } else {
        addQuestion(R.dissoc('index', this.state))
        changePage(num)
      }
    } else {
      changePage(num)
    }
  }

  handleAddCorrect(num) {
    this.setState({
      correct: num,
    })
  }

  render() {
    const { prob, sol, options, hasError } = this.state
    const { index, questions, createExam, onUpload } = this.props
    return (
      <>
        <StageManager
          finalStage={index + 1 === questions.length}
          finalStageLabel="ایجاد آزمون"
          firstStage={index === 0}
          onLeftClick={() => this.handleChangePage(1)}
          onRightClick={() => this.handleChangePage(-1)}
          onFinalStageClick={() => createExam(this.state)}
          stageLevel={`سوال شماره ${index + 1}`}
          stageName="آزمون"
        />
        <div className="c--question-info_container scroll-bar">
          <TextArea
            required
            hasError={hasError.prob}
            onChange={this.handleAddData('prob')}
            value={prob}
            label="سوال"
            placeholder="صورت سوال را وارد کنید"
          />
          <FileUpload
            label="تصویر مربوط به سوال"
            id="question-input-file"
            onUpload={onUpload}
            onChange={({ url }) => {
              this.setState({ probAttach: url })
            }}
          />
          <TextField
            required
            hasError={hasError.options && hasError.options[0]}
            onChange={this.handleAddOption(0)}
            value={options[0]}
            label="گزینه یک"
            placeholder="متن گزینه یک"
          />
          <TextField
            required
            hasError={hasError.options && hasError.options[1]}
            onChange={this.handleAddOption(1)}
            value={options[1]}
            label="گزینه دو"
            placeholder="متن گزینه دو"
          />
          <TextField
            required
            hasError={hasError.options && hasError.options[2]}
            onChange={this.handleAddOption(2)}
            value={options[2]}
            label="گزینه سه"
            placeholder="متن گزینه سه"
          />
          <TextField
            required
            hasError={hasError.options && hasError.options[3]}
            onChange={this.handleAddOption(3)}
            value={options[3]}
            label="گزینه چهار"
            placeholder="متن گزینه چهارم"
          />
          <GroupButton
            label="گزینه صحیح"
            onChange={ans => this.handleAddCorrect(ans)}
          />
          <TextArea
            onChange={this.handleAddData('sol')}
            value={sol}
            label="پاسخ تشریحی"
            placeholder="پاسخ تشریحی را وارد کنید"
          />
          <FileUpload
            label="تصویر مربوط به سوال"
            id="answer-input-file"
            onUpload={onUpload}
            onChange={({ url }) => {
              this.setState({ solAttach: url })
            }}
          />
        </div>
      </>
    )
  }
}

QuestionInfo.propTypes = {
  setInitialInfo: PropTypes.func,
}
QuestionInfo.defaultProps = {}
