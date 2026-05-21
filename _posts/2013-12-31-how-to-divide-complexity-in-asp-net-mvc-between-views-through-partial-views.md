---
title: "How to Reduce View Complexity in ASP.NET MVC Using Partial Views"
date: 2013-12-31T12:00:00-04:00
categories:
  - blog
tags:
  - .NET
  - MVC
  - HTML
  - ASP.NET
---
In ASP.NET MVC, we use Views to render and return web pages to the browser. After a View executes, we still have control over the response until ASP.NET itself invokes `Response.End()`.

To pass data from controllers to views, we use `ViewBag` and `ViewData`. We can also use `TempData`, which is backed by the session state and persists until the next request (typically when the next view is rendered).

To manage and reduce view complexity, we can use Partial Views to break a single large page down into smaller, reusable components. For example:

[Multiple Models through Partials - Gist](https://gist.github.com/anirugu/8192708#file-multiple-models-through-a-partials)

This allows your partial views to receive data directly from their own action methods in the controller via `ChildActionOnly` or `PartialViewResult`. You can invoke them like this:

```razor
@{
    Html.Action("Partial1", "Home");
}
```

By using `Html.Action`, you don't need to manually pass parent view data to every partial. However, keep in mind that if the target controller inherits from a class with active `ActionFilter` attributes, those filters will run for the child action as well.

If the current controller action already has the necessary data and you want to avoid hitting the database again, you can pass the data directly to the partial view. For example:

```razor
@Html.Partial("~/Views/Home/Partial1.cshtml", new ViewDataDictionary { { "test", "test" } })
```

In this example, we pass a key-value pair containing a string, but you can also pass standard model data or the existing `ViewData` dictionary.

Another way to manage view complexity is by creating a ViewModel—a custom class that aggregates all the required data properties. For example, see this [Gist](https://gist.github.com/anirugu/8192888).

In this post, we explored two ways to use partial views to break down complex UI structures in ASP.NET MVC.

Thanks for reading my post! <img src="/2013_12_31_how_to_divide_complexity_Image1.png" alt="Smile" />
