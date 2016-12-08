/*
Title: How to get Youtube RSS feeds
Sort: 1
*/

You can get the feeds like this:
```
https://www.youtube.com/feeds/videos.xml?channel_id=CHANNELID
https://www.youtube.com/feeds/videos.xml?user=USERNAME
https://www.youtube.com/feeds/videos.xml?playlist_id=YOUR_YOUTUBE_PLAYLIST_NUMBER
```

> But the JSON format which used to be supported (with additional parameter **&alt=JSON**) is not supported anymore.  
> Additionally you can request for API key for public access to your YouTube videos from your [developer console](https://console.developers.google.com/) and get YouTube Videos, Playlists in JSON format like this:

```
- Get Channels:
  https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&forUsername={YOUR_USER_NAME}&key={YOUR_API_KEY}
- Get Playlists:
  https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId={YOUR_CHANNEL_ID}&key={YOUR_API_KEY}
- Get Playlist Videos:
  https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId={YOUR_PLAYLIST_ID}&key={YOUR_API_KEY}
```

More information from [YouTube v3 docs](https://developers.google.com/youtube/v3/guides/implementation/videos)
