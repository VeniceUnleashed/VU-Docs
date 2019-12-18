// Adapted from code by Matt Walters https://www.mattwalters.net/posts/hugo-and-lunr/

(function ($) {
  'use strict';

  window.renderSearch = function (indexURL) {
    const $searchResults = $('#search-results');

    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('q');

    // Download the index and search it.
    let idx = null; // Lunr index
    const resultDetails = new Map();

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

  $(document).ready(function () {
    const $searchInput = $('.td-search-input');

    //
    // Options for popover
    //

    $searchInput.data('html', true);
    $searchInput.data('placement', 'bottom');

    // Redirect to full results page when someone presses enter.
    $searchInput.keypress(e => {
      if (e.which !== 13) {
        return true;
      }

      document.location.href = '/search?q=' + encodeURIComponent($searchInput.val());

      return false;
    });

    // Prevent reloading page by enter key on sidebar search.
    $searchInput.closest('form').on('submit', () => {
      return false;
    });
  });
})(jQuery);
