(function ($) {
  'use strict';

  window.renderSearch = function (indexURL) {
    const $searchResults = $('#search-results');
    const $apiResults = $('#api-results');

    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('q');
    const searchQueryLower = searchQuery.toLowerCase();

    // Download the index and search it.
    let idx = null; // Lunr index
    const resultDetails = new Map();

    $.ajax('/json/vext-api.json').then((apiData) => {
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
          "fields",
          "methods"
        ]
      };

      var fuse = new Fuse(apiData, options);
      var results = fuse.search(searchQuery, { limit: 15 });

      for (const result of results) {
        let matches = [];

        for (const match of result.matches) {
          if (match.value.toLowerCase().indexOf(searchQueryLower) === -1) {
            continue;
          }

          let matchText = result.item.name;

          if (match.key === 'fields') {
            matchText += '.';
          } else {
            matchText += ':';
          }

          matchText += match.value;

          matches.push(matchText);
        }

        if (matches.length === 0) {
          continue;
        }

        console.log('<div>' + matches.join('<br/>') + '</div>');

        $apiResults.append($('<div>' + matches.join('<br/>') + '</div>'));
      }
    });

    $.ajax(indexURL).then((data) => {
      const idx = lunr(function () {
        this.ref('ref');
        this.field('title', { boost: 2 });
        this.field('body');

        data.forEach(doc => {
          this.add(doc);

          resultDetails.set(doc.ref, {
            title: doc.title,
            excerpt: doc.excerpt
          });
        });
      });

      const results = idx.query(q => {
        const tokens = lunr.tokenizer(searchQuery.toLowerCase());
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
      }).slice(0, 50);

      //
      // Make result html
      //

      $searchResults.html('');
      const $html = $searchResults;

      $html.append(
        $('<div>')
          .css({
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1em'
          })
      );

      const $searchResultBody = $('<div>').css({
        overflowY: 'auto'
      });

      $html.append($searchResultBody);

      if (results.length === 0) {
        $searchResultBody.append(
          $('<p>').text(`No results found for query "${searchQuery}"`)
        );
      } else {
        results.forEach(r => {
          const $cardHeader = $('<div>').addClass('card-header');
          const doc = resultDetails.get(r.ref);

          $cardHeader.append(
            $('<a>')
              .attr('href', r.ref)
              .text(doc.title)
          );

          const $cardBody = $('<div>').addClass('card-body');
          $cardBody.append(
            $('<p>')
              .addClass('card-text text-muted')
              .text(doc.excerpt)
          );

          const $card = $('<div>').addClass('card');
          $card.append($cardHeader).append($cardBody);

          $searchResultBody.append($card);
        });
      }
    });
  };
})(jQuery);
