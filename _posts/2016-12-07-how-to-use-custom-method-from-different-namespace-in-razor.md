---
title: "How to Use a Custom Method from a Different Namespace in Razor Views"
date: 2016-12-07T12:00:00-04:00
categories:
  - blog
tags:
  - General
---
To use helper methods or extension methods from a custom library in your Razor views, you need to add their namespace to the `Views/web.config` file.

For example, to use LINQ extension methods in your views, add the following line inside the `<namespaces>` section of the `web.config` file located under the `Views` directory:

```xml
<add namespace="System.Linq" />
```

When you open the `Views/web.config` file, you will see a list of pre-configured namespaces under `<system.web.webPages.razor> / <pages> / <namespaces>`. Once you add your custom namespace here, you will be able to access its methods across any of your view pages without needing to declare `@using MyCustomNamespace` at the top of every file.

Note: If IntelliSense does not update immediately in Visual Studio, simply close and restart the IDE to refresh the Razor compiler's cache.

