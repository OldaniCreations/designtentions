

## Store Video in Hidden Assets Folder

Based on our earlier conversation, I'll store your uploaded video (`AIassist.mov`) in a dedicated media folder within your project assets, not linked from any page yet.

### What I'll do:
1. Copy `user-uploads://AIassist.mov` to `public/media/AIassist.mov`

I'm using the `public/media/` folder because video files are better served as static assets rather than bundled through Vite (which has size limits for imports). When you're ready to use it, you can reference it with `/media/AIassist.mov`.

### Technical notes:
- The `public/` directory serves files as-is without processing
- No pages will reference this video until you decide where to use it
- When ready, it can be used as a video background, in a project detail page, or anywhere else

