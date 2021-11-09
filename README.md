# dashmadeline

dashmadeline is a Dash component that uses the Pedigree Drawing Engine Madeline (https://madeline.med.umich.edu/madeline/install.php) written by written by Edward H. Trager, Ritu Khanna, and Adrian Marrs.
It lets you visualize a family tree based on a relationship data of families and individuals.

## Getting Started
1. Make sure to clone this project, create a venv and install requirements:
    ```
    $ git clone https://github.com/ericu007/dash_madeline.git
    $ cd dashmadeline
    ```
2. Install npm packages
    ```
    $ npm install
    ```
3. Create a virtual env and activate.
    ```
    $ virtualenv venv
    $ . venv/bin/activate
    ```
    _Note: venv\Scripts\activate for windows_

4. Install python packages required to build components.
    ```
    $ pip install -r requirements.txt
    ```
5. Install the python packages for testing (optional)
    ```
    $ pip install -r tests/requirements.txt
    ```
6. Build your code
    ```
    $ npm run build
    ```
7. Run and modify the `usage.py` sample dash app:
    ```
    $ python usage.py
    ```


## Notice

This is currently a community-maintained library, and is not an official Plotly product. If you would like to develop this, please reach out to me. If you would like to see official support, please reach out to [Plotly directly](https://plot.ly/products/consulting-and-oem/).