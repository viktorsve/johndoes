export function numberFunction() {
  $("button").click(function() {
    $(".screen").append($(this).text());
  });
}