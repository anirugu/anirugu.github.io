---
title: "Understanding Local Functions in C#"
date: 2018-01-25T12:00:00-04:00
categories:
  - blog
tags:
  - C#
---
C# 7.0 introduced local functions, which allow you to declare methods inside the scope of another method. This is incredibly useful for keeping helper methods private and scoped to only where they are needed.

Here is a quick example of a local function inside the `Main` method:

```csharp
static void Main(string[] args)
{
    // Local function declaration
    int Sum(int x, int y)
    {
        return x + y;
    }

    // Calling the local function
    int res = Sum(5, 2);
    Console.WriteLine(res);
}
```

This simple example demonstrates how clean and readable your code can remain when utilizing local functions to scope logic.

Happy coding!

