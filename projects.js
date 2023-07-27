const n = "10000";
var total = $(".projectBox").length;
$(document).ready(function () {
  document.getElementById("filter-text").innerHTML = text(".all");

  $(".list").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".projectBox").show(n);
    } else {
      $(".projectBox")
        .not("." + value)
        .hide(n);
      $(".projectBox")
        .filter("." + value)
        .show(n);
    }
  });
  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    total = $(".projectBox").filter("." + $(this).attr("data-filter")).length;
    document.getElementById("filter-text").innerHTML = text(
      "." + $(this).attr("data-filter")
    );
  });
});

//Showing all projects. User the filter to list them by language or subject.

function text(box) {
  switch (box) {
    case ".python":
      box = "Python.";
      break;
    case ".java":
      box = "Java.";
      break;
    case ".htmlcss":
      box = "HTML & CSS.";
      break;
    case ".javascript":
      box = "JavaScript.";
      break;
    case ".sql":
      box = "SQL.";
      break;
    case ".computer":
      box = "Computer Science.";
      break;
    case ".machine":
      box = "Machine Learning.";
      break;
    case ".web":
      box = "Web Development.";
      break;
    case ".dev":
      box = "Development Tools.";
      break;
    case ".science":
      box = "Data Science.";
      break;
    case ".code":
      box = "Code Foundations.";
      break;
    default:
      box = box;
  }
  if (!box) {
    return "An error ocurred filtering, try again later.";
  }
  if (box === ".all") {
    return "Showing all projects. Choose a language or subject to filter with.";
  } else {
    if (total === 1) {
      return `Showing 1 project filtered by ${box}`;
    } else {
      return `Showing ${total} projects filtered by ${box}`;
    }
  }
}


