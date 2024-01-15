var Table = React.createClass({
    displayName: "Table",
    getDefaultProps: function () {
      return {
          name: "EdTern communities",
          elements: []
      };
  },
    render: function () {
      return React.DOM.div(
        null,
        React.DOM.h4(
          { className: "title" },
          this.props.name
        ),
        React.DOM.table(
          { className: "table" },
          React.DOM.thead(
            null,
            React.DOM.tr(
              null,
              React.DOM.th(null, "ID"),
              React.DOM.th(null, "Name"),
              React.DOM.th(null, "Description"),
              React.DOM.th(null, "Moderators"),
              React.DOM.th(null, "Members"),
              React.DOM.th(null, "Baner")
            )
          ),
          React.DOM.tbody(
            null,
            this.props.elements.map(function (element) {
              return React.DOM.tr(
                { key: element.id },
                React.DOM.td(null, element.id),
                React.DOM.td(null, element.name),
                React.DOM.td(null, element.description),
                React.DOM.td(null,            
                  element.moderators.map(function(moderator) {
                    return React.DOM.div(
                        null,
                        `login: ${moderator.login}`,
                        React.DOM.br(),
                        `email: ${moderator.email}`
                    );
                })),
                React.DOM.td(null, element.members),
                React.DOM.td(
                    null,
                    React.DOM.img({
                      src: "./data/img/" + element.baner,
                      className: "lang_img",
                      alt: element.name
                    })
                  )
              );
            })
          )
        )
      );
    },
  });