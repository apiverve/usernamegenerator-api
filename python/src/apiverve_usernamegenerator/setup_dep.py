from setuptools import setup, find_packages

setup(
    name='apiverve_usernamegenerator',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Username Generator creates handle suggestions from a person's name or email address. It returns an array of suggested usernames based on the input, while paid plans can request multiple options at once.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/usernamegenerator?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
