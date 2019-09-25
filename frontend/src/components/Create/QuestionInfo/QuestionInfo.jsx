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
// style
import './QuestionInfo.scss'

export default class QuestionInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleAddData = this.handleAddData.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
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
    const { index, changePage, addQuestion } = this.props
    if (num > 0) {
      addQuestion(R.dissoc('index', this.state))
    }
    changePage(num)
  }

  render() {
    const { prob, sol, questionImage, options, correct } = this.state
    const { index, questions, createQuiz } = this.props
    return (
      <>
        <StageManager
          finalStage={index + 1 === questions.length}
          finalStageLabel="ایجاد آزمون"
          firstStage={index === 0}
          onLeftClick={() => this.handleChangePage(1)}
          onRightClick={() => this.handleChangePage(-1)}
          onFinalStageClick={createQuiz}
          // stageLevel={`سوال شماره ${questionIndex + 1}`}
          stageName="آزمون"
        />
        <div className="c--question-info_container">
          <TextArea
            onChange={this.handleAddData('prob')}
            value={prob}
            label="سوال"
            placeholder="صورت سوال را وارد کنید"
          />
          <FileUpload id="kind" onUpload={() => console.log('kind')} />
          <TextField
            onChange={this.handleAddOption(0)}
            value={options[0]}
            label="گزینه یک"
            placeholder="متن گزینه یک"
          />
          <TextField
            onChange={this.handleAddOption(1)}
            value={options[1]}
            label="گزینه دو"
            placeholder="متن گزینه دو"
          />
          <TextField
            onChange={this.handleAddOption(2)}
            value={options[2]}
            label="گزینه سه"
            placeholder="متن گزینه سه"
          />
          <TextField
            onChange={this.handleAddOption(3)}
            value={options[3]}
            label="گزینه چهار"
            placeholder="متن گزینه چهارم"
          />
          <GroupButton />
          <TextArea
            onChange={this.handleAddData('sol')}
            value={sol}
            label="پاسخ تشریحی"
            placeholder="پاسخ تشریحی را وارد کنید"
          />
          <FileUpload id="kind" onUpload={() => console.log('kind')} />
        </div>
      </>
    )
  }
}

QuestionInfo.propTypes = {
  setInitialInfo: PropTypes.func,
}
QuestionInfo.defaultProps = {}
