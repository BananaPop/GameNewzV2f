import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API, DOMAIN, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@mui/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });


const Card = ({ blog, router }) => {

    const classes = useStyles();
    
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <>
                <Link key={i} href={`/categories/${c.slug}`}>
                    <a className="btn btn-sm btn-secondary mt-1">{c.name}</a>
                </Link> {' '}
            </>
        ));


    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <>
                <Link key={i} href={`/tags/${t.slug}`}>
                    <a className="btn btn-sm btn-outline-secondary mt-1">{t.name}</a>
                </Link> {' '}
            </>
        ));

    return (
        <>
            <div className="carousel-inner h-100 ">
                < >
                <Link href={`/blogs/${blog.slug}`}>
                    <img
                        className="img img-fluid h-50  "
                        style={{ }}
                        src={`${API}/blog/photo/${blog.slug}`}
                        alt={blog.title}
                        loading="lazy"
                    />
                </Link>
                </>
                <><div className="card-header h-100">
                    <h7 className="card-title text-center ">
                        <Link href={`/blogs/${blog.slug}`}><Button className={classes.root} variant="outlined"><l>{blog.title}</l></Button></Link>
                    </h7>
                    <div className="text-center">
                        {showBlogCategories(blog)}
                        {showBlogTags(blog)}
                    </div>
                    <small className="text-muted ">
                        Written by{' '}
                        <Link href={`/profile/${blog.postedBy.username}`}>
                            <a>{blog.postedBy.name}</a>
                        </Link>{' '}
                        | {moment(blog.updatedAt).fromNow()}
                    </small>
                    <div className="text col-mb-1 " >
                        
                        <div className=" text-center">
                                                  
                        </div>
                    </div>
                </div></>
            </div>
        </>
    );
};
//<div>{renderHTML(blog.excerpt)}</div>
//<><Button className={classes.root} variant="contained" href={`/blogs/${blog.slug}`} ><> Read more </></Button></> 
export default withRouter(Card);



/*<Link href={`/blogs/${blog.slug}`}>
                    <img
                        className="img img-fluid h-50  "
                        style={{ width: 'auto', objectFit: 'auto' }}
                        src={`${API}/blog/photo/${blog.slug}`}
                        alt={blog.title}
                    />
                </Link>*/