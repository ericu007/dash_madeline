import dashmadeline
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_bootstrap_components as dbc
import dash_html_components as html
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

modal = html.Div(
    [
        dbc.Button("Open modal", id="open"),
        dbc.Modal(
            [
                dbc.ModalHeader("Header"),
                dbc.ModalBody("This is the content of the modal"),
                dbc.ModalFooter(
                    dbc.Button("Close", id="close", className="ml-auto")
                ),
            ],
            id="modal",
        ),
    ]
)

app.layout = html.Div([
    dbc.Button("Show Pedigree Drawing", id="open"),
    dbc.Modal(
        [
            dbc.ModalHeader("Header"),
            dbc.ModalBody(dashmadeline.DashMadeline(
                id='input',
                value='my-value',
                label='my-label'
                ),
            ),
            dbc.ModalFooter(
                dbc.Button("Close", id="close", className="ml-auto")
            ),
        ],
        id="modal",
    ),
    html.Div(id='output')
])

'''
@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)
'''


@app.callback(Output("modal", "is_open"),[Input("open", "n_clicks"), Input("close", "n_clicks")],[State("modal", "is_open")])
def toggle_modal(n1, n2, is_open):
    if n1 or n2:
        return not is_open
    return is_open


if __name__ == '__main__':
    app.run_server(debug=True)
