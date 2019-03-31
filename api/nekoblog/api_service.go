package nekoblog

import (
	neko_blog_pb "../proto"
)

type nekoBlogService struct {
	api *nekoBlogApi
}

func NewNekoBlogService(api *nekoBlogApi) *nekoBlogService {
	if api == nil {
		api = NewHackerNewsApi(nil)
	}
	return &nekoBlogService{api}
}

func (s *nekoBlogService) ListStories(req *neko_blog_pb.ListStoriesRequest, resp hackernews_pb.HackerNewsService_ListStoriesServer) error {
	stories, err := s.api.TopStories()
	defer close(stories)
	if err != nil {
		return err
	}
	for story := range stories {
		resp.Send(&hackernews_pb.ListStoriesResponse{
			Story: story,
		})
	}

	return nil
}
