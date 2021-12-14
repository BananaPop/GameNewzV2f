import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import BlogRead from '../../components/crud/BlogRead';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });


  

const AdminIndex = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Admin>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-3 pb-3">
                            <h2>Admin Dashboard</h2><hr/>
                        </div>
                        <div className="col-md-auto ">
                            <ul class="">
                                
                                <li className="list-group ">
                                    <Link href="/admin/crud/category-tag">
                                        <Button className={classes.root} variant="outlined" ><a><i class="bi bi-plus-circle"></i><o> Create Category</o></a></Button>
                                    </Link>
                                </li><br/>
                                <li className="list-group">
                                    <Link href="/admin/crud/category-tag">
                                        <Button className={classes.root} variant="outlined"><a><i class="bi bi-plus-circle"></i><o> Create Tag</o></a></Button>
                                    </Link>
                                </li><br/>
                                <li className="list-group">    
                                      <Button className={classes.root} variant="outlined" href="/admin/crud/blog"><a><i class="bi bi-plus-square-fill"></i><o> Create Blog</o></a></Button>
                                </li><br/>
                                <li className="list-group">
                                    <Link href="/admin/crud/blogs">
                                     <Button className={classes.root} variant="outlined"><a><i class="bi bi-pencil-square"></i><o> Update/Delete Blogs</o></a></Button>
                                    </Link>
                                </li><br/>
                                <li className="list-group">
                                    <Link href="/user/update">
                                        <Button className={classes.root} variant="outlined"><a><i class="bi bi-person-lines-fill"></i><o>Update Profile</o></a></Button>
                                    </Link>
                                </li><br/>
                            </ul>
                        </div>
                        <hr/>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};
/*<div className="col-md-9">
                            <BlogRead />
                        </div>*/
                        
export default AdminIndex;
