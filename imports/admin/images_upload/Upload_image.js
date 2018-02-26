
import React from 'react'


export default class Upload_image extends React.Component{


        uploadWidget() {
           var that = this
            
        cloudinary.openUploadWidget({ 
                cloud_name: 'dygu6sw0x', 
                upload_preset: 'wo0oqswp', 
                //tags:[original_image]//
        		},

                
            function(error, result) { 
                
                if(error){
                  alert('there is a problem with you upload. Please try again')
                }else{
                    that.props.get_Photo_id(result[0].url)  
                }
            	});
    	}

        render(){

            if (this.props.photo_state.length < 1) {
                return (
                        
                <div className="upload">
                    <button 
                            onClick={this.uploadWidget.bind(this)} >
                            Add image
                    </button>
                </div>
                )
            }

            else {
                return (
                        
                <div className="upload">
                    <img src={this.props.photo_state} width="100px"/>
                    <button 
                            onClick={this.uploadWidget.bind(this)} >
                            Change image
                    </button>
                </div>
                )
            }

                
            
                
        }
}