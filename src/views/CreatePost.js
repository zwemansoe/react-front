import React,{Component} from 'react';
import axioApi from './../axioConfig.js';
import qs from 'qs';
import CreatableSelect from 'react-select/lib/Creatable';

let $this;

export default class CreatePost extends Component{

	constructor(props){
		super(props);
		this.state={title:'',description:'',tags:[],alltags:[]}
		$this=this;
	}
	componentDidMount(){

		axioApi.get('tags').then((res)=>{
			$this.setState({
				alltags:res.data
			});
		});

		setTimeout(function(){
			axioApi.get('auth/user').then((res)=>{
				console.log(res.data);
			}).catch((err)=>{
				$this.props.history.push('/login');
			})
		},1500)
	}

	changeTitle(e){
		$this.setState({title:e.target.value});
	}

	changeDescription(e){
		$this.setState({description:e.target.value});
	}

	// tagsSelectChange(selectedtag){
	// 	const tagss=$this.state.tags;
	// 	tagss.push(selectedtag);
	// 	$this.setState({tags:tagss});
	// }
	tagsSelectChange=(selectedtag)=>{		
		$this.setState({tags:selectedtag});
	}

	savePost(){
		const postdata={
			title:$this.state.title,
			description:$this.state.description,
			tags:$this.state.tags
		}
		postdata.tags=postdata.tags.map(function(t){
				return t.label;
		})
		console.log(postdata);
		axioApi.post('posttag',postdata).then((res)=>{

		});
	}

	render(){
		return(
			  	<div>
      		<hr/>
            <h1>Post Create</h1>
            
                <br/>
                <div className="form-group">
                    <label>Title</label>
                    <input onChange={this.changeTitle} name="title" type="text" className="form-control" id="title" aria-describedby="title" placeholder="Enter Title" />						
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input onChange={this.changeDescription}  name="description" type="email" className="form-control" id="description" aria-describedby="description" placeholder="Enter Description" />						
                </div>
                <div className="form-group">
                    <label>Tags</label>
                    {/* <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={$this.state.tags}
                        isMulti = {true}
                    /> */}
                    {/* <CreatableSelect
                    isMulti
                    onChange={this.handleChange}
                    options={$this.state.tags}
                    /> */}
                    <CreatableSelect
                        isClearable
                        onChange={this.tagsSelectChange}
                        //onInputChange={this.handleInputChange}
                        options={this.state.alltags}
                           // options={this.alltags}//{[{value:1,label:'label1'},{value:2,label:'label2'}]}
                        isMulti = {true}
                    />
                
                </div>
                        
                <button type="submit" onClick={this.savePost} className="btn btn-primary">Submit</button>
				
      	
            <hr/>
      	</div>

		);
	}


}