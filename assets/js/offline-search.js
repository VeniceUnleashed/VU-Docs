(function ($) {
  'use strict';

  function searchFulltext(data, query) {
    const $searchResults = $('#search-results');
    const resultDetails = new Map();

    // Create the index.
    const idx = lunr(function() {
      this.ref('ref');
      this.field('title', { boost: 100 });
      this.field('body');

      data.forEach((doc) => {
        this.add(doc);

        resultDetails.set(doc.ref, {
          title: doc.title,
          excerpt: doc.excerpt
        });
      });
    });

    // Search the index and limit to the first 100 results.
    const results = idx.query((q) => {
      const tokens = lunr.tokenizer(query);

      tokens.forEach(token => {
        const queryString = token.toString();

        q.term(queryString, {
          boost: 100
        });

        q.term(queryString, {
          wildcard:
            lunr.Query.wildcard.LEADING |
            lunr.Query.wildcard.TRAILING,
          boost: 10
        });

        q.term(queryString, {
          editDistance: 2
        });
      });
    }).slice(0, 100);

    results.forEach((r) => {
      const doc = resultDetails.get(r.ref);

      const $resultTitle = $('<strong>');
      const $resultText = $('<span>');

      $resultTitle.append($('<a>').attr('href', r.ref).text(doc.title));
      $resultText.text(doc.excerpt);

      const $searchResult = $('<div>').addClass('search-result').append($resultTitle).append($resultText);

      $searchResults.append($searchResult);
    });

    return results.length;
  }

  function searchApi(data, query) {
    const $apiResults = $('#api-results');

    var options = {
      shouldSort: true,
      matchAllTokens: true,
      includeMatches: true,
      threshold: 0.1,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        "p",
        "m",
        "v",
      ],
    };

    var fuse = new Fuse(data, options);
    var results = fuse.search(query, { limit: 30 });

    let resultCount = 0;

    for (const result of results) {
      for (const match of result.matches) {
        if (match.value.toLowerCase().indexOf(query) === -1) {
          continue;
        }

        let matchText = result.item.n;
        let matchUrl = '/' + result.item.id;

        if (match.key === 'p') {
          matchText += '.';
          matchUrl += '#' + match.value.toLowerCase();
        } else if (match.key === 'm') {
          matchText += ':';
          matchUrl += '#' + match.value.toLowerCase();
        } else if (match.key === 'v') {
          matchText += '.';
        }

        matchText += match.value;

        const $resultTitle = $('<strong>');
        const $resultText = $('<span>');

        $resultTitle.append($('<a>').attr('href', '/' + result.item.id).text(result.item.n)).append($('<span>').addClass('result-ctx').addClass(result.item.c));
        $resultText.append($('<a>').attr('href', matchUrl).text(matchText));

        const $apiResult = $('<div>').addClass('api-result').append($resultTitle).append($resultText);

        $apiResults.append($apiResult);
        ++resultCount;
      }
    }

    return resultCount;
  }

  function performSearch(apiIdx, fulltextIdx, query) {
    const apiResults = searchApi(apiIdx, query);
    const fulltextResults = searchFulltext(fulltextIdx, query);

    if (apiResults === 0 && fulltextResults === 0) {
      $('#search-status').text(`No results found for query "${query}".`);
    } else {
      $('#search-status').text(`Found ${apiResults + fulltextResults} results for query "${query}".`);
    }

    if (apiResults > 0) {
      $('#api-results').prepend($('<h3>').text('API Reference Results'));
    }

    if (fulltextResults > 0) {
      $('#search-results').prepend($('<h3>').text('Full-text Results'));
    }
  }

  window.renderSearch = function(fulltextIndexUrl, apiIndexUrl) {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('q') || '';
    const searchQueryLower = searchQuery.toLowerCase().trim();

    if (searchQueryLower.length < 2) {
      $('#search-status').text('Please enter a search query of 2 or more characters.');
      return;
    }

    let downloadedFulltext = null;
    let downloadedApi = null;

    $.ajax(fulltextIndexUrl).then((data) => {
      downloadedFulltext = data;

      if (downloadedApi !== null) {
        performSearch(downloadedApi, downloadedFulltext, searchQueryLower);
      }
    });

    $.ajax(apiIndexUrl).then((data) => {
      downloadedApi = data;

      if (downloadedFulltext !== null) {
        performSearch(downloadedApi, downloadedFulltext, searchQueryLower);
      }
    });
  };
})(jQuery);
