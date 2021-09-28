const CATEGORY_DATA =  [{
                name: 'politics',
                id: 1,
                linkUrl: 'politics'
            },
            {
                name: 'business',
                id:2,
                linkUrl: 'business'
            },
            {
                name: 'sport',
                id:3,
                linkUrl: 'sport'
            },
            {
                name: 'health',
                id:4,
                linkUrl: 'health'
            },
            {
                name: 'entertainment',
                id:5,
                linkUrl: 'entertainment'

      
            },
            {
                name: 'food',
                id:4,
                linkUrl: 'food'
            },
            {
                name: 'tech',
                id:4,
                linkUrl: 'tech'
            }]
 const apiUrl= 'https://i-report-project.herokuapp.com/api/'       
    
            class Categories extends React.Component {
                constructor(props){
                    super(props);
                    this.state = {
                        CATEGORY_DATA:[]
                    };
                }
            
            
                componentDidMount(){
                    debugger;
                    const self= this;
            
                    axios.get(apiUrl + "all/categories", {
                     
                    })
                    .then(function(response){
            
                    self.setState({posts:response.data})
            
                        
                    }).catch(function(error){
                        console.log('error is', error);
                    })
            
                    
                }
            
                // render(){
                //     const {CATEGORY_DATA} = this.state;
                //     return(
                //         <div className='categoryPage'>
                //             {
                //                 collections.map(({ id, ...otherCollectionProps }) => (
                //                     <CollectionPreview key={id} {...otherCollectionProps} />
                //                 ))
                //             }
                //         </div>
                //     )
                // }
            }
            
            
            export default Categories;
   