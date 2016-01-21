var CommentList = React.createClass({
    render: function(){
        return (
           <div className="commentList">
               <Comment author="Pete Sampras">one comment of pete</Comment>
               <Comment author="Andre Agassi">one comment of *andre*</Comment>
            </div>
        );
    }
});