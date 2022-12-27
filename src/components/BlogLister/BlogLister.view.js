function BlogListerView(props) {
	return (
		<div className="BlogListerView">
			<div className="AddBlogTile">
				<input type="text" name="Title" onChange={props.handleTitle} className="createBlogInput" placeholder="Title" />
				<button
					onClick={async () => {
						props.onCreate();
					}}
					className="createBlogButton"
				>
					Create Blog
				</button>
				<button className="logout-button" onClick={props.logout}>Logout</button>
			</div>
			<div className="BlogListerBlogs">
				{props.blogs && Object.keys(props.blogs).map((key) => (
					<div className="BlogTile" key={key}>
						<a href={"/edit/" + key} className="BlogTile">
							<div className="BlogTileData">
								<h2>{key}</h2>
								<h4>{props.blogs[key].Title}</h4>
							</div>
						</a>
						<div className="BlogTileDelete">
							<img src="/delete-button.png" alt="Delete" onClick={() => { props.onDelete(key) }} className="BlogTileDeleteLogo" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default BlogListerView;
