import Layout from '../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const PostLink = (props) => (
    <li>
        <Link as={`/p/${ props.id }`} href={ `/post?title=${ props.title }&id=${ props.id }` }>
            <a>{ props.title }</a>
        </Link>
    </li>
)

const Index = (props) => (
    <Layout>
        <h1>next-ssr</h1>
        <div className="markdown">
            <Markdown source={`
                this is my index.
                have a link to [baidu](https://www.baidu.com/)
                and haha.

                ### this is a title

                and there is content
            `} />
        </div>
        <ul>
            {
                props.shows.map(({ show }) => 
                    <PostLink key={ show.id } id={ show.id } title={ show.name } />
                )
            }
        </ul>
        <style jsx global>{`
            .markdown {
                color: #f99;
            }
            li {
                list-style: none; margin: 5px 0;
            }
        `}</style>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`)
    const shows = await res.json()

    console.log(`show data fetched, count: ${ shows.length }`)

    return { shows }
}

export default Index