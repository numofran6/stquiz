import { useContext } from 'react';
import { AdvancedPostCard } from '../../shared/components';
import { Link } from 'react-router-dom';
import './ManagePosts.css';
import { Post } from '../../shared/context/PostContext';

export const ManagePosts = () => {
	const {
		states: { posts },
	} = useContext(Post);

	if (posts.length < 1) {
		return (
			<>
				<div className="no-created-post-container landing-background">
					<h1 className="text-xl">You haven't created any posts yet</h1>
					<Link to={'/create-post'} className="blue-btn-inverse">
						Add Post
					</Link>
				</div>
			</>
		);
	}

	return (
		<main className="landing-background pb-40">
			<div className="max-w-container">
				<div className="manageposts-heading">
					<div>
						<h1 className="uppercase font-light">Wrote by you</h1>
						<p className="text-xl font-bold">
							Your story, how you want to tell it.
						</p>
					</div>

					<div>
						<Link to={'/create-post'} className="blue-btn-inverse w-fit">
							Add more posts
						</Link>
					</div>
				</div>

				<div className="manageposts-posts-section">
					{posts.map((item, index) => (
						<div key={index}>
							<AdvancedPostCard
								image={item.img}
								title={item.title}
								description={item.description}
								date={item.date}
								author={item.author}
							/>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};
