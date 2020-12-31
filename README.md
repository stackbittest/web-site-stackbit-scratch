## Jekyll challenges

### Output URL

When it comes to building output URLs, Jekyll is highly opinionated about filenames and front matter keys.

As far as I can tell, there is **not** any good way to tell Jekyll to use the value of an arbitrarily-named front matter key (e.g. `urlfragment`) in the HTML output path.  From what I see, these are your only options:

* If your `.md` files are being picked up by Jekyll as part of its miscellaneous "page" loop, you'll have to hand-set a meaningful value for a `permalink` front matter key or carefully name the file.
* If your `.md` files are being picked up by Jekyll as part of a loop over a "collection" _(whether explicitly defined or the one Jekyll automatically makes out of `/_posts/`)_, you also have options to influence the output path by hand-setting a meaningful value for a `slug` front matter key.
    * If your `.md` files are being picked up by Jekyll as part of the "collection" Jekyll automatically makes out of `/_posts/`, theoretically you could also play with hand-setting meaningful values in a `categories` front matter key.

Unless there's something I haven't yet learned about the potential to pre-process `.md` files in Jekyll so that custom Ruby code could write `permalink` or `slug` on your behalf using data you'd already hand-written into an arbitrarily-named `urlfragment` front matter key, you're going to have to tailor your CMS configuration around Jekyll's front matter magic names such as `permalink` and `slug`, and not try to render URL paths based off custom front matter key names like `urlfragment`.

This is a bit frustrating, since words like `slug` can also be magic names in CMSes themselves.  For example, Stackbit Studio seems to treat `{slug}` in a `stackbit.yaml` as a variable for its optional `filePath` setting, through which it can interpret existing or create new `.md` files, and also as a variable for its optional `urlPath` setting, though which it can display previews of the resulting HTML output.

I'm finding it difficult to develop a content model for `.md` file front matter that lets me create, edit, and delete the files with Stackbit Studio as a CMS, yet quickly change my mind about which static site generator I'd like to use for rendering the `.md` files into HTML.

### Orange three-dot problem when editing

Can't figure out why I have the problem _(edits that never finish "saving" or display as previews inline until I hard-reload the page)_ and **jekyll-klise** doesn't.

---

## Gatsby challenges

Gatsby doesn't seem to make too many "magic word" assumptions about the filenames you use for `.md` files or about the key names you choose for their front matter, so I was able to much more reliably get Stackbit Studio working with the creation and deletion of `.md` files, since I could free up `slug` to be used only by `stackbit.yaml` and completely meaningless to Gatsby.

I was also able to get a codebase up and running that saved and refreshed my inline preview relatively quickly _(although not as quickly as Simon's adapted themes, I believe -- why not?)_.

However, Gatsby's "data cascade," if you will, can be pretty complex to set up in a way that achieves the goal one is aiming for, and this was no exception.

I was not able to click on a piece of data within my Stackbit Studio inline preview and be jumped to the appropriate part of the sidebar.  I had to find it myself in the sidebar.

---

## Misc notes

Gatsby magic folders _(`/src/pages/xyzzy/*.md` is one and will result in `example.com/xyzzy/*` patterns -- although note that `/src/pages/about.js` will be `example.com/about`, so be careful)_:  https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/

Gatsby URL generation from data:  you only need to hand-code setting a slug-like thing from a filename in `gatsby-node.js` if you're using `.md` files and the front matter doesn't already have the data you're looking for.  If you're using a headless CMS, of course you bothered to put a slug-like thing into the data, so you can also just "read the data."  https://www.gatsbyjs.com/docs/tutorial/part-seven/

Jekyll local-machine build/serve:  `bundle exec jekyll build`, `bundle exec jekyll serve`