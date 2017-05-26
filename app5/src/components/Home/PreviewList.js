/**
 * Created by Administrator on 2017/5/25.
 */
import React,{ Component,PropTypes } from 'react';
import Preview from './Preview';

class PreviewList extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        error: PropTypes.bool,
        loadArticles: PropTypes.func,
        articleList: PropTypes.arrayOf(React.PropTypes.object)
    };

    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        const {loading, error, articleList} = this.props;

        if (error) {
            return <p className="message">天呢，出错了</p>
        }

        if (loading) {
            return <p className="message">加载中。。。</p>
        }
        return articleList.map(item => (<Preview {...item} key={item.id} />));

    }
}

export default PreviewList;