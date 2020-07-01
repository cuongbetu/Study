import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(){
    super()
    this.state = {
      txtUsername : '',
      txtPassword : '',
      txtDescription :'',
      sltGender : 0,
      rdLang : 'vi',
      chkbStatus : false
    }
  }
  onHandleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    });
  }

  onHandleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state)
  }

  render(){
   

    return (   
      <div className="container mt-50">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit = { this.onHandleSubmit }>
                    <div className="form-group">
                      <label>Username :</label>
                      <input type="text"
                             className="form-control" 
                             name="txtUsername" 
                             placeholder="Xin mời nhập tên tài khoản"
                             onChange = { this.onHandleChange}  
                             />
                      <label>Password :</label>
                      <input type="password"
                             className="form-control" 
                             name="txtPassword" 
                             placeholder="Xin mời nhập mật khẩu"
                             onChange = { this.onHandleChange}  
                             />

                      <label>Mô tả :</label>
                      <textarea 
                             className="form-control" 
                             name="txtDescription" 
                             placeholder="Xin mời nhập mô tả"
                             onChange = { this.onHandleChange}  
                             />

                      <label>Giới tính :</label>
                      <select 
                             className="form-control" 
                             name="sltGender" 
                             onChange = { this.onHandleChange}
                             value =  {this.state.sltGender}
                            >
                            <option value= {0}>
                              Nữ
                            </option>
                            <option value= {1}>
                              Nam
                            </option>
                      </select>
                      <label>
                        Ngôn ngữ
                      </label>
                      <div className="radio">
                        <label>
                          <input 
                                value="vi"
                                name="rdLang"
                                type="radio"
                                onChange = { this.onHandleChange}
                                checked = { this.state.rdLang === "vi"}
                                />
                                Tiếng Việt
                        </label>
                        <br/>
                        <label>
                          <input 
                                value="en"
                                name="rdLang"
                                type="radio"
                                onChange = { this.onHandleChange}
                                checked = { this.state.rdLang === "en"}
                                />
                                Tiếng Anh
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox"
                                 value= {true}
                                 name="chkbStatus"  
                                 onChange = { this.onHandleChange }
                                 checked= { this.state.chkbStatus === true}
                                 />
                          Trạng thái
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                    <button type="reset"  className="btn btn-info">Xóa form</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
 
  
    
    
    
    );
  }
  
}

export default App;
