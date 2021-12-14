import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';
import BlogRead from '../../components/crud/BlogRead';
import { isAuth } from '../../actions/auth';
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

const UserIndex = () => {
    const username = isAuth() && isAuth().username;
    const classes = useStyles();
    return (
        <Layout>
            <Private>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-2 pb-2">
                            <h2>User Dashboard</h2><hr/>
                        </div>
                        <div className="col-md-auto ">
                            <ul class="">
                                <li className="list-group">
                                <Button className={classes.root} variant="outlined" href="/user/crud/blog"><><i class="bi bi-plus-square-fill"></i><o>Create Blog</o></></Button>
                                </li><br/>

                                <li className="list-group">
                                    <Link href="/user/crud/blogs">
                                       <Button className={classes.root} variant="outlined"> <a><i class="bi bi-pencil-square"></i><o> Update/Delete Blog</o></a></Button>
                                    </Link>
                                </li><br/>

                                <li className="list-group">
                                    <Button className={classes.root} variant="outlined"href="/user/update"><><i class="bi bi-person-lines-fill"></i><o> Update profile</o> </></Button>
                                </li>
                            </ul>
                        </div>
                        <hr/>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};
/*<div className="col-md-9">
                            <BlogRead username={username} />
                        </div>*/
export default UserIndex;
