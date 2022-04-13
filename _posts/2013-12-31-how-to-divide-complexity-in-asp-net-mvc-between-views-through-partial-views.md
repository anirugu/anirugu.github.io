<p>In ASP.NET MVC We use Views and it’s help us to return a web-page back to browser. After Execution the Views we still have control on our response until Response.End() has called from ASP.NET itself.</p>

<p>In asp.net we use ViewBag and ViewData to pass the data. TempData is also can be used which is based on session and stay alive until second view has been returned.</p>

<p>For divining the complexity We use Partials to divide the whole page into many partials. For example.</p>

<p><a href="https://gist.github.com/anirugu/8192708#file-multiple-models-through-a-partials" title="https://gist.github.com/anirugu/8192708#file-multiple-models-through-a-partials">https://gist.github.com/anirugu/8192708#file-multiple-models-through-a-partials</a></p>

<p>Using this way your partial have also data passed from their own PartialViewResult in Controller itself. You can call them something like this</p>

<p>@{<br />
 Html.Action("Partial1","Home");<br />
}</p>

<p>Using given way we doesn’t need to care about passing viewdata to every partial. Remember that If controller is inherited from another class which have some ActionFilter attribute then they will also called in this implementation.</p>

<p>If your current action have data for the partial which you don’t want to retrieve again from database then you can also call it by pass then to partial directly from current View. For example look at this code.</p>

<p>@Html.Partial("~/Views/Home/Partial1.cshtml", new ViewDataDictionary { { "test", "test" } })</p>

<p>I pass the string “Test” in other case you call also pass the viewdata. for example ViewData.test .</p>

<p>Another way to divide the complexity is make a new custom class which contain all these information as property. For example <a href="https://gist.github.com/anirugu/8192888" title="https://gist.github.com/anirugu/8192888">https://gist.github.com/anirugu/8192888</a></p>

<p>In this post I shown you 2 way to use partials to divide complexity.</p>

<p>Thanks for read my post <img src="/2013_12_31_how_to_divide_complexity_Image1.png" alt="Smile" /></p>
