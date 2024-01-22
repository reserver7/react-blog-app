import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true }: PostListProps) {
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의 글</div>
        </div>
      )}

      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">reserver7</div>
                <div className="post__date">2024.01.22 월요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
