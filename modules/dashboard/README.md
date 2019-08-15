### POS Dashboard is Administration panel for POS ###

List of features:

* user management, roles

### Installation ###

#### dependencies
Dashboard modules has two dependencies, please install them first
* utils
* signup

install as module to modules/ directory of your projcet

### Enabling features
* Google analytics - make sure to include partial in your frontend layout or desired pages:

```
{% include "modules/dashboard/google_analytics" %}
```

### Useage

After installation go to `/log-in` path and log-in as default user with:

```
email: admin@example.com
password: admin1234
```

Create new user and remove default admin.


### Contribution guidelines ###

`git submodule add git@bitbucket.org:lemingos/pos-dashboard.git modules/dashboard`

### Who do I talk to? ###

* Repo owner or admin
