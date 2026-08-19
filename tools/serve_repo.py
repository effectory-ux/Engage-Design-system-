#!/usr/bin/env python3
"""Static file server for the repo (used by the preview dev server).

Serves this directory (the repo root) with caching disabled so edits show up
immediately. Port resolution order: $PORT env → first CLI arg → 3000.
Kept as a stable, committed file so the preview launch config never points at
a throwaway scratchpad path again.
"""
import http.server
import os
import sys


def resolve_port():
    for candidate in (os.environ.get("PORT"), sys.argv[1] if len(sys.argv) > 1 else None):
        if candidate:
            try:
                return int(candidate)
            except ValueError:
                pass
    return 3000


PORT = resolve_port()
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # always serve fresh — no browser caching during design iteration
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


with http.server.HTTPServer(("", PORT), Handler) as httpd:
    print(f"Serving {DIRECTORY} at http://localhost:{PORT}")
    httpd.serve_forever()
