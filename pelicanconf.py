#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Sjillen'
SITENAME = 'Sjillen\'s Blog'
SITEURL = 'http://sjillen.github.io'

PATH = 'content'

TIMEZONE = 'Asia/Tokyo'

DEFAULT_LANG = 'en'

THEME = 'theme'

TYPOGRIFY = True


DIRECT_TEMPLATES = ['home', 'blog', 'archives', 'categories', 'portfolio']
PAGINATED_DIRECT_TEMPLATES = ['blog', 'archives', 'categories']

INDEX_SAVE_AS = 'blog.html'
HOME_SAVE_AS = 'index.html'
AUTHOR_SAVE_AS = 'about.html'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

LOAD_CONTENT_CACHE = False
